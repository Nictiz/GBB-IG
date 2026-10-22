
### FHIR R4 limitation: reason for use as a procedure

The European information requirement `DEVICEUSE-11.01` establishes a relationship between the use of a medical device and a procedure (`Procedure`).

In FHIR R4, `DeviceUseStatement.reasonReference` only supports references to `Condition`, `DiagnosticReport`, `DocumentReference`, and `Media`. Therefore, `Procedure` has not been included as a `targetProfile` in `nl-core-DeviceUse`.

The mapping to `DEVICEUSE-11.01` is retained for traceability. This does not mean that the information requirement is fully supported by the current FHIR R4 profile.

The discrepancy between the EHDS logical information model and the FHIR R4 implementation will be raised with HL7 Europe to explore an appropriate solution.
