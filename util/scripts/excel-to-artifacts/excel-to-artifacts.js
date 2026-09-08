// excel-to-requirements.js
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");
const commander = require("commander");

const translationExtensionUrl = "http://hl7.org/fhir/StructureDefinition/translation";

function normalizeLanguageCode(languageCode) {
  return typeof languageCode === "string" ? languageCode.slice(0, 2) : languageCode;
}

function normalizeResourceLanguages(resource) {
  if (!resource || typeof resource !== "object") return resource;

  if (typeof resource.language === "string") {
    resource.language = normalizeLanguageCode(resource.language);
  }

  normalizeTranslationExtensionLanguages(resource);
  return resource;
}

function normalizeTranslationExtensionLanguages(value) {
  if (Array.isArray(value)) {
    value.forEach(item => normalizeTranslationExtensionLanguages(item));
    return;
  }

  if (!value || typeof value !== "object") return;

  if (value.url === translationExtensionUrl) {
    for (const extension of value.extension ?? []) {
      if (extension?.url === "lang" && typeof extension.valueCode === "string") {
        extension.valueCode = normalizeLanguageCode(extension.valueCode);
      }
    }
  }

  for (const nestedValue of Object.values(value)) {
    normalizeTranslationExtensionLanguages(nestedValue);
  }
}

