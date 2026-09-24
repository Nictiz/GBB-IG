### Sources of information requirements
This version of GBB Device covers information requirements from the following sources:
* EHDS Logical Information Model EHDSDevice version 1.0.0
* Mandatory elements from openEHR archetype Medical Device version 1.0.0
* 2017 publication of Zib MedicalDevice
* 2020 publication of Zib MedicalDevice
* 2024 publication of Zib MedicalDevice
* 2026 pre-publication of Zib MedicalDevice
* Information standard BgZ-MSZ version 2.0.2
FHIR R4 resource Device contains no mandatory elements. 

### Rationale for the chosen base model
FHIR R4 Device is currently the chosen base model for the logical model. FHIR resource Device better meets the information requirements, as there are discrepancies in only 3 information requirements (concerning 1 element in the model), whereas openEHR deviates from 7 information requirements (concerning 3 elements in the model).

### Obligations on the registering system
In the model in ART-DECOR, obligations are specified for each data element with respect to three different actors: the registering system, the exchanging system and the processing system. The obligations on the exchanging and processing systems have been incorporated into the FHIR profile using the FHIR extension: [Obligation Extension](http://hl7.org/fhir/StructureDefinition/obligation). Data elements with a minimum cardinality of 1 have a SHALL:able-to-populate obligation for the registering system. These obligations have not been included in FHIR, as FHIR is intended for data exchange and not for data storage.