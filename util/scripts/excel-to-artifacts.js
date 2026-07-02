// excel-to-requirements.js
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

class TargetFolders {
  static subfolders = {
    "ActorDefinitions":     "logicalmodels",
    "RequirementResources": "requirements",
    "PageContent":          "pagecontent",
    "LogicalModels":        "logicalmodels",
    "Vocabulary":           "vocabulary",
  }

  constructor(baseFolder) {
    this.baseFolder = baseFolder;

    // Clean and create all subfolders
    for (const subfolder of Object.keys(TargetFolders.subfolders)) {
      const folder = path.join(this.baseFolder, TargetFolders.subfolders[subfolder]);
      fs.rmSync(folder, { recursive: true, force: true });
      fs.mkdirSync(folder, { recursive: true });
    }
  }

  get(subfolderType) {
    return path.join(this.baseFolder, TargetFolders.subfolders[subfolderType]);
  }
}

class ActorDefinitionDownloader {
  static actorDefinitionsUrl = "https://decor.nictiz.nl/fhir/4.0/gbb2026bbr-/ActorDefinition?publisher=gbb2026bbr-&_format=json";

  constructor(targetFolders) {
    this.targetFolders = targetFolders;
  }

  async downloadAll() {
    try {
      const body = await this.#fetchJson(ActorDefinitionDownloader.actorDefinitionsUrl);
      const usedFileNames = new Set();

      for (const actorDefinition of this.#getActorDefinitions(body)) {
        const outputFile = path.join(
          this.targetFolders.get("ActorDefinitions"),
          this.#getFileName(actorDefinition, usedFileNames)
        );
        
        if (typeof actorDefinition.language === "string") {
          actorDefinition.language = actorDefinition.language.slice(0, 2);
        }
        
        fs.writeFileSync(outputFile, JSON.stringify(actorDefinition, null, 2), "utf8");
        console.log(`Saved ActorDefinition to ${outputFile}`);
      }
    } catch (error) {
      console.warn(`Couldn't download ActorDefinitions from ART-DECOR, "${error.message}"`);
    }
  }

  async #fetchJson(url) {
    const response = await fetch(url, {
      headers: {
        "Accept": "application/fhir+json, application/json; fhirVersion=4.0"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  #getActorDefinitions(body) {
    if (body.resourceType == "ActorDefinition") {
      return [body];
    }

    if (body.resourceType != "Bundle") {
      throw new Error(`Expected Bundle, got ${body.resourceType ?? "unknown resource"}`);
    }

    return (body.entry ?? [])
      .map(entry => entry.resource)
      .filter(resource => resource?.resourceType == "ActorDefinition");
  }

  #getFileName(actorDefinition, usedFileNames) {
    const actorDefinitionName = actorDefinition.name || actorDefinition.id || "ActorDefinition";
    const baseFileName = `ActorDefinition-${this.#safeFileName(actorDefinitionName)}.json`;

    if (!usedFileNames.has(baseFileName)) {
      usedFileNames.add(baseFileName);
      return baseFileName;
    }

    const fallbackName = actorDefinition.id || actorDefinition.url?.split("/").filter(Boolean).pop() || "duplicate";
    const duplicateFileName = `ActorDefinition-${this.#safeFileName(actorDefinitionName)}-${this.#safeFileName(fallbackName)}.json`;
    usedFileNames.add(duplicateFileName);
    console.warn(`Duplicate ActorDefinition name "${actorDefinitionName}"; saved duplicate as ${duplicateFileName}`);
    return duplicateFileName;
  }

  #safeFileName(fileName) {
    return fileName.replace(/[<>:"/\\|?*\x00-\x1F]/g, "_");
  }
}

class ValueSetDownloader {
  static skippedCanonicalPrefixes = [
    "http://hl7.org",
    "http://terminology.hl7.org"
  ];

  constructor(outputFolder) {
    this.outputFolder = outputFolder;
    this.downloadedCanonicals = new Set();
    this.pendingDownloads = new Map();
  }

  async downloadAll(canonicals) {
    for (const canonical of canonicals) {
      await this.download(canonical);
    }
  }

  async download(canonical) {
    const normalizedCanonical = this.#normalizeCanonical(canonical);
    if (
      !normalizedCanonical ||
      this.#shouldSkipCanonical(normalizedCanonical) ||
      this.downloadedCanonicals.has(normalizedCanonical)
    ) return;

    if (this.pendingDownloads.has(normalizedCanonical)) {
      await this.pendingDownloads.get(normalizedCanonical);
      return;
    }

    const download = this.#download(normalizedCanonical)
      .finally(() => this.pendingDownloads.delete(normalizedCanonical));

    this.pendingDownloads.set(normalizedCanonical, download);
    await download;
  }

  async #download(canonical) {
    this.downloadedCanonicals.add(canonical);

    try {
      const response = await fetch(this.#toDownloadUrl(canonical), {
        headers: {
          "Accept": "application/fhir+json, application/json; fhirVersion=4.0"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      const valueSet = await response.json();
      if (valueSet.resourceType != "ValueSet") {
        throw new Error(`Expected ValueSet, got ${valueSet.resourceType ?? "unknown resource"}`);
      }

      const outputFile = path.join(
        this.outputFolder,
        `${this.#safeFileName(valueSet.name || valueSet.id || this.#fallbackName(canonical))}.json`
      );
      
      if (typeof valueSet.language === "string") {
        valueSet.language = valueSet.language.slice(0, 2);
      }

      fs.writeFileSync(outputFile, JSON.stringify(valueSet, null, 2), "utf8");
      console.log(`Saved ValueSet to ${outputFile}`);

      await this.downloadAll(this.#getIncludedValueSetCanonicals(valueSet));
    } catch (error) {
      console.warn(`Couldn't download ValueSet ${canonical}, "${error.message}"`);
    }
  }

  #getIncludedValueSetCanonicals(valueSet) {
    const canonicals = new Set();

    for (const include of valueSet.compose?.include ?? []) {
      this.#addCanonicals(canonicals, include.valueSet);
    }

    return Array.from(canonicals);
  }

  #addCanonicals(canonicals, value) {
    if (Array.isArray(value)) {
      value.forEach(canonical => this.#addCanonicals(canonicals, canonical));
      return;
    }

    const canonical = this.#normalizeCanonical(value);
    if (canonical) {
      canonicals.add(canonical);
    }
  }

  #normalizeCanonical(canonical) {
    return typeof canonical == "string" ? canonical.trim() : "";
  }

  #shouldSkipCanonical(canonical) {
    return ValueSetDownloader.skippedCanonicalPrefixes.some(prefix => canonical.startsWith(prefix));
  }

  #toDownloadUrl(canonical) {
    const resourceUrl = new URL(canonical.split("|")[0]);
    resourceUrl.searchParams.set("_format", "json");
    return resourceUrl.toString();
  }