class TargetFolders {
  static subfolders = {
    "RequirementResources": "requirements",
    "PageContent":          "pagecontent",
    "LogicalModels":        "logicalmodels",
    "Vocabulary":           "vocabulary",
    "Resources":            "resources"
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

  constructor(outputFolder) {
    this.outputFolder = outputFolder;
  }

  async downloadAll() {
    try {
      const body = await this.#fetchJson(ActorDefinitionDownloader.actorDefinitionsUrl);
      const usedFileNames = new Set();

      for (const actorDefinition of this.#getActorDefinitions(body)) {
        const outputFile = path.join(this.outputFolder, this.#getFileName(actorDefinition, usedFileNames));
        
        normalizeResourceLanguages(actorDefinition);
        
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
      
      normalizeResourceLanguages(valueSet);

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
  static structConcept = {
    "v1": {
      "nl": {
        "title": "Concept",
        "col": {
          "field": "Veld",
          "description": "Beschrijving"
        }
      },
      "en": {
        "title": null
      }
    },
    "v2": {
      "nl": {
        "title": "Concept"
      },
      "en": {
        "title": "Concept (ENG)"
      }
    }
  }

  static structRequirements = {
    "v1": {
      "nl": {
        "title": "Informatiebehoefte",
        "col": {
          "number": "Nummer",
          "name": "Naam",
          "description": "Omschrijving",
          "variability": "Variabiliteit",
          "presence": "Aanwezigheid",
          "temp": "Verleden/heden/toekomst",
          "source": "Herkomst",
        },
        "key": {
          "ADId": "ART-DECOR-id"
        }
      }
    },
    "v2": {
      "nl": {
        "title": "Informatie-requirements"
      },
      "en": {
        "title": "Information requirements"
      }
    }
  }
  
  static adProjectUrl      = "https://decor.nictiz.nl/fhir/4.0/gbb2026bbr-/StructureDefinition";

  constructor(inputFile, targetFolders, valueSetDownloader) {
    this.inputFile = inputFile;
    this.fileRoot = path.basename(inputFile.name, path.extname(inputFile.name));
    this.workbook = XLSX.readFile(path.join(inputFile.parentPath, inputFile.name));

    // Figure out the version of the template we're using, as this steers the output
    this.templateVersion = this.#getTemplateVersion();
    if (this.templateVersion == null) {
      console.warn(`Excel file ${inputFile} doesn't conform to the template. Skipping further processing.`)
    }

    this.targetFolders = targetFolders;
    this.valueSetDownloader = valueSetDownloader;
  }

  createRequirements() {
    if (this.templateVersion != null) {
      this.convertConceptPage("nl");
      this.convertConceptPage("en");
      this.convertRequirements();
    }
  }

  convertConceptPage(language) {
    const struct = ExcelConvertor.structConcept[language];
    const sheetTitle = struct["title"];
    if (sheetTitle) {
      const rows = this.#getRows(sheetTitle);
      if (rows == null) return;
    } else {
      return;
    }

    const colField      = struct["col"]["field"];
    const colDefinition = struct["col"]["description"];
    const markdown = rows
      .filter(row => this.#cell(row, colField) != struct["key"]["ADId"])
      .map(row => { return this.#cell(row, colField) + "\n: " + this.#cell(row, colDefinition); })
      .join("\n\n");

    const outputFile = path.join(this.targetFolders.get("PageContent"), `${this.fileRoot}-Concept-${en ? "en" : "nl"}.md`);
    fs.writeFileSync(outputFile, markdown, "utf8");
    console.log(`Wrote ${outputFile}`);
  }

  convertRequirements() {
    const id = this.fileRoot;
    const canonical = "http://nictiz.nl/gbb/Requirements/" + id;

    const requirements = {
      resourceType: "Requirements",
      id: id,
      language: "nl",
      url: canonical,
      status: "active",
      statement: this.#getStatements(canonical)
    };

    const outputFile = path.join(this.targetFolders.get("RequirementResources"), "Requirements-" + this.fileRoot + ".json");
    fs.writeFileSync(outputFile, JSON.stringify(requirements, null, 2), "utf8");
    console.log(`Wrote ${outputFile}`);
  }

  async getLogicalModel() {
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
    
    const id_parts = ad_id.split("/");
    const id_date = id_parts[1].replace(/-/g, "").replace(/:/g, "").replace("T", "");
    const fetch_url = `${ExcelConvertor.adProjectUrl}/${id_parts[0]}--${id_date}?_format=json&language=en-US`;
    try {
      const response = await fetch(`${fetch_url}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      const body = await response.json();
      normalizeResourceLanguages(body);
      
      const outputFile = path.join(this.targetFolders.get("LogicalModels"), this.fileRoot + ".json");
      fs.writeFileSync(outputFile, JSON.stringify(body, null, 2), 'utf8');
      console.log(`Saved LogicalModel to ${outputFile}`);

      if (this.valueSetDownloader) {
        await this.valueSetDownloader.downloadAll(this.#getBindingValueSetCanonicals(body));
      }
    } catch (error) {
      console.warn(`Couldn't download logical model for ${this.inputFile.name} from ART-DECOR using ${fetch_url}, "${error.message}"`);
      return;
    }
  }

  #getTemplateVersion() {
    for (const version of ["v1", "v2"]) {
      const sheet = this.workbook.Sheets[ExcelConvertor.StructRequirements[version]["nl"]["title"]];
      if (sheet) {
        return version;
      }
    }
    return null;
  }

  /** Get the rows from the names sheet.
   *  The header row is assumed to be the second row, in accordance to the template.
   *  @returns An array of JSON objects, or null if the sheet was not found.
   */
  #getRows(sheetName) {
    const sheet = this.workbook.Sheets[sheetName];
    if (!sheet) {
      console.warn(`Skipping sheet "${sheetName}" in ${this.inputFile.name}: not found`);
      return null;
    }

    const rows = XLSX.utils.sheet_to_json(sheet, {
      defval: "",
      range: 1     // The header row is the second row in the template (row 1)
    })

    return rows;
  }

  #cell(row, colName) {
    const value = row[colName];
    return String(value ?? "").trim();
  }
  
  paragraph(label, value) {
    return value ? `**${label}**: ${value}` : null;
  }

  #getStatements(canonical) {
    const structNl = ExcelConvertor.structRequirements[this.templateVersion]["nl"];
    const structEn = ExcelConvertor.structRequirements[this.templateVersion]["en"];
    const rowsNl = this.#getRows(structNl["title"]);
    if (rowsNl == null) return;

    const rowsEn = this.#getRows(structEn["title"]);

    let statements = [];
    for (const row of rowsNl) {
      const number = this.#cell(row, structNl.row.number);
      if (!number) continue;

      const rowEn = rowsEn ? rowsEn.find(row => this.#cell(row, structEn.row.number) == number) : null;
            
      const parentNumber = number.includes(".")
        ? number.split(".").slice(0, -1).join(".")
        : null;

      const label = this.#cell(row, structNl.col.name);
      const labelEn = rowEn ? this.#cell(rowEn, structEn.col.name) : "";

      const requirementText = [
        this.paragraph(structNl.col.description, this.#cell(row, structNl.col.description)),
        this.paragraph(structNl.col.variability, this.#cell(row, structNl.col.variability)),
        this.paragraph(structNl.col.presence,    this.#cell(row, structNl.col.presence)),
        this.paragraph(structNl.col.temp,        this.#cell(row, structNl.col.temp))
      ].filter(Boolean).join("\n\n");

      let requirementTextEn = null;
      if (rowEn) {
        requirementTextEn = [
        this.paragraph(structEn.col.description, this.#cell(row, structEn.col.description)),
        this.paragraph(structEn.col.variability, this.#cell(row, structEn.col.variability)),
        this.paragraph(structEn.col.presence,    this.#cell(row, structEn.col.presence)),
        this.paragraph(structEn.col.temp,        this.#cell(row, structEn.col.temp))
        ].filter(Boolean).join("\n\n");       
      }

      let statement = {
        extension: [
          {
            url: "http://hl7.org/fhir/tools/StructureDefinition/requirements-statementshallnot",
            valueBoolean: false
          }
        ],
        key: number,
        label: label
      }
      statement = this.#addTranslationExtension(statement, "label", "en", "string", labelEn);
      statement.requirement = requirementText || "(geen requirementtekst)";
      statement = this.#addTranslationExtension(statement, "requirement", "en", "Markdown", requirementTextEn);

      if (parentNumber) {
        statement.parent = `${canonical}#${parentNumber}`;
      }

      const source = this.#cell(row, ExcelConvertor.colSource);
      if (source) {
        statement.source = [{ display: source }];
      }

      statements.push(statement);
    
    }

    return statements;
  }

  #addTranslationExtension(statement, elementName, language, dataType, value) {
    if (!value) return statement;

    dataType = dataType.charAt(0).toUpperCase() + dataType.slice(1).toLowerCase();
    let content = {
      "url": "content",
    }
    content["value" + dataType] = value;

    statement["_" + elementName] = {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/translation",
          "extension": [
            {
              "url": "lang",
              "valueCode": language
            },
            content
          ]
        }
      ]
    }
    return statement;
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

}

async function main() {
  commander.program
    .option("--requirements", "Create Requirements resources from Excel")
    .option("--actors", "Download ActorDefinitions from ART-DECOR")
    .option("--lm", "Download logical model StructureDefinitions from ART-DECOR")
    .option("--dont-descend", "When downloading material from ART-DECOR, don't download materials included from those materials")
    .argument('<inputFolder>')
    .argument('<outputFolder>')
  commander.program.parse()

  const inputFolder = commander.program.args[0];
  const outputFolder = commander.program.args[1];

  let createRequirements = commander.program.opts()['requirements'];
  let downloadActors = commander.program.opts()['actors'];
  let downloadLogicalModels = commander.program.opts()['lm'];
  const descend = !(commander.program.opts()['dontDescend'] === true);
  if (!createRequirements && !downloadActors && !downloadLogicalModels) {
    // If no explicit action is given, do everything
    createRequirements = true;
    downloadActors = true;
    downloadLogicalModels = true;
  }

  const targetFolders = new TargetFolders(outputFolder);

  if (downloadActors) {
    const actorDefinitionDownloader = new ActorDefinitionDownloader(targetFolders.get("Resources"));
    await actorDefinitionDownloader.downloadAll();
  }

  let valueSetDownloader = null;
  if (descend) {
    valueSetDownloader = new ValueSetDownloader(targetFolders.get("Vocabulary"));
  }

  if (!fs.existsSync(inputFolder)) {
    return;
  }

  for (const excelFile of fs.readdirSync(inputFolder, {withFileTypes: true}).filter(file => /\.(xlsx|xlsm|xls)$/i.test(file.name)).filter(file => !file.name.startsWith('~$'))) {
    const convertor = new ExcelConvertor(excelFile, targetFolders, valueSetDownloader);
    if (createRequirements) {
      convertor.createRequirements();
    }

    if (downloadLogicalModels) {
      await convertor.getLogicalModel();
    }
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
