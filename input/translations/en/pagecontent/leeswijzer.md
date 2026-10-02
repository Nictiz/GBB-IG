### Information sources
This version of this generic building block (GBB) covers information requirements from the following sources:
* EHDSCondition Logical Information Model, version 1.0.0
* Mandatory elements from FHIR R4 Condition
* Mandatory elements from openEHR archetype Problem/Diagnosis, version 1.7.4
* HCIM Problem from the 2017 publication
* HCIM Problem from the 2020 publication
* BgZ-MSZ Information Standard, version 2.0.2
* Emergency Summary use case from the Acute Zorg Information Standard, version 2.2.0

### Deviation from EHDS in the implementation artifact
The information requirements from the EHDSCondition logical model have been incorporated into the specification model of this GBB. However, EHDSCondition is difficult to implement fully in FHIR. According to the logical model, the header.author[x] data element is repeatable, but the most relevant FHIR resource type, Condition, applies a stricter cardinality (0..1). Consequently, the EHDS guidelines cannot be met. A Jira ticket has been created for this issue on the [HL7 Jira board](https://jira.hl7.org/browse/FHIR-58077).

### Other relevant information about version 1.0.0-alpha.1
It is important to note that, due to the current version of ART-DECOR, the transaction associated with this logical model has not yet been completed. Other GBBs referenced by this GBB, for example, Health Professional as the author of the Condition, must contain a transaction building block (TBB). This TBB inherits the cardinalities of the linked GBB. The TBB for the Patient GBB was successfully linked in this version. This issue will be resolved in the next release of ART-DECOR (3.10.3).

### Future development
This version of the Condition GBB is still under active development. In the next iteration, at a minimum, the Dutch information requirements from the 2024 publication of HCIM Diagnosis and HCIM Condition will be analyzed. These requirements may align well with the existing modeling in the current version of this GBB or may result in additional data elements.
In addition, a future version of ART-DECOR will make it possible to specify obligations for each data element and system role, and to associate additional terminology bindings. Information requirements from other information standards will also be analyzed in the future.