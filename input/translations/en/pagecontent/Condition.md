{% include_relative Condition-Concept.md %}

### Deviation from EHDS in the implementation artifact
The information requirements from the EHDSCondition logical model have been incorporated into the specification model of this GBB. However, EHDSCondition is difficult to implement fully in FHIR. According to the logical model, the header.author[x] data element is repeatable, but the most relevant FHIR resource type, Condition, applies a stricter cardinality (0..1). Consequently, the EHDS guidelines cannot be met. A Jira ticket has been created for this issue on the [HL7 Jira board](https://jira.hl7.org/browse/FHIR-58077).

### Future development
This version of the Condition GBB is still under active development. In the next iteration, at a minimum, the Dutch information requirements from the 2024 publication of HCIM Diagnosis and HCIM Condition will be analyzed. These requirements may align well with the existing modeling in the current version of this GBB or may result in additional data elements.
In addition, a future version of ART-DECOR will make it possible to specify obligations for each data element and system role, and to associate additional terminology bindings. Information requirements from other information standards will also be analyzed in the future.

### Kwown issues
* [GBB-Condition: FHIR profile not conformant with the EU profile: assertedDate element](https://nictiz.atlassian.net/browse/GBB-6)
* [GBB-Condition: Comply with DAGIM rules version 1.0.0-alpha.4](https://nictiz.atlassian.net/browse/GBB-97)
* [GBB-Condition: Add value sets according to the rules and guidelines](https://nictiz.atlassian.net/browse/GBB-106)
* [GBB-Condition: Formulate information requirements according to the DAGIM rules](https://nictiz.atlassian.net/browse/GBB-134)
* [GBB-Condition: Add EU/NL traceability](https://nictiz.atlassian.net/browse/GBB-84)
* [GBB-Condition: Missing additional bindings in the FHIR EU Core Condition profile](https://nictiz.atlassian.net/browse/GBB-148)