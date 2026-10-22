
### Beperking FHIR R4: reden voor gebruik als verrichting

De Europese informatiebehoefte `DEVICEUSE-11.01` voorziet in een relatie tussen het gebruik van een medisch hulpmiddel en een verrichting (`Procedure`).

In FHIR R4 ondersteunt `DeviceUseStatement.reasonReference` uitsluitend verwijzingen naar `Condition`, `DiagnosticReport`, `DocumentReference` en `Media`. Een verwijzing naar `Procedure` is daarom niet opgenomen als `targetProfile` in `nl-core-DeviceUse`.

De mapping naar `DEVICEUSE-11.01` blijft behouden voor traceerbaarheid. Dit betekent niet dat de informatiebehoefte volledig wordt ondersteund door het huidige FHIR R4-profiel.

De discrepantie tussen het EHDS-logisch informatiemodel en de FHIR R4-implementatie wordt bij HL7 Europe aangekaart om een passende oplossing te onderzoeken.
