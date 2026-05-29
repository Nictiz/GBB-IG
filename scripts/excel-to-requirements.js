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
      text: {
        status: "empty",
        div: "<div xml:lang=\"en\" lang=\"en\"></div>"
      },
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
}

const inputFolder = process.argv[2];
const outputFolder = process.argv[3];

if (!inputFolder || !outputFolder) {
  console.error("Usage: node excel-to-requirements.js input-folder output-folder");
  process.exit(1);
}

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

for (const excelFile of fs.readdirSync(inputFolder, {withFileTypes: true}).filter(file => /\.(xlsx|xlsm|xls)$/i.test(file.name))) {
  const convertor = new ExcelConvertor(excelFile);
  convertor.convertRequirements(outputFolder);
}

