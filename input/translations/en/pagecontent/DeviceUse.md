
### Known issues

* [GBB-151](https://bits.nictiz.nl/browse/GBB-151): Language used (DEVICEUSE-08) is missing from the base model and ART-DECOR. The existing FHIR mapping to DeviceUseStatement.language needs to be verified.
* [GBB-152](https://bits.nictiz.nl/browse/GBB-152): The choice between value sets for language usage (BCP 47 and ISO 639) still requires alignment.
* [GBB-10](https://bits.nictiz.nl/browse/GBB-10): Anatomical location is currently represented using bodySite. The intended reference to GBB BodyStructure has not yet been implemented.
* [GBB-153](https://bits.nictiz.nl/browse/GBB-153): Author (DEVICEUSE-5) is missing from the base model and ART-DECOR. It needs to be investigated whether generic metadata or Provenance can be used for this purpose.
* [GBB-154](https://bits.nictiz.nl/browse/GBB-154): Healthcare professional (DEVICEUSE-13) is missing from the base model and ART-DECOR.
* [GBB-155](https://bits.nictiz.nl/browse/GBB-155): Healthcare provider as location (DEVICEUSE-14) is missing from the base model and ART-DECOR.
* [GBB-156](https://bits.nictiz.nl/browse/GBB-156): RelatedPerson is supported as a reference type in FHIR R4, but the corresponding modelling in ART-DECOR has not yet been completed.
* [GBB-11](https://bits.nictiz.nl/browse/GBB-11): Reason for use has not been fully elaborated. References to other GBBs are still missing, and a Procedure reference is not supported through DeviceUseStatement.reasonReference in FHIR R4.
* [GBB-9](https://bits.nictiz.nl/browse/GBB-9): Timing (DEVICEUSE-09) is currently not fully supported. The restriction to Period is being addressed separately in GBB-9.

### Release notes version 1.0.0-alpha.2

* [GBB-9](https://bits.nictiz.nl/browse/GBB-9): DeviceUseStatement.timing[x] is restricted to the Period data type, so that the start and end dates can be recorded correctly. Existing mappings and obligations are retained.
* [GBB-12](https://bits.nictiz.nl/browse/GBB-12): TBB inserted in the transaction.
* [GBB-22](https://bits.nictiz.nl/browse/GBB-22): The transactions for ‘Device’ and ‘DeviceUse’ are now ‘LogicalModelDevice’ and ‘LogicalModelDeviceUse’. These have now also been translated into English.