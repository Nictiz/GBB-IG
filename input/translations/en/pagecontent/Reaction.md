{% include_relative Reaction-Concept.md %}

### Known issues

* [GBB-76](https://bits.nictiz.nl/browse/GBB-76): Missing separate view for the FHIR profile of SBB Reaction
* [GBB-91](https://bits.nictiz.nl/browse/GBB-91): Add EU/NL traceability to all components of the GBBs
* [GBB-105](https://bits.nictiz.nl/browse/GBB-105): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-116](https://bits.nictiz.nl/browse/GBB-116): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-132](https://bits.nictiz.nl/browse/GBB-132): Add obligations
* [GBB-146](https://bits.nictiz.nl/browse/GBB-146): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

### Release notes version 1.0.0-alpha.2

* [GBB-29](https://bits.nictiz.nl/browse/GBB-29):
  * Changes to *SpecificSubstance*: 
    * Added the value set eHDSIAllergenNoDrug as a main binding and binding strength example in accordance with the FHIR EU Core Profile
    * Added new value sets without dependency on zib2020 as additional bindings, along with the binding strength ‘component’ (value lists: SpecifiekeStofAllergeneStoffenCodelijst; SpecifiekeStofHPKCodelijst; SpecifiekeStofSNKCodelijst; SpecifiekeStofSSKCodelijst; SpecifiekeStofThesaurus122Codelijst)
  * Changes to *Certainty*:
    * Added new value set ‘ZekerheidStatusCodelijst’ without dependency on zib2020 as additional bindings, along with the binding strength ‘component’ 
  * Changes to *Manifestation*:
    * Added the value set Allergy Reaction IPS 2.0.0 as a main binding and binding strength example in accordance with the FHIR EU Core Profile
    * Added new value set ‘ManifestatieVanReactieCodelijst’ without dependency on zib2020 as additional bindings, along with the binding strength ‘component’ 
    * Removed value set ‘SymptoomCodelijst’ due to content overlap with the ‘ManifestatieVanReactieCodelijst’
  * Changes to *Severity* and *RouteOfExposure*: 
    * Removed value sets with a dependency to zib2020 due to content overlap with the value sets linked as main binding
* [GBB-68](https://bits.nictiz.nl/browse/GBB-68): Replaced value sets from the zib in the FHIR profile for GBB-AllergyIntolerance, which contains Reaction, with value sets from GBB.