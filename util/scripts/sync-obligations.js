const fs = require("node:fs");
const path = require("node:path");
const { Fhir } = require("fhir-tool");
const { parse: parseYaml } = require("yaml");

const OBLIGATION_URL = "http://hl7.org/fhir/StructureDefinition/obligation";

class CliParser {
  YAML_FORMAT = `
...
[profile id]:
  unmatched obligations:
    [path of the element]:
      - actor: [canonical url for the actor that doesn't match]
        reason: [explanation for the mismatch]
      - actor: [canonical url for another actor that doesn't match]
        reason: [explanation for the mismatch]
...
`

  USAGE = `
Usage:
  node sync-obligations.js \\
    [--copy] \\
    --actor <canonical> [--actor <canonical> ...] \\
    <profile.xml> <logical-model.json>

Arguments:
  profile.xml
      FHIR profile StructureDefinition in XML format.

  logical-model.json
      FHIR Logical Model StructureDefinition in JSON format.

Required options:
  --actor <canonical>
      Check obligations that apply to this ActorDefinition.

      At least one --actor option is required. The option may be repeated.

      Canonical versions are ignored when matching. For example:

        https://example.org/ActorDefinition/sender|1.0.0

      matches:

        https://example.org/ActorDefinition/sender

      Obligations without an actor are ignored.

Other options:
  --copy
      Copy matching obligation extensions from the logical model to the
      profile and update the profile XML file in place.

      Without --copy, the profile is not modified. The script reports:

      - an obligation exists in the logical model but not in the profile;
      - the obligation codes for an actor differ;
      - an obligation exists in the profile but not in the logical model.

  --suppressions <file.yaml>
      Suppress known discrepancies in check mode.

      The format for the YAML file is:      
      
      ${this.YAML_FORMAT.split("\n").map(line => "      " + line).join("\n")}

      This option cannot be combined with --copy.

  --help, -h
      Show this help.
`

  printUsage() {
    console.log(this.USAGE.trim());
  }

  parse() {
    this.options = {
      actors: [],
      copy: false,
      suppressionsFilename: undefined,
      profileFilename: undefined,
      logicalModelFilename: undefined,
    };

    const positionalArguments = [];

    for (let index = 2; index < process.argv.length; index += 1) {
      const argument = process.argv[index];

      switch (argument) {
        case "--actor": {
          const actor = process.argv[++index];

          if (!actor || actor.startsWith("--")) {
            throw new Error("--actor requires a canonical URL.");
          }

          this.options.actors.push(actor);
          break;
        }

        case "--copy":
          this.options.copy = true;
          break;

        case "--suppressions": {
          const filename = argumentsList[++index];

          if (!filename || filename.startsWith("--")) {
            throw new Error("--suppressions requires a YAML filename.");
          }

          this.options.suppressionsFilename = filename;
          break;
        }

        case "--help":
        case "-h":
          this.printUsage();
          process.exit(0);
          break;

        default:
          if (argument.startsWith("--")) {
            throw new Error(`Unknown option "${argument}".`);
          }

          positionalArguments.push(argument);
          break;
      }
    }

    if (positionalArguments.length !== 2) {
      throw new Error("Expected a profile XML file and a logical-model JSON file.");
    }

    if (this.options.actors.length === 0) {
      throw new Error("At least one --actor option is required.");
    }

    if (this.options.copy && options.suppressionsFilename) {
      throw new Error("--suppressions can only be used in check mode, without --copy.");
    }

    [
      this.options.profileFilename,
      this.options.logicalModelFilename,
    ] = positionalArguments;
  }
}

class Suppressions {
  #suppressions = new Map();

