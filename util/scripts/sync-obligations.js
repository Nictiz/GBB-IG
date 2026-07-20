const fs = require("node:fs");
const path = require("node:path");
const { Fhir } = require("fhir-tool");

const OBLIGATION_URL =
  "http://hl7.org/fhir/StructureDefinition/obligation";

function printUsage() {
  console.log(`
Usage:
  node copy-obligations.js \\
    --actor <canonical> [--actor <canonical> ...] \\
    <profile.xml> <logical-model.json>

Arguments:
  profile.xml
      FHIR profile StructureDefinition in XML format.

  logical-model.json
      FHIR Logical Model StructureDefinition in JSON format.

Required options:
  --actor <canonical>
      Only copy obligations that apply to this ActorDefinition.

      At least one --actor option is required. The option may be repeated.

      Canonical versions are ignored when matching. For example:

        https://example.org/ActorDefinition/sender|1.0.0

      matches:

        https://example.org/ActorDefinition/sender

      Obligations without an actor are not copied.

Other options:
  --help, -h
      Show this help.

The profile XML file is updated in place.
`.trim());
}

function parseArguments(argumentsList) {
  const options = {
    actors: [],
    profileFilename: undefined,
    logicalModelFilename: undefined,
  };

  const positionalArguments = [];

  for (let index = 0; index < argumentsList.length; index += 1) {
    const argument = argumentsList[index];

    switch (argument) {
      case "--actor": {
        const actor = argumentsList[++index];

        if (!actor || actor.startsWith("--")) {
          throw new Error("--actor requires a canonical URL.");
        }

        options.actors.push(actor);
        break;
      }

      case "--help":
      case "-h":
        printUsage();
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
    throw new Error(
      "Expected a profile XML file and a logical-model JSON file."
    );
  }

  if (options.actors.length === 0) {
    throw new Error(
      "At least one --actor option is required."
    );
  }

  [
    options.profileFilename,
    options.logicalModelFilename,
  ] = positionalArguments;

  return options;
}

function readJson(filename) {
  try {
    return JSON.parse(fs.readFileSync(filename, "utf8"));
  } catch (error) {
    throw new Error(
      `Cannot read JSON file "${filename}": ${getErrorMessage(error)}`
    );
  }
}

function getErrorMessage(error) {
  return error instanceof Error
    ? error.message
    : String(error);
}

function validateStructureDefinition(resource, filename) {
  if (resource?.resourceType !== "StructureDefinition") {
    throw new Error(
      `"${filename}" does not contain a FHIR StructureDefinition.`
    );
  }
}

function stripVersionFromCanonical(canonical) {
  return canonical.trim().split("|")[0];
}

function determineMappingIdentity(profile, logicalModel) {
  if (!logicalModel.url) {
    throw new Error(
      "The logical model has no canonical URL."
    );
  }

  const logicalModelUrl = stripVersionFromCanonical(logicalModel.url);

  const matchingMappings = (profile.mapping ?? []).filter(
    (mapping) =>
      mapping.identity &&
      mapping.uri &&
      stripVersionFromCanonical(mapping.uri) === logicalModelUrl
  );

  if (matchingMappings.length === 1) {
    return matchingMappings[0].identity;
  }

  if (matchingMappings.length === 0) {
    throw new Error(
      `No profile mapping refers to "${logicalModel.url}".`
    );
  }

  throw new Error(
    "Multiple profile mappings refer to the logical model: " +
      matchingMappings
        .map((mapping) => mapping.identity)
        .join(", ")
  );
}

function buildLogicalModelIndex(logicalModel) {
  const index = new Map();

  // Prefer snapshot over differential. It shouldn't matter for the ART-DECOR
  // exports, but just err on the safe side.
  // We don't bother if there are any differences between the snapshot and the
  // differential, this should be flagged by other tools.
  let elements = [];
  if (logicalModel.snapshot) {
    elements = logicalModel.snapshot.element;
  } else if (logicalModel.differential) {
    elements = logicalModel.differential.element;
  }

  for (const element of elements) {
    if (!element.path) {
      continue;
    }

    if (index.has(element.path)) {
      throw new Error(`The logical model contains duplicate element path "${element.path}".`);
    }

    index.set(element.path, element);
  }

  return index;
}

function getMappingTargets(profileElement, mappingIdentity) {
  return (profileElement.mapping ?? [])
    .filter(mapping => mapping.identity === mappingIdentity && typeof mapping.map === "string")
    .map(mapping => mapping.map.trim())
    .filter(Boolean);
}

function resolveMapTargetToPath(mapping, logicalModelIndex) {
  const candidates = [
    mapping,
    mapping.split("|")[0].trim(),
    mapping.replace(/\s+\([^)]*\)\s*$/, "").trim(),
  ];

  return candidates.find((candidate) => logicalModelIndex.has(candidate));
}

