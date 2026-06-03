// excel-to-requirements.js
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

class ExcelConvertor {
  constructor(inputFile) {
    this.inputFile = inputFile;
    this.fileRoot = path.basename(inputFile.name, path.extname(inputFile.name));
    this.workbook = XLSX.readFile(path.join(inputFile.parentPath, inputFile.name));
  }

  clean(value) {
    return String(value ?? "").trim();
  }

  paragraph(label, value) {
    value = this.clean(value);
    return value ? `**${label}**: ${value}` : null;
  }

  convertRequirements(outputFolder) {
    const id = this.fileRoot;
    const canonical = "http://nictiz.nl/gbb/Requirements/" + id;
    const outputFile = path.join(outputFolder, "Requirements-" + this.fileRoot + ".json");

    const sheet = this.workbook.Sheets["Informatiebehoefte"];
    if (!sheet) {
      console.warn(`Skipping ${this.inputFile.name}: sheet "Informatiebehoefte" not found`);
      return;
    }

    const rows = XLSX.utils.sheet_to_json(sheet, {
      defval: "",
      range: 1     // The header row is the second row in the template (row 1)
    });

    const requirements = {
      resourceType: "Requirements",
      id: id,
      language: "nl",
      url: canonical,
      status: "active",
      statement: rows
        .filter(row => this.clean(row["Nummer"]) || this.clean(row["Naam"]))
        .map(row => {
          const nummer = this.clean(row["Nummer"]);

          const parentNumber = nummer.includes(".")
            ? nummer.split(".").slice(0, -1).join(".")
            : null;

          const label = nummer + " " + this.clean(row["Naam"]);

          const requirementText = [
            this.paragraph("Omschrijving", row["Omschrijving"]),
            this.paragraph("Variabiliteit", row["Variabiliteit"]),
            this.paragraph("Aanwezigheid", row["Aanwezigheid"]),
            this.paragraph("Verleden/heden/toekomst", row["Verleden/heden/toekomst"])
          ].filter(Boolean).join("\n\n");

          const statement = {
            extension: [
              {
                url: "http://hl7.org/fhir/tools/StructureDefinition/requirements-statementshallnot",
                valueBoolean: false
              }
            ],
            key: nummer,
            label: label,
            requirement: requirementText || "(geen requirementtekst)"
          };

          if (parentNumber) {
            statement.parent = `${canonical}#${parentNumber}`;
          }

          const herkomst = this.clean(row["Herkomst"]);
          if (herkomst) {
            statement.source = [{ display: herkomst }];
          }

          return statement;
        })
    };

    fs.writeFileSync(outputFile, JSON.stringify(requirements, null, 2), "utf8");
    console.log(`Wrote ${outputFile}`);
  }

  convertConceptPage(outputFolder) {
    const sheet = this.workbook.Sheets["Concept"];
    if (!sheet) {
      console.warn(`Skipping ${this.inputFile.name}: sheet "Concept" not found`);
      return;
    }

    const rows = XLSX.utils.sheet_to_json(sheet, {
      defval: "",
      range: 1     // The header row is the second row in the template (row 1)
    });

    const markdown = rows
    .filter(row => this.clean(row["Veld"]) != "ART-DECOR-id")
    .map(row => { return this.clean(row["Veld"]) + "\n: " + this.clean(row["Beschrijving"]); })
    .join("\n\n");

    const outputFile = path.join(outputFolder, this.fileRoot + "-Concept.md");
    fs.writeFileSync(outputFile, markdown, "utf8");
    console.log(`Wrote ${outputFile}`);
  }

  async getLogicalModel(outputFolder) {
    const sheet = this.workbook.Sheets["Concept"];
    if (!sheet) {
      console.warn(`Skipping ${this.inputFile.name}: sheet "Concept" not found`);
      return;
    }

    const rows = XLSX.utils.sheet_to_json(sheet, {
      defval: "",
      range: 1     // The header row is the second row in the template (row 1)
    }).filter(row => this.clean(row["Veld"]) == "ART-DECOR-id");

    let ad_id = "";
    if (rows.length == 1) {
      ad_id = this.clean(rows[0]["Beschrijving"]);
    }
    if (ad_id == "") {
      console.warn(`Skipping logical model for ${this.inputFile.name}: "ART-DECOR-id" is empty or absent`);
      return;
    } 
    
    try {
      const id_parts = ad_id.split("/");
      const id_date = id_parts[1].replace(/-/g, "").replace(/:/g, "").replace("T", "");
      const response = await fetch(`https://decor.nictiz.nl/fhir/4.0/zib2020bbr-/StructureDefinition/${id_parts[0]}--${id_date}?_format=json`);
      const body = await response.json();
      
      const outputFile = path.join(outputFolder, this.fileRoot + ".json");
      fs.writeFileSync(outputFile, JSON.stringify(body, null, 2), 'utf8');
      console.log(`Saved JSON to ${outputFile}`);
    } catch (error) {
      console.warn(`Couldn't download logical model for ${this.inputFile.name} from ART-DECOR, "${error.message}"`);
      return;
    }
  }
}

const inputFolder = process.argv[2];
const requirementsFolder = process.argv[3];
const pageFolder = process.argv[4];
const logicalModelFolder = process.argv[5];

if (!inputFolder || !requirementsFolder || !pageFolder) {
  console.error("Usage: node excel-to-requirements.js input-folder requirements-folder markdown-folder");
  process.exit(1);
}

if (!fs.existsSync(requirementsFolder)) {
  fs.mkdirSync(requirementsFolder, { recursive: true });
}
if (!fs.existsSync(pageFolder)) {
  fs.mkdirSync(pageFolder, { recursive: true });
}
if (!fs.existsSync(logicalModelFolder)) {
  fs.mkdirSync(logicalModelFolder, { recursive: true });
}

for (const excelFile of fs.readdirSync(inputFolder, {withFileTypes: true}).filter(file => /\.(xlsx|xlsm|xls)$/i.test(file.name))) {
  const convertor = new ExcelConvertor(excelFile);
  convertor.convertRequirements(requirementsFolder);
  convertor.convertConceptPage(pageFolder);
  convertor.getLogicalModel(logicalModelFolder);
}