  #fallbackName(canonical) {
    return canonical.split("|")[0].split("/").filter(Boolean).pop() || "ValueSet";
  }

  #safeFileName(fileName) {
    return fileName.replace(/[<>:"/\\|?*\x00-\x1F]/g, "_");
  }
}

class ExcelConvertor {
  static sheetConcept      = "Concept";
  static sheetRequirements = "Informatiebehoefte";
  
  static colNumber         = "Nummer";
  static colName           = "Naam";
  static colDescription    = "Omschrijving";
  static colVariability    = "Variabiliteit";
  static colPresence       = "Aanwezigheid";
  static colTemp           = "Verleden/heden/toekomst";
  static colSource         = "Herkomst";
  static colField          = "Veld";
  static colDefinition     = "Beschrijving";
  
  static textADId          = "ART-DECOR-id";

  static adProjectUrl      = "https://decor.nictiz.nl/fhir/4.0/gbb2026bbr-/StructureDefinition";

  constructor(inputFile, targetFolders, valueSetDownloader) {
    this.inputFile = inputFile;
    this.fileRoot = path.basename(inputFile.name, path.extname(inputFile.name));
    this.workbook = XLSX.readFile(path.join(inputFile.parentPath, inputFile.name));

    this.targetFolders = targetFolders;
    this.valueSetDownloader = valueSetDownloader;
  }

