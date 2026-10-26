{% include_relative Patient-Concept.md %}

### Bekende problemen

* [GBB-65](https://nictiz.atlassian.net/browse/GBB-65): Informatierequirements Pronouns en SexParametersForClinicalUse ontbreken in IG
* [GBB-85](https://nictiz.atlassian.net/browse/GBB-85): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-100](https://nictiz.atlassian.net/browse/GBB-100): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-107](https://nictiz.atlassian.net/browse/GBB-107): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-127](https://nictiz.atlassian.net/browse/GBB-127): Obligations toevoegen
* [GBB-137](https://nictiz.atlassian.net/browse/GBB-137): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

### Release notes versie 1.0.0-alpha.2

* [GBB-18](http://bits.nictiz.nl/browse/GBB-18):
  Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole

  Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure
* [GBB-27](http://bits.nictiz.nl/browse/GBB-27): De zib waardelijsten zijn verwijderd uit het logisch model van GBB-Patient en de bindings zijn toegevoegd in lijn met het EU Core FHIR profiel.
* [GBB-54](http://bits.nictiz.nl/browse/GBB-54): Patient.extension:patSexParameterForClinicalUse.extension:patSexParameterForClinicalUse in FHIR-profiel verwijderd