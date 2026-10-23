{% include_relative PractitionerRole-Concept.md %}

### Bekende problemen
* [Toevoegen van EU/NL traceability op alle onderdelen van de GBB's](http://nictiz.atlassian.net/browse/GBB-89)
* [Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4](http://nictiz.atlassian.net/browse/GBB-102)
* [GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten](http://nictiz.atlassian.net/browse/GBB-114)
* [Obligations toevoegen](http://nictiz.atlassian.net/browse/GBB-129)
* [Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels](http://nictiz.atlassian.net/browse/GBB-143)

### Release notes version 1.0.0-alpha.2

* [GBB-20 - Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure](http://nictiz.atlassian.net/browse/GBB-20)
* [GBB-28 - Vervanging van waardelijsten op de GBB ZorgverlenerRol op de elementen: • code main binding krijgt nu→ Valueset-practitioner-role - FHIR v4.0.1 (https://hl7.org/fhir/R4/valueset-practitioner-role.html) met binding strength example, zoals in FHIR EU core profile • specialisme krijgt nu main binding → Valueset-c80-practice-codes - FHIR v4.0.1 (https://hl7.org/fhir/R4/valueset-c80-practice-codes.html) met binding strength preferred, zoals in FHIR EU core profile • Twee waardelijsten zijn toegevoegd als additional bindings aan ZorgverlenerRol.Specialisme: UZI codelijst (https://decor.nictiz.nl/ad/#/gbb2026bbr-/terminology/valueset/2.16.840.1.113883.2.4.3.11.60.153.11.55/2026-10-19T12:14:43) en UGB codelijst (https://decor.nictiz.nl/ad/#/gbb2026bbr-/terminology/valueset/2.16.840.1.113883.2.4.3.11.60.153.11.56/2026-10-19T12:14:49) als binding type component. Deze waardelijsten zijn ontkoppeld van de zib2020 publicatie](http://nictiz.atlassian.net/browse/GBB-28)
* [GBB-64 - De waardelijsten van zib uit FHIR-profiel voor GBB-AllergieIntolerantie, die Reactie bevat, vervangen door waardelijsten van de GBB.](http://nictiz.atlassian.net/browse/GBB-64)