{% include_relative Procedure-Concept.md %}

Note
: This Agreement Model is currently provided as an alpha version and is not yet complete.
  The anatomicalLocation backbone element is currently not populated, as the corresponding Building Block has not yet been developed.
  In addition, the Participations.performer[x] backbone element currently contains only Patient, Practitioner and PractitionerRole. RelatedPerson as a participant is still missing. It will be added once the corresponding Building Block becomes available.
  Implementers should consider these elements provisional and subject to change in future releases.

Note2
: The CurrentActionState element is mapped to FHIR Procedure.status using ConceptMap-openehr-currentstate-to-fhir-procedure-status. The status active is mapped to either in-progress or completed, depending on whether an EndDateTime is present. This mapping is based on the assumption that an end date is known when the procedure has been completed.

Note3
: The DateAndTimeActionstepPerformed element is mapped to FHIR Procedure.performedDateTime if CurrentActionState is active or completed and neither StartDateTime nor EndDateTime are populated.
If StartDateTime is populated but EndDateTime is absent, DateAndTimeActionstepPerformed is mapped to FHIR Procedure.performedPeriod.end, provided that CurrentACtionState is active or completed.