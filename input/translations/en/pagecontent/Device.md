
{% include_relative Device-Concept.md %}

### UDI

The EHDSDevice model defines `Udi` with a cardinality of `0..*`. In FHIR R4, UDI information is represented using `Device.udiCarrier`, which can occur multiple times.

In the current implementation, the `SHALL:populate` obligation is only applied to `Device.udiCarrier.deviceIdentifier`. This obligation does not apply to the other child elements of `udiCarrier`. These elements are used when the information is available.

### Type - terminology

For the European information requirement 'Type' (EU-11), SNOMED CT and EMDN are mentioned as possible terminology systems. In addition, the European Master Value Sets Catalog (v10.0.0) includes a value set for MedicalDevice.

It is still being investigated which value set should be applied to the GBBs. No value set has currently been linked in ART-DECOR.

### Type - cardinality

In the EHDSDevice model, `Type` has a cardinality of `0..*`. In FHIR R4, `Device.type` has a cardinality of `0..1` and supports a maximum of one `CodeableConcept`.

As a result, the cardinality defined in the EHDS model cannot be directly represented in FHIR R4. Until an additional solution is agreed upon, the implementation follows the FHIR R4 cardinality.