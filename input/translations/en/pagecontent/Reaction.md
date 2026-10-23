{% include_relative Reaction-Concept.md %}

### Known Issue
* [Missing separate view for the FHIR profile of SBB Reaction](http://nictiz.atlassian.net/browse/GBB-76)
* [Add EU/NL traceability to all components of the GBBs](http://nictiz.atlassian.net/browse/GBB-91)
* [Comply with the DAGIM rules, version 1.0.0-alpha.4](http://nictiz.atlassian.net/browse/GBB-105)
* [Review and update the GBBs according to the rules for terminology and value sets](http://nictiz.atlassian.net/browse/GBB-116)
* [Add obligations](http://nictiz.atlassian.net/browse/GBB-132)
* [Information requirements are not yet adequately formulated in accordance with the DAGIM rules](http://nictiz.atlassian.net/browse/GBB-146)

### Release notes version 1.0.0-alpha.2

* [GBB-29 - Changes to *SpecificSubstance*: • Added the value set eHDSIAllergenNoDrug as a main binding and binding strength example in accordance with the FHIR EU Core Profile • Added new value sets without dependency on zib2020 as additional bindings, along with the binding strength ‘component’ (value lists: SpecifiekeStofAllergeneStoffenCodelijst; SpecifiekeStofHPKCodelijst; SpecifiekeStofSNKCodelijst; SpecifiekeStofSSKCodelijst; SpecifiekeStofThesaurus122Codelijst) Changes to *Certainty*: • Added new value set ‘ZekerheidStatusCodelijst’ without dependency on zib2020 as additional bindings, along with the binding strength ‘component’ Changes to *Manifestation*: • Added the value set Allergy Reaction IPS 2.0.0 as a main binding and binding strength example in accordance with the FHIR EU Core Profile • Added new value set ‘ManifestatieVanReactieCodelijst’ without dependency on zib2020 as additional bindings, along with the binding strength ‘component’ • Removed value set ‘SymptoomCodelijst’ due to content overlap with the ‘ManifestatieVanReactieCodelijst’ Changes to *Severity* and *RouteOfExposure*: • Removed value sets with a dependency to zib2020 due to content overlap with the value sets linked as main binding](http://nictiz.atlassian.net/browse/GBB-29)
* [GBB-68 - Replaced value sets from the zib in the FHIR profile for GBB-AllergyIntolerance, which contains Reaction, with value sets from GBB.](http://nictiz.atlassian.net/browse/GBB-68)