  #cell(row, colName) {
    const value = row[colName];
    return String(value ?? "").trim();
  }
  
  paragraph(label, value) {
    return value ? `**${label}**: ${value}` : null;
  }

  convertRequirements() {
    const id = this.fileRoot;
    const canonical = "http://nictiz.nl/gbb/Requirements/" + id;

    const rows = this.#getRows(ExcelConvertor.sheetRequirements);
    if (rows == null) return;

    const requirements = {
      resourceType: "Requirements",
      id: id,
      language: "nl",
      url: canonical,
      status: "active",
      statement: rows
        .filter(row => this.#cell(row, ExcelConvertor.colNumber) || this.#cell(row, ExcelConvertor.colName))
        .map(row => {
          const number = this.#cell(row, ExcelConvertor.colNumber);

          const parentNumber = number.includes(".")
            ? number.split(".").slice(0, -1).join(".")
            : null;

          const label = number + " " + this.#cell(row, ExcelConvertor.colName);

          const requirementText = [
            this.paragraph(ExcelConvertor.colDescription, this.#cell(row, ExcelConvertor.colDescription)),
            this.paragraph(ExcelConvertor.colVariability, this.#cell(row, ExcelConvertor.colVariability)),
            this.paragraph(ExcelConvertor.colPresence,    this.#cell(row, ExcelConvertor.colPresence)),
            this.paragraph(ExcelConvertor.colTemp,        this.#cell(row, ExcelConvertor.colTemp))
          ].filter(Boolean).join("\n\n");

          const statement = {
            extension: [
              {
                url: "http://hl7.org/fhir/tools/StructureDefinition/requirements-statementshallnot",
                valueBoolean: false
              }
            ],
            key: number,
            label: label,
            requirement: requirementText || "(geen requirementtekst)"
          };

          if (parentNumber) {
            statement.parent = `${canonical}#${parentNumber}`;
          }

          const source = this.#cell(row, ExcelConvertor.colSource);
          if (source) {
            statement.source = [{ display: source }];
          }

          return statement;
        })
    };

    const outputFile = path.join(this.targetFolders.get("RequirementResources"), "Requirements-" + this.fileRoot + ".json");
    fs.writeFileSync(outputFile, JSON.stringify(requirements, null, 2), "utf8");
    console.log(`Wrote ${outputFile}`);
  }

  convertConceptPage(outputFolder) {
    const rows = this.#getRows(ExcelConvertor.sheetConcept);
    if (rows == null) return;

    const markdown = rows
      .filter(row => this.#cell(row, ExcelConvertor.colField) != ExcelConvertor.textADId)
      .map(row => { return this.#cell(row, ExcelConvertor.colField) + "\n: " + this.#cell(row, ExcelConvertor.colDefinition); })
      .join("\n\n");

    const outputFile = path.join(this.targetFolders.get("PageContent"), this.fileRoot + "-Concept.md");
    fs.writeFileSync(outputFile, markdown, "utf8");
    console.log(`Wrote ${outputFile}`);
  }

  async getLogicalModel(outputFolder) {
    let rows = this.#getRows(ExcelConvertor.sheetConcept);
    if (rows == null) return;
    
    rows = rows.filter(row => this.#cell(row, ExcelConvertor.colField) == ExcelConvertor.textADId);
    let ad_id = "";
    if (rows.length == 1) {
      ad_id = this.#cell(rows[0], ExcelConvertor.colDefinition);
    }
    if (ad_id == "") {
      console.warn(`Skipping logical model for ${this.inputFile.name}: "${ExcelConvertor.textADId}" is empty or absent`);
      return;
    } 
    
    try {
      const id_parts = ad_id.split("/");
      const id_date = id_parts[1].replace(/-/g, "").replace(/:/g, "").replace("T", "");
      const response = await fetch(`${ExcelConvertor.adProjectUrl}/${id_parts[0]}--${id_date}?_format=json`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      const body = await response.json();
      //body.id = body.url.split("/").at(-1); // Set the id to the last part of the canonical url
      if (typeof body.language === "string") {
        body.language = body.language.slice(0, 2);
      }
      
      const outputFile = path.join(this.targetFolders.get("LogicalModels"), this.fileRoot + ".json");
      fs.writeFileSync(outputFile, JSON.stringify(body, null, 2), 'utf8');
      console.log(`Saved LogicalModel to ${outputFile}`);

      await this.valueSetDownloader.downloadAll(this.#getBindingValueSetCanonicals(body));
    } catch (error) {
      console.warn(`Couldn't download logical model for ${this.inputFile.name} from ART-DECOR, "${error.message}"`);
      return;
    }
  }

  #getBindingValueSetCanonicals(structureDefinition) {
    const canonicals = new Set();

    for (const element of [
      ...(structureDefinition.snapshot?.element ?? []),
      ...(structureDefinition.differential?.element ?? [])
    ]) {
      const binding = element.binding;
      if (!binding) continue;

      this.#addCanonicals(canonicals, binding.valueSet);
      this.#addCanonicals(canonicals, binding.valueSetCanonical);
      this.#addCanonicals(canonicals, binding.valueSetUri);
      this.#addCanonicals(canonicals, binding.valueSetReference?.reference);
    }

    return Array.from(canonicals);
  }

  #addCanonicals(canonicals, value) {
    if (Array.isArray(value)) {
      value.forEach(canonical => this.#addCanonicals(canonicals, canonical));
      return;
    }

    if (typeof value == "string" && value.trim()) {
      canonicals.add(value.trim());
    }
  }

  /** Get the rows from the names sheet.
   *  The header row is assumed to be the second row, in accordance to the template.
   *  @returns An array of JSON objects, or null if the sheet was not found.
   */
  #getRows(sheetName) {
    const sheet = this.workbook.Sheets[sheetName];
    if (!sheet) {
      console.warn(`Skipping ${this.inputFile.name}: sheet "${sheetName}" not found`);
      return null;
    }

    const rows = XLSX.utils.sheet_to_json(sheet, {
      defval: "",
      range: 1     // The header row is the second row in the template (row 1)
    })

    return rows;
  }
}

const inputFolder = process.argv[2];
const outputFolder = process.argv[3];

if (!inputFolder || !outputFolder) {
  console.error("Usage: node excel-to-artifacts.js input-folder output-folder");
  process.exit(1);
}

async function main() {
  const targetFolders = new TargetFolders(outputFolder);
  const actorDefinitionDownloader = new ActorDefinitionDownloader(targetFolders);
  const valueSetDownloader = new ValueSetDownloader(targetFolders.get("Vocabulary"));

  await actorDefinitionDownloader.downloadAll();

  for (const excelFile of fs.readdirSync(inputFolder, {withFileTypes: true}).filter(file => /\.(xlsx|xlsm|xls)$/i.test(file.name)).filter(file => !file.name.startsWith('~$'))) {
    const convertor = new ExcelConvertor(excelFile, targetFolders, valueSetDownloader);
    convertor.convertRequirements();
    convertor.convertConceptPage();
    await convertor.getLogicalModel();
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
