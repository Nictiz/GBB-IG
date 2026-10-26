{% include_relative Procedure-Concept.md %}

### Known issues

* [MPI-11](https://nictiz.atlassian.net/browse/MPI-11): Add EU/NL traceability for all parts of the GBBs
* [MPI-12](https://nictiz.atlassian.net/browse/MPI-12): Conform to the DAGIM-rules version 1.0.0-alpha.4
* [GBB-56](https://nictiz.atlassian.net/browse/GBB-56): The anatomicalLocation backbone element is currently not populated, as the corresponding Building Block has not yet been developed.
* [GBB-57](https://nictiz.atlassian.net/browse/GBB-57): The Participations.performer[x] backbone element currently contains only Patient, Practitioner and PractitionerRole. RelatedPerson as a participant is still missing. It will be added once the corresponding Building Block becomes available.
* [GBB-58](https://nictiz.atlassian.net/browse/GBB-58): For the same reason, the InformationProvider backbone element does not yet support a reference to RelatedPerson.
* [GBB-59](https://nictiz.atlassian.net/browse/GBB-59): The CurrentActionState element is mapped to FHIR Procedure.status using ConceptMap-openehr-currentstate-to-fhir-procedure-status. The status active is mapped to either in-progress or completed, depending on whether an EndDateTime is present. This mapping is based on the assumption that an end date is known when the procedure has been completed.
* [GBB-60](https://nictiz.atlassian.net/browse/GBB-60): The DateAndTimeActionstepPerformed element is mapped to FHIR Procedure.performedDateTime if CurrentActionState is active or completed and neither StartDateTime nor EndDateTime are populated.If StartDateTime is populated but EndDateTime is absent, DateAndTimeActionstepPerformed is mapped to FHIR Procedure.performedPeriod.end, provided that CurrentACtionState is active or completed.
* [GBB-61](https://nictiz.atlassian.net/browse/GBB-61): There are differences between the EHDS Logical Model and the FHIR profile, which currently prevent the EHDS model from being fully implemented. The mapping defined in the eu-core-profile is followed. This has implications for the following data elements in the FHIR profile.
  * Procedure.recorder (cardinality): The EHDS Logical Information Model (LIM) expects header.author to be a repeating element. This cannot currently be implemented because recorder has a maximum cardinality of 1 in the base FHIR Procedure resource.
  * Procedure.recorder (reference types): The EHDS LIM expects header.author to support EHDSHealthProfessional, EHDSOrganisation, or EHDSDevice. This cannot currently be fully implemented because recorder in the base FHIR Procedure resource can only reference Patient, RelatedPerson, Practitioner, or PractitionerRole.
  * [GBB-62](https://nictiz.atlassian.net/browse/GBB-62) Procedure.asserter (data type): The EHDS LIM expects header.source to be a CodeableConcept, which is mapped to Procedure.asserter. However, Procedure.asserter is defined as a Reference in the base FHIR Procedure resource.
* [GBB-63](https://nictiz.atlassian.net/browse/GBB-63): The EHDS Logical Model provides contextual information about devices through DeviceUsed and FocalDevice. In openEHR, information about devices used or applied during a procedure is represented within the procedure details. However, openEHR can only assign specific meaning to these concepts through templates. For now, the Procedure Logical Model distinguishes between the different ways in which devices may be used.

### Release notes version 1.0.0-alpha.2

* [GBB-53](http://bits.nictiz.nl/browse/GBB-53):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure