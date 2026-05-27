// excel-to-requirements.js
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const inputFolder = process.argv[2];
const outputFolder = process.argv[3];

if (!inputFolder || !outputFolder) {
  console.error("Usage: node excel-to-requirements.js input-folder output-folder");
  process.exit(1);
}

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

function clean(value) {
  return String(value ?? "").trim();
}

function paragraph(label, value) {
  value = clean(value);
  return value ? `**${label}**: ${value}` : null;
}

function convertExcelFile(inputFile) {
  const fileName = path.basename(inputFile);
  const fileRoot = path.basename(inputFile, path.extname(inputFile));

  const id = fileRoot;
  const canonical = "http://nictiz.nl/gbb/" + id;
  const outputFile = path.join(outputFolder, fileRoot + ".json");

  const workbook = XLSX.readFile(inputFile);
  const sheet = workbook.Sheets["Informatiebehoefte"];

  if (!sheet) {
    console.warn(`Skipping ${fileName}: sheet "Informatiebehoefte" not found`);
    return;
  }

  const rows = XLSX.utils.sheet_to_json(sheet, {
    defval: "",
    range: 1
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
      .filter(row => clean(row["Nummer"]) || clean(row["Naam"]))
      .map(row => {
        const nummer = clean(row["Nummer"]);

        const parentNumber = nummer.includes(".")
          ? nummer.split(".").slice(0, -1).join(".")
          : null;

        const label = nummer + " " + clean(row["Naam"]);

        const requirementText = [
          paragraph("Omschrijving", row["Omschrijving"]),
          paragraph("Variabiliteit", row["Variabiliteit"]),
          paragraph("Aanwezigheid", row["Aanwezigheid"]),
          paragraph("Verleden/heden/toekomst", row["Verleden/heden/toekomst"])
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

        const herkomst = clean(row["Herkomst"]);
        if (herkomst) {
          statement.source = [{ display: herkomst }];
        }

        return statement;
      })
  };

  fs.writeFileSync(outputFile, JSON.stringify(requirements, null, 2), "utf8");
  console.log(`Wrote ${outputFile}`);
}

const excelFiles = fs.readdirSync(inputFolder)
  .filter(file => /\.(xlsx|xlsm|xls)$/i.test(file))
  .map(file => path.join(inputFolder, file));

for (const inputFile of excelFiles) {
  convertExcelFile(inputFile);
}