  constructor(filename) {
    if (!filename) return;

    let document;
    try {
      document = parseYaml(fs.readFileSync(filename, "utf8"));
    } catch (error) {
      throw new Error(`Cannot read YAML file "${filename}": ${getErrorMessage(error)}`);
    }
    if (document === null || typeof document !== "object" || Array.isArray(document)) {
      throw new Error(`Suppression file "${filename}" must contain a YAML object.`);
    }

    for (const profileId of document) {
      if ("unmatched obligations" in document[profileId]) {
        const unmatchedObligations = document[profileId]["unmatched obligations"];
        if (unmatchedObligations === null || typeof unmatchedObligations !== "object" || Array.isArray(unmatchedObligations)) {
          throw new Error(`"unmatched obligations" for profile "${profile.id}" must be an object keyed by profile path:\n${CliParser.YAML_FORMAT}`);
        }

        const profilePaths = new Map();
        for (const [profilePath, entries] of Object.entries(unmatchedObligations)) {
          if (!Array.isArray(entries)) {
            throw new Error(`Suppressions for path "${profilePath}" must be a list:\n${CliParser.YAML_FORMAT}`);
          }

          const actors = [];
          for (const entry of entries) {
            if (entry === null || typeof entry !== "object" || Array.isArray(entry)) {
              throw new Error(`Each suppression for path "${profilePath}" must be an object:\n${CliParser.YAML_FORMAT}`);
            }

            if (typeof entry.actor !== "string" || entry.actor.trim() === "" ) {
              throw new Error(`The suppression for path "${profilePath}" must have an actor:\n${CliParser.YAML_FORMAT}`);
            }

            if (typeof entry.reason !== "string") {
              throw new Error(`The suppression reason for path "${profilePath}" and actor "${entry.actor}" must be provided as a string:\n${CliParser.YAML_FORMAT}`);
            }

            actors.push(stripVersionFromCanonical);
          }
          profilePaths.set(profilePath, actors);
        }
        this.#suppressions.set(profileId, profilePaths);
      }
    }
  }

  get(profileId, path, actor) {
    return (profileId in this.#suppressions) && 
      (path in this.#suppressions.profileId) &&
      (actor in this.#suppressions.profileId.path)
  }
}

function getErrorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

function stripVersionFromCanonical(canonical) {
  return canonical.trim().split("|")[0];
}

function canonicalJson(value) {
  if (Array.isArray(value)) {
    return `[${value.map(canonicalJson).join(",")}]`;
  }

  if (value !== null && typeof value === "object") {
    return `{${Object.keys(value)
      .sort()
      .map(key => `${JSON.stringify(key)}:${canonicalJson(value[key])}`)
      .join(",")}}`;
  }

  return JSON.stringify(value);
}

class ObligationComparator {
  constructor(profile, logicalModel, actors, suppressions) {
    this.profile      = profile;
    this.logicalModel = logicalModel;
    this.actors       = actors;
    this.suppressions = suppressions;
    this.#determineMappingIdentity();
    this.#buildLogicalModelIndex();
  }

  copy() {
    // We simply copy both to the snapshot and the differential and assume
    // they are in sync. Other tools will check this.
    if (this.profile.differential) {
      this.#copyObligations(this.profile.differential.element);
    }
    if (this.profile.snapshot) {
      this.#copyObligations(this.profile.snapshot.element);
    }
  }

  report() {
    if (this.profile.differential) {
      return this.#reportDiscrepancies(this.profile.differential.element);
    }
    if (this.profile.snapshot) {
      return this.#reportDiscrepancies(this.profile.snapshot.element);
    }
  }
  
  #copyObligations(elements) {
    for (const profileElement of elements) {
      const resolvedTargetElements = this.#resolveTargetElements(profileElement);
      if (resolvedTargetElements.size === 0) continue;

      profileElement.extension ??= [];
      const existingObligations = new Set(this.#getObligations(profileElement).map(canonicalJson));

      for (const targetElement of resolvedTargetElements) {
        for (const obligation of this.#getObligations(targetElement)) {
          if (!this.#obligationAppliesToActors(obligation)) {
            continue;
          }

          const canonicalObligation = canonicalJson(obligation);

          if (existingObligations.has(canonicalObligation)) {
            continue;
          }

          profileElement.extension.push(structuredClone(obligation));
          existingObligations.add(canonicalObligation);

          console.log(`Copied obligation from ${targetElement} to ${profileElement.path ?? profileElement.id}`);
        }
      }

      if (profileElement.extension.length === 0) {
        delete profileElement.extension;
      }
    }
  }

  #reportDiscrepancies(elements) {
    const result = {
      discrepancyCount: 0,
      suppressedCount: 0,
    };

    for (const profileElement of elements) {
      for (const lmElement of this.#resolveTargetElements(profileElement)) {
        const profileObligationsByActor = this.#getActorObligations(profileElement);
        const modelObligationsByActor = this.#getActorObligations(lmElement);

        for (const actor of this.actors) {
          const profileObligations = profileObligationsByActor.get(actor);
          const modelObligations = modelObligationsByActor.get(actor);

          let discrepancyType;
          if (modelObligations.present && !profileObligations.present) {
            discrepancyType = "missing-in-profile";
          } else if (!modelObligations.present && profileObligations.present) {
            discrepancyType = "missing-in-model";
          } else if (modelObligations.present && profileObligations.present && !this.#setsAreEqual(modelObligations.codes, profileObligations.codes)) {
            discrepancyType = "different-codes";
          }

          if (!discrepancyType) continue;
          if (this.suppressions.get(this.profile.id, profileElement.path, actor)) {
            result.suppressedCount += 1;
            continue;
          }
          result.discrepancyCount += 1;

          this.#reportDiscrepancy(discrepancyType, profileElement, lmElement, actor,
            modelObligations.codes, profileObligations.codes);
        }
      }
    }

    return result;
  }

  #reportDiscrepancy(type, profileElement, lmElement, actor, modelCodes, profileCodes) {
    console.log();

    switch (type) {
      case "missing-in-profile":
        console.log("OBLIGATION MISSING IN PROFILE");
        console.log(
          "  The logical model contains an obligation for this actor, " +
            "but the profile does not."
        );
        break;

      case "different-codes":
        console.log("OBLIGATION CODES DIFFER");
        console.log(
          "  The logical model and profile contain obligations for this " +
            "actor, but their obligation codes differ."
        );
        break;

      case "missing-in-model":
        console.log("OBLIGATION MISSING IN LOGICAL MODEL");
        console.log(
          "  The profile contains an obligation for this actor, " +
            "but the logical model does not."
        );
        break;

      default:
        throw new Error(
          `Unknown discrepancy type "${type}".`
        );
    }

    console.log(`  Profile element: ${profileElement.path ?? profileElement.id}`);
    console.log(`  Logical model element: ${lmElement.path ?? lmElement.id}`);
    console.log(`  Actor: ${actor}`);
    console.log(`  Logical model codes: ${this.#formatCodes(modelCodes)}`);
    console.log(`  Profile codes: ${this.#formatCodes(profileCodes)}`);
  }


