### Sources of information
This version of the generic building block covers information requirements from the following sources:
* EHDS logical information model (LIM) EHDSDeviceUse version 1.0.0
* FHIR R4 resource DeviceUseStatement, specifically the required elements: status, subject en device 
* Required elements from the openEHR archetype EVALUATION.device_summary version 0.0.1 alpha
* Zib MedicalDevice from the 2017, 2020, 2024 publications and the 2026 pre-publication
* Information standard BgZ-MSZ version 2.0.2 

### Rationale for the chosen base model
FHIR R4 DeviceUseStatement is currently the chosen base model for the logical model. Both DeviceUseStatement as well as the available openEHR- archetype have a low maturity level. Data elements such as author, health professional and organization are either represented using extensions or references to other resourecs.

### Other relevant information about version 1.0.0-alpha.1
* DeviceUse.timing is in FHIR R4 limited to datatype Period. The start and end dates from the Dutch zib can thus be represented within a single data element in FHIR; both start and end date remain optional separately.
* The explicit indication that a device is “not an assistive device” is not included. Explicit absence should not be recorded as a product type in DeviceUse.
* The reason for use of the medical device is not fully implementable in the form that the EHDS LIM describes. The relation with the diagnosis, procedure or request and the use of reason, derivedFrom and basedOn need to be further worked on.
* The source is distinct from the healthcare provider who prescribes, dispenses, implants, or removes a medical device. The descriptions and mappings must explicitly clarify this distinction; for the healthcare provider performing the procedure, integration with EHDSProcedure is being explored.
* Information requirements from other information standards will be analyzed in the future.