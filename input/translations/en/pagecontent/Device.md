
{% include_relative Device-Concept.md %}

### Known issues

* [GBB-149](https://nictiz.atlassian.net/browse/GBB-149): Terminology for Device.type has not yet been determined. Alignment of SNOMED CT, EMDN and the European MVC value set is still required.
* [GBB-150](https://nictiz.atlassian.net/browse/GBB-150): The cardinality of Type differs between EHDSDevice (0..*) and FHIR R4 Device.type (0..1). Multiple types are currently not supported.
* [GBB-157](https://nictiz.atlassian.net/browse/GBB-157): The EHDS UDI obligation has only been applied to Device.udiCarrier.deviceIdentifier in FHIR R4. The other UDI elements do not have a SHALL:populate obligation.