  #determineMappingIdentity() {
    const logicalModelUrl = stripVersionFromCanonical(this.logicalModel.url);

    const matchingMappings = (this.profile.mapping ?? [])
      .filter(mapping => mapping.identity && mapping.uri && stripVersionFromCanonical(mapping.uri) === logicalModelUrl);

    if (matchingMappings.length === 1) {
      this.mappingIdentity = matchingMappings[0].identity;
      return;
    }

    if (matchingMappings.length === 0) {
      throw new Error(`No profile mapping refers to "${logicalModel.url}".`);
    }

    throw new Error(
      "Multiple profile mappings refer to the logical model: " +
        matchingMappings
          .map((mapping) => mapping.identity)
          .join(", ")
    );

  }

  #buildLogicalModelIndex() {
    this.lmIndex = new Map();

    // Prefer snapshot over differential. It shouldn't matter for the ART-DECOR
    // exports, but just err on the safe side.
    // We don't bother if there are any differences between the snapshot and the
    // differential, this should be flagged by other tools.
    let elements = [];
    if (this.logicalModel.snapshot) {
      elements = this.logicalModel.snapshot.element ?? [];
    } else if (this.logicalModel.differential) {
      elements = this.logicalModel.differential.element ?? [];
    }

    for (const element of elements) {
      if (!element.path) {
        continue;
      }

      if (this.lmIndex.has(element.path)) {
        throw new Error(`The logical model contains duplicate element path "${element.path}".`);
      }

      this.lmIndex.set(element.path, element);
    }
  }

  #resolveTargetElements(profileElement) {
    const targets = this.#getMappingTargets(profileElement);
    const resolvedTargetPaths = new Set();
    for (const target of targets) {
      const modelPath = this.#resolveMapTargetToPath(target);
      if (!modelPath) {
        console.warn(`Mapping target not found in logical model: ${target} (from ${profileElement.path ?? profileElement.id})`);
        continue;
      }
      resolvedTargetPaths.add(modelPath);
    }

    return resolvedTargetPaths;
  }

  #getMappingTargets(profileElement) {
    return (profileElement.mapping ?? [])
      .filter(mapping => mapping.identity === this.mappingIdentity && typeof mapping.map === "string")
      .map(mapping => mapping.map.trim())
      .filter(Boolean);
  }

  #resolveMapTargetToPath(mapping) {
    const candidates = [
      mapping,
      mapping.split("|")[0].trim(),
      mapping.replace(/\s+\([^)]*\)\s*$/, "").trim(),
    ];
    const resolved = candidates.find(candidate => this.lmIndex.has(candidate));
    if (resolved) {
      return this.lmIndex.get(resolved);
    }
    return undefined;
  }

  #getObligations(element) {
    return (element.extension ?? [])
      .filter(extension => extension.url === OBLIGATION_URL);
  }

  #obligationAppliesToActors(obligation) {
    const obligationActors = getObligationActors(obligation);

    // Obligations without an actor are deliberately excluded.
    if (obligationActors.length === 0) {
      return false;
    }
    return obligationActors.some(actor => this.actors.has(actor));
  }

  #getActorObligations(element) {
    const obligationsByActor = new Map();

    for (const actor of this.actors) {
      obligationsByActor.set(actor, {
        present: false,
        codes: new Set(),
      });
    }

    for (const obligation of this.#getObligations(element)) {
      const obligationActors = (obligation.extension ?? [])
        .filter(extension => extension.url === "actor" && typeof extension.valueCanonical === "string")
        .map(extension => stripVersionFromCanonical(extension.valueCanonical));
      for (const actor of obligationActors) {
        if (!this.actors.has(actor)) continue;
        const actorObligations = obligationsByActor.get(actor);
        actorObligations.present = true;

        const obligationCodes = (obligation.extension ?? [])
          .filter(extension => extension.url === "code" && typeof extension.valueCode === "string")
          .map(extension => extension.valueCode);
        for (const code of obligationCodes) {
          actorObligations.codes.add(code);
        }
      }
    }

    return obligationsByActor;
  }

  #setsAreEqual(left, right) {
    if (left.size !== right.size) {
      return false;
    }

    return [...left].every(
      (value) => right.has(value)
    );
  }

  #formatCodes(codes) {
    if (codes.size === 0) {
      return "(no code)";
    }

    return [...codes].sort().join(", ");
  }
}

