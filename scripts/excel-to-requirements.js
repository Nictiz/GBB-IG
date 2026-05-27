// excel-to-requirements.js
const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

const inputFile = process.argv[2];
if (!inputFile) {
  console.error("Usage: node excel-to-requirements.js input.xlsx");
  process.exit(1);
}

const fileRoot = path.basename(inputFile, path.extname(inputFile)); // Root filename without extension
const id = "Requirements-" + fileRoot;
const canonical = "http://nictiz.nl/gbb/" + id;
const outputFile = "Requirements-" + fileRoot + ".json";

const workbook = XLSX.readFile(inputFile);
const sheet = workbook.Sheets["Informatiebehoefte"];

if (!sheet) {
  throw new Error('Sheet "Informatiebehoefte" not found');
}

const rows = XLSX.utils.sheet_to_json(sheet, {
  defval: "",
  range: 1 // 1 = second row. In the template, this is the header row.
});

function clean(value) {
  return String(value ?? "").trim();
}

function paragraph(label, value) {
  value = clean(value);
  return value ? `**${label}**: ${value}` : null;
}

const requirements = {
  resourceType: "Requirements",
  id: id,
  text: { // Narrative generation seems broken, so we include an empty narrative
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