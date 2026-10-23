{% include_relative PractitionerRole-Concept.md %}

### Known Issue
* [Add EU/NL traceability to all components of the GBBs](http://nictiz.atlassian.net/browse/GBB-89)
* [Comply with the DAGIM rules, version 1.0.0-alpha.4](http://nictiz.atlassian.net/browse/GBB-102)
* [Review and update the GBBs according to the rules for terminology and value sets](http://nictiz.atlassian.net/browse/GBB-114)
* [Add obligations](http://nictiz.atlassian.net/browse/GBB-129)
* [Information requirements are not yet adequately formulated in accordance with the DAGIM rules](http://nictiz.atlassian.net/browse/GBB-143)

### Release notes version 1.0.0-alpha.2

* [GBB-20 - Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure](http://nictiz.atlassian.net/browse/GBB-20)
* [GBB-28 - Replacement of value lists in the GBB Healthcare Provider Role for the following elements: • The “code” main binding now uses → Valueset-practitioner-role - FHIR v4.0.1 with a binding strength of “example,” as in the FHIR EU core profile • The “specialism” main binding now uses → Valueset-c80-practice-codes - FHIR v4.0.1 with a binding strength of “preferred,” as in the FHIR EU core profile • Two value sets are added as additional bindings to ProviderRole.Specialty: the UZI code list and the UGB code list as binding type components. These value sets are decoupled from the zib2020 publication](http://nictiz.atlassian.net/browse/GBB-28)
* [GBB-64 - Replaced value sets from the zib in the FHIR profile for GBB-AllergyIntolerance, which contains Reaction, with value sets from GBB.](http://nictiz.atlassian.net/browse/GBB-64)