class StructureDefinitionHandler {
  fhir = new Fhir();

  readXML(filename) {
    const sd = this.fhir.xmlToObj(fs.readFileSync(filename, "utf8"))
    this.validate(sd, filename);
    return sd;
  }

  readJson(filename) {
    let sd;
    try {
      sd = JSON.parse(fs.readFileSync(filename, "utf8"));
    } catch (error) {
      throw new Error(`Cannot read JSON file "${filename}": ${getErrorMessage(error)}`);
    }
    this.validate(sd, filename);
    return sd;
  }

  writeXML(sd, filename) {
    const xml = this.#addXmlDeclaration(this.fhir.objToXml(sd));
    fs.writeFileSync(filename, `${xml.trimEnd()}\n`, "utf8");
  }

  validate(resource, filename) {
    if (resource?.resourceType !== "StructureDefinition") {
      throw new Error(`"${filename}" does not contain a FHIR StructureDefinition.`);
    }
    if (!resource.id) {
      throw new Error(`"${filename}" does not have a StructureDefintion.id`);
    }
    if (!resource.url) {
      throw new Error(`"${filename}" does not have a StructureDefintion.url`);
    }
  }

  #addXmlDeclaration(xml) {
    if (/^\s*<\?xml\b/.test(xml)) {
      return xml;
    }
    return `<?xml version="1.0" encoding="UTF-8"?>\n${xml}`;
  }
}

function main() {
  const cliParser = new CliParser()
  cliParser.parse()

  const {
    profileFilename,
    logicalModelFilename,
  } = cliParser.options;

  const selectedActorUrls = new Set(
    cliParser.options.actors.map(stripVersionFromCanonical)
  );

  const sdHandler = new StructureDefinitionHandler();
  const profile = sdHandler.readXML(profileFilename);
  const logicalModel = sdHandler.readJson(logicalModelFilename);
  const suppressions = new Suppressions(cliParser.options.suppressionsFilename);
  const comparator = new ObligationComparator(profile, logicalModel, selectedActorUrls, suppressions);

  console.log("Actors:");
  for (const actorUrl of selectedActorUrls) {
    console.log(`  ${actorUrl}`);
  }

  if (cliParser.options.copy) {
    console.log("Mode: copy");

    comparator.copy();
    sdHandler.writeXML(comparator.profile, profileFilename);
    console.log(`Updated: ${path.resolve(profileFilename)}`);

    return;
  }

  console.log("Mode: report");

  const result = comparator.report();
  const discrepancyCount = result.discrepancyCount;
  const suppressedCount = result.suppressedCount;

  console.log();

  if (discrepancyCount === 0) {
    console.log("No unsuppressed obligation discrepancies found for the specified actors.");
  } else {
    console.log(`Found ${discrepancyCount} unsuppressed obligation ${discrepancyCount === 1 ? "discrepancy" : "discrepancies"}.`);
    process.exitCode = 2;
  }

  if (suppressedCount > 0) {
    console.log(`Suppressed ${suppressedCount} obligation ${suppressedCount === 1 ? "discrepancy" : "discrepancies"}.`);
  }
}

main();
