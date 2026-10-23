{% include_relative DeviceUse-Concept.md %}

### Relevant information about version 1.0.0-alpha.1
* In FHIR R4, DeviceUse.timing is restricted to Period. This allows the start and end dates from the Dutch zib to be exchanged within a single period; both components remain optional separately.
* The ability to explicitly indicate that a device is “not a medical device” is not included. Explicit absence should not be recorded as a product type in DeviceUse.
* The reason for using a medical device cannot yet be fully implemented as described in the EHDS model: the relationship with a diagnosis, procedure, or request, as well as the use of “reason,” “derivedFrom,” and “basedOn,” must be further elaborated.
* The recording source is distinct from the healthcare provider who prescribes, dispenses, implants, or removes a medical device. The descriptions and mappings must explicitly clarify this distinction; for the performing healthcare provider, alignment with EHDSProcedure is being explored.
* Information requirements from other information standards will be analyzed in the future.