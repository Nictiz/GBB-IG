{% include_relative Organization-Concept.md %}

### Known issues

* [GBB-83](https://nictiz.atlassian.net/browse/GBB-83): Add EU/NL traceability to all components of the GBBs
* [GBB-99](https://nictiz.atlassian.net/browse/GBB-99): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-110](https://nictiz.atlassian.net/browse/GBB-110): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-121](https://nictiz.atlassian.net/browse/GBB-121): Add obligations
* [GBB-141](https://nictiz.atlassian.net/browse/GBB-141): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

### Release notes version 1.0.0-alpha.2

* [GBB-17](http://bits.nictiz.nl/browse/GBB-17):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure
* [GBB-26](http://bits.nictiz.nl/browse/GBB-26): The “zib-organizationType” value list in the logical model under the “Organization.Type” element for GBB Organization has been replaced by the “gbb-organizationType” value list as an additional binding with a binding strength component.
* [GBB-34](http://bits.nictiz.nl/browse/GBB-34): Replaced the value set zib-organizationType in the FHIR profile for GBB-Organization with value set gbb-organizationType as additional binding with binding strength component