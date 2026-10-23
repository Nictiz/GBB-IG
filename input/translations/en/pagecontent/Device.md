
{% include_relative Device-Concept.md %}

### Known issues

* [GBB-Device: Terminology for Device.type has not yet been determined. Alignment of SNOMED CT, EMDN and the European MVC value set is still required.](https://nictiz.atlassian.net/browse/GBB-149)
* [GBB-Device: The cardinality of Type differs between EHDSDevice (0..*) and FHIR R4 Device.type (0..1). Multiple types are currently not supported.](https://nictiz.atlassian.net/browse/GBB-150)
* [GBB-Device: The EHDS UDI obligation has only been applied to Device.udiCarrier.deviceIdentifier in FHIR R4. The other UDI elements do not have a SHALL:populate obligation.](https://nictiz.atlassian.net/browse/GBB-157)