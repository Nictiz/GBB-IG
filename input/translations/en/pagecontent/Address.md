{% include_relative Address-Concept.md %}

### Known issues

* [GBB-80](https://nictiz.atlassian.net/browse/GBB-80): Add EU/NL traceability to all components of the GBBs
* [GBB-93](https://nictiz.atlassian.net/browse/GBB-93): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-108](https://nictiz.atlassian.net/browse/GBB-108): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-122](https://nictiz.atlassian.net/browse/GBB-122): Add obligations
* [GBB-135](https://nictiz.atlassian.net/browse/GBB-135): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

### Release notes version 1.0.0-alpha.2

* [GBB-15](http://bits.nictiz.nl/browse/GBB-15):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure
* [GBB-25](http://bits.nictiz.nl/browse/GBB-25):  Adres.Country:
  * Value list mapping updated in the agreement model: main binding ISO-366-1-2 as in EU Core
  * Additional binding with component type added to the GBA countries table: GBA – ART-DECOR®
  * Information requirement ADD-16 created for this Dutch information requirement
  * Mapping to the agreement model and FHIR profile established
* [GBB-55](http://bits.nictiz.nl/browse/GBB-55): Changed the valueset of Address.country.extension:countryCode to how it is described in https://hl7.eu/fhir/base/StructureDefinition-Address-eu.html 
* [GBB-66](http://bits.nictiz.nl/browse/GBB-66): The Dutch translation of GBB-Address is changed from ‘Adresgegevens’ to ‘Adres’ in all artefacts.
* [GBB-67](http://bits.nictiz.nl/browse/GBB-67): The valueset https://decor.nictiz.nl/ad/#/gbb2026bbr-/datasets/dataset/2.16.840.1.113883.2.4.3.11.60.153.1.2/2026-06-01T13:47:10/concept/2.16.840.1.113883.2.4.3.11.60.153.2.1.84/2026-06-01T13:49:24  is added to the FHIR profile for GBB-Address under `address.country` as an additional binding with binding type `component`