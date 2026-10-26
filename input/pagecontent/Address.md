{% include_relative Address-Concept.md %}

### Bekende problemen

* [GBB-80](https://nictiz.atlassian.net/browse/GBB-80): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-93](https://nictiz.atlassian.net/browse/GBB-93): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-108](https://nictiz.atlassian.net/browse/GBB-108): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-122](https://nictiz.atlassian.net/browse/GBB-122): Obligations toevoegen
* [GBB-135](https://nictiz.atlassian.net/browse/GBB-135): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

### Release notes versie 1.0.0-alpha.2

* [GBB-15](http://bits.nictiz.nl/browse/GBB-15): Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole 
Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure
* [GBB-25](http://bits.nictiz.nl/browse/GBB-25): Adres.Country:
  * Waardelijstkoppeling aangepast in afsprakenmodel: main binding ISO-366-1-2 zoals in EU core
  * Additional binding met type component toegevoegd naar de GBA landen tabel: GBA - https://decor.nictiz.nl/ad/#/gbb2026bbr-/terminology/valueset/2.16.840.1.113883.2.4.3.11.60.153.11.35/2026-10-19T07:42:38
  * informatierequirement ADD-16 aangemaakt voor deze NL informatiebehoefte
  * Mapping naar afsprakenmodel en FHIR profiel gelegd
* [GBB-55](http://bits.nictiz.nl/browse/GBB-55): De waardelijst van Address.country.extension:countryCode aangepast naar hoe het staat in https://hl7.eu/fhir/base/StructureDefinition-Address-eu.html
* [GBB-66](http://bits.nictiz.nl/browse/GBB-66): De Nederlandse vertaling van GBB-Address is gewijzigd van ‘Adresgegevens’ naar ‘Adres’ in alle artefacten.
* [GBB-67](http://bits.nictiz.nl/browse/GBB-67): De waardelijst https://decor.nictiz.nl/ad/#/gbb2026bbr-/datasets/dataset/2.16.840.1.113883.2.4.3.11.60.153.1.2/2026-06-01T13:47:10/concept/2.16.840.1.113883.2.4.3.11.60.153.2.1.84/2026-06-01T13:49:24 aan FHIR-profiel voor GBB-Adres toegevoegd op adres.country als additional binding met binding type component
