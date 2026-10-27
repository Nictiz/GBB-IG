{% include_relative Condition-Concept.md %}

### Deviation from EHDS in the implementation artifact
The information requirements from the EHDSCondition logical model have been incorporated into the specification model of this GBB. However, EHDSCondition is difficult to implement fully in FHIR. According to the logical model, the header.author[x] data element is repeatable, but the most relevant FHIR resource type, Condition, applies a stricter cardinality (0..1). Consequently, the EHDS guidelines cannot be met. A Jira ticket has been created for this issue on the [HL7 Jira board](https://jira.hl7.org/browse/FHIR-58077).

### Future development
This version of the Condition GBB is still under active development. In the next iteration, at a minimum, the Dutch information requirements from the 2024 publication of HCIM Diagnosis and HCIM Condition will be analyzed. These requirements may align well with the existing modeling in the current version of this GBB or may result in additional data elements.
In addition, a future version of ART-DECOR will make it possible to specify obligations for each data element and system role, and to associate additional terminology bindings. Information requirements from other information standards will also be analyzed in the future.

### Known issues

* [GBB-6](https://bits.nictiz.nl/browse/GBB-6): FHIR profile not conformant with the EU profile: assertedDate element
* [GBB-97](https://bits.nictiz.nl/browse/GBB-97): Comply with DAGIM rules version 1.0.0-alpha.4
* [GBB-106](https://bits.nictiz.nl/browse/GBB-106): Add value sets according to the rules and guidelines
* [GBB-134](https://bits.nictiz.nl/browse/GBB-134): Formulate information requirements according to the DAGIM rules
* [GBB-84](https://bits.nictiz.nl/browse/GBB-84): Add EU/NL traceability
* [GBB-148](https://bits.nictiz.nl/browse/GBB-148): Missing additional bindings in the FHIR EU Core Condition profile

### Release notes version 1.0.0-alpha.2

* [GBB-52](https://bits.nictiz.nl/browse/GBB-52):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure