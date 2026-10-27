{% include_relative Patient-Concept.md %}

### Known issues

* [GBB-65](https://bits.nictiz.nl/browse/GBB-65): Information requirements for Pronouns and SexParametersForClinicalUse are missing from the IG
* [GBB-85](https://bits.nictiz.nl/browse/GBB-85): Add EU/NL traceability to all components of the GBBs
* [GBB-100](https://bits.nictiz.nl/browse/GBB-100): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-107](https://bits.nictiz.nl/browse/GBB-107): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-127](https://bits.nictiz.nl/browse/GBB-127): Add obligations
* [GBB-137](https://bits.nictiz.nl/browse/GBB-137): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

### Release notes version 1.0.0-alpha.2

* [GBB-18](https://bits.nictiz.nl/browse/GBB-18):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure
* [GBB-27](https://bits.nictiz.nl/browse/GBB-27): The zib value sets have been removed from the logical model of GBB-Patient, and the bindings have been added in accordance with the EU Core FHIR profile.
* [GBB-54](https://bits.nictiz.nl/browse/GBB-54): Removed Patient.extension:patSexParameterForClinicalUse.extension:patSexParameterForClinicalUse from the FHIR profile