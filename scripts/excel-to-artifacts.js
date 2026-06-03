// excel-to-requirements.js
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

class TargetFolders {
  static subfolders = {
    "RequirementResources": "requirements",
    "PageContent":          "pagecontent",
    "LogicalModels":        "logicalmodels"
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

  constructor(inputFile, targetFolders) {
    this.inputFile = inputFile;
    this.fileRoot = path.basename(inputFile.name, path.extname(inputFile.name));
    this.workbook = XLSX.readFile(path.join(inputFile.parentPath, inputFile.name));

    this.targetFolders = targetFolders;
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
          console.log(this.#cell(row, ExcelConvertor.colDescription))

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
      const response = await fetch(`https://decor.nictiz.nl/fhir/4.0/zib2020bbr-/StructureDefinition/${id_parts[0]}--${id_date}?_format=json`);
      const body = await response.json();
      
      const outputFile = path.join(this.targetFolders.get("LogicalModels"), this.fileRoot + ".json");
      fs.writeFileSync(outputFile, JSON.stringify(body, null, 2), 'utf8');
      console.log(`Saved LogicalModel to ${outputFile}`);
    } catch (error) {
      console.warn(`Couldn't download logical model for ${this.inputFile.name} from ART-DECOR, "${error.message}"`);
      return;
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

const targetFolders = new TargetFolders(outputFolder);
for (const excelFile of fs.readdirSync(inputFolder, {withFileTypes: true}).filter(file => /\.(xlsx|xlsm|xls)$/i.test(file.name)).filter(file => !file.name.startsWith('~$'))) {
  const convertor = new ExcelConvertor(excelFile, targetFolders);
  convertor.convertRequirements();
  convertor.convertConceptPage();
  convertor.getLogicalModel();
}

