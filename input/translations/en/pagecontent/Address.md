{% include_relative Address-Concept.md %}

### Known Issue
* [Add EU/NL traceability to all components of the GBBs](http://nictiz.atlassian.net/browse/GBB-80)
* [Comply with the DAGIM rules, version 1.0.0-alpha.4](http://nictiz.atlassian.net/browse/GBB-93)
* [Review and update the GBBs according to the rules for terminology and value sets](http://nictiz.atlassian.net/browse/GBB-108)
* [Add obligations](http://nictiz.atlassian.net/browse/GBB-122)
* [Information requirements are not yet adequately formulated in accordance with the DAGIM rules](http://nictiz.atlassian.net/browse/GBB-135)

### Release notes version 1.0.0-alpha.2

* [GBB-15 - Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure](http://nictiz.atlassian.net/browse/GBB-15)
* [GBB-25 - • Value list mapping updated in the agreement model: main binding ISO-366-1-2 as in EU Core • Additional binding with component type added to the GBA countries table: GBA – ART-DECOR® • Information requirement ADD-16 created for this Dutch information requirement • Mapping to the agreement model and FHIR profile established](http://nictiz.atlassian.net/browse/GBB-25)
* [GBB-55 - Changed the valueset of Address.country.extension:countryCode to how it is described in https://hl7.eu/fhir/base/StructureDefinition-Address-eu.html](http://nictiz.atlassian.net/browse/GBB-55)
* [GBB-66 - The Dutch translation of GBB-Address is changed from ‘Adresgegevens’ to ‘Adres’ in all artefacts.](http://nictiz.atlassian.net/browse/GBB-66)
* [GBB-67 - The valueset https://decor.nictiz.nl/ad/#/gbb2026bbr-/datasets/dataset/2.16.840.1.113883.2.4.3.11.60.153.1.2/2026-06-01T13:47:10/concept/2.16.840.1.113883.2.4.3.11.60.153.2.1.84/2026-06-01T13:49:24 is added to the FHIR profile for GBB-Address under `address.country` as an additional binding with binding type `component`](http://nictiz.atlassian.net/browse/GBB-67)
