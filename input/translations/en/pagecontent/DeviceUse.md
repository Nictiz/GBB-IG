
### Known issues

* [GBB-DeviceUse: Language used (DEVICEUSE-08) is missing from the base model and ART-DECOR. The existing FHIR mapping to DeviceUseStatement.language needs to be verified.]
* [GBB-DeviceUse: The choice between value sets for language usage (BCP 47 and ISO 639) still requires alignment.]
* [GBB-DeviceUse: Anatomical location is currently represented using bodySite. The intended reference to GBB BodyStructure has not yet been implemented.](https://nictiz.atlassian.net/browse/GBB-10)
* [GBB-DeviceUse: Author (DEVICEUSE-5) is missing from the base model and ART-DECOR. It needs to be investigated whether generic metadata or Provenance can be used for this purpose.]
* [GBB-DeviceUse: Healthcare professional (DEVICEUSE-13) is missing from the base model and ART-DECOR.]
* [GBB-DeviceUse: Healthcare provider as location (DEVICEUSE-14) is missing from the base model and ART-DECOR.]
* [GBB-DeviceUse: RelatedPerson is supported as a reference type in FHIR R4, but the corresponding modelling in ART-DECOR has not yet been completed.]
* [GBB-DeviceUse: Reason for use has not been fully elaborated. References to other GBBs are still missing, and a Procedure reference is not supported through DeviceUseStatement.reasonReference in FHIR R4.](https://nictiz.atlassian.net/browse/GBB-11)
* [GBB-DeviceUse: Timing (DEVICEUSE-09) is currently not fully supported. The restriction to Period is being addressed separately in GBB-9.](https://nictiz.atlassian.net/browse/GBB-9)