function getObligations(element) {
  return (element.extension ?? []).filter(
    (extension) => extension.url === OBLIGATION_URL
  );
}

function getObligationActors(obligation) {
  return (obligation.extension ?? [])
    .filter(
      (extension) =>
        extension.url === "actor" &&
        typeof extension.valueCanonical === "string"
    )
    .map((extension) => extension.valueCanonical);
}

function obligationAppliesToActors(
  obligation,
  selectedActorUrls
) {
  const obligationActors = getObligationActors(obligation);

  /*
   * Obligations without an actor are deliberately excluded.
   */
  if (obligationActors.length === 0) {
    return false;
  }

  return obligationActors.some((actorUrl) =>
    selectedActorUrls.has(stripVersionFromCanonical(actorUrl))
  );
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

function copyObligations(elements, logicalModelIndex, mappingIdentity, selectedActorUrls) {
  for (const profileElement of elements) {

    const mappings = getMappingTargets(profileElement, mappingIdentity);
    if (mappings.length === 0) {
      continue;
    }

    const resolvedTargetPaths = new Set();
    for (const mapping of mappings) {
      const modelPath = resolveMapTargetToPath(mapping, logicalModelIndex);

      if (!modelPath) {
        console.warn(`Mapping target not found in logical model: ${mapping} (from ${profileElement.path ?? profileElement.id})`);
        continue;
      }

      resolvedTargetPaths.add(modelPath);
    }

    if (resolvedTargetPaths.size === 0) {
      continue;
    }

    profileElement.extension ??= [];
    const existingObligations = new Set(getObligations(profileElement).map(canonicalJson));

    for (const targetPath of resolvedTargetPaths) {
      const logicalModelElement = logicalModelIndex.get(targetPath);

      for (const obligation of getObligations(logicalModelElement)) {
        if (!obligationAppliesToActors(obligation, selectedActorUrls)) {
          continue;
        }

        const canonicalObligation = canonicalJson(obligation);

        if (existingObligations.has(canonicalObligation)) {
          continue;
        }

        profileElement.extension.push(structuredClone(obligation));
        existingObligations.add(canonicalObligation);

        console.log(`Copied obligation from ${targetPath} to ${profileElement.path ?? profileElement.id}`);
      }
    }

    if (profileElement.extension.length === 0) {
      delete profileElement.extension;
    }
  }
}

function addXmlDeclaration(xml) {
  if (/^\s*<\?xml\b/.test(xml)) {
    return xml;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n${xml}`;
}

function main() {
  const options = parseArguments(
    process.argv.slice(2)
  );

  const {
    profileFilename,
    logicalModelFilename,
  } = options;

  const selectedActorUrls = new Set(
    options.actors.map(stripVersionFromCanonical)
  );

  const fhir = new Fhir();

  const profile = fhir.xmlToObj(fs.readFileSync(profileFilename, "utf8"));
  const logicalModel = readJson(logicalModelFilename);

  validateStructureDefinition(profile, profileFilename);
  validateStructureDefinition(logicalModel, logicalModelFilename);

  // Get the identity that is used for element mappings to the logical model
  const mappingIdentity = determineMappingIdentity(profile, logicalModel);

  const logicalModelIndex = buildLogicalModelIndex(logicalModel);
  if (logicalModelIndex.size === 0) {
    throw new Error("The logical model has no snapshot or differential elements.");
  }

  console.log(`Mapping identity: ${mappingIdentity}`);
  console.log("Actor filter:");
  for (const actorUrl of selectedActorUrls) {
    console.log(`  ${actorUrl}`);
  }

  // We simply copy both to the snapshot and the differential and assume they
  // are in sync. Other tools will check this.
  if (profile.snapshot) {
    copyObligations(profile.snapshot.element, logicalModelIndex, mappingIdentity, selectedActorUrls);
  }
  if (profile.differential) {
    copyObligations(profile.differential.element, logicalModelIndex, mappingIdentity, selectedActorUrls);
  }

  const profileXml = addXmlDeclaration(fhir.objToXml(profile));
  fs.writeFileSync(profileFilename, `${profileXml.trimEnd()}\n`, "utf8");
  console.log(`Updated: ${path.resolve(profileFilename)}`);
}

main();
