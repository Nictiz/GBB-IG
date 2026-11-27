Concept name
: Functional Ability


Concept description
: The extent to which an individual is able to perform a function that is necessary or desirable to meet the activities of daily living (ADL).


Purpose
: Information about the extent to which a person can perform a function that is necessary or desirable to meet activities of daily living (ADL), provides insight into the person’s independence and/or any limitations. This insight makes it possible to determine the nature and extent of any additional care required and/or how certain activities should be performed.


Use case(s)
: eOverdracht, NL-PS (Patient summary for The Nederlands)


Representation
: Record one instance per assessment of an aspect of the person’s functional ability, specifying the aspect assessed and the date and, where relevant, the time to which the assessment relates. Different aspects may be recorded separately and at different times. 
   A reassessment results in a new instance, even if the functional ability remains unchanged. This ensures that the progression over time remains clear. Corrections or additions to the same assessment are recorded as changes to the existing instance, whilst previous versions and the origin of the change remain traceable.
   Versioning and any statuses, such as draft, final or expired, follow the basic model. Distinguish between the point in time to which the assessment relates and the point in time at which it was recorded or amended. According to the basic model, an incorrectly recorded assessment is corrected or marked as expired, whilst retaining the history.

Alias(es)
: 


Correct use
: An assessment of the patient’s capabilities and any care needs


Incorrect use
: Not to be used for recording diagnoses (conditions) that are (or may be) functionally limiting, within the building block. GBB-Condition, on the other hand, can be added separately in the ‘functionalStatus’ section/category of EPS or DR.


Sources
:
* [Xt-EHR LIM EHDSObservation 1.0.0](https://www.xt-ehr.eu/fhir/models/en/StructureDefinition-EHDSObservation.html)
* [FHIR R4 Observation profiel 4.0.1](https://hl7.org/fhir/observation.html)
* [Xt-EHR LIM Discharge Report 1.0.0](https://www.xt-ehr.eu/fhir/models/en/StructureDefinition-EHDSDischargeReport.html)
* [Composition EU HDR 1.0.0](https://hl7.eu/fhir/hdr/StructureDefinition-composition-eu-hdr.html)
* [Xt-EHR LIM Patient Summary 1.0.0](https://www.xt-ehr.eu/fhir/models/en/StructureDefinition-EHDSPatientSummary.html)
* [Composition EU EPS 1.0.0-ballot](https://hl7.eu/fhir/eps/StructureDefinition-composition-eu-eps.html)
* [OpenEHR Functional ability archetype 0.0.1-alpha](https://ckm.openehr.org/ckm/archetypes/1013.1.5017)
* [Uitbreiding MeO: zelfzorg (wassen, kleden, etc) nvt](https://nictiz.atlassian.net/browse/EOVDR-929)
* [ ]()
* [Zib VermogenTotDrinken 2024](VermogenTotDrinken-v3.1.2)
* [Zib VermogenTotEten 2024](VermogenTotEten-v3.1.1)
* [Zib VermogenTotMondverzorging 2024](VermogenTotMondverzorging-v3.1)
* [Zib VermogenTotToiletgang 2024](VermogenTotToiletgang-v3.1.1)
* [Zib VermogenTotUiterlijkeVerzorging 2024](VermogenTotUiterlijkeVerzorging-v1.0.2)
* [Zib VermogenTotVerpleegtechnischeHandelingen 2024](VermogenTotVerpleegtechnischeHandelingen-v1.0.2)
* [Zib VermogenTotZelfstandigMedicatiegebruik 2024](VermogenTotZelfstandigMedicatiegebruik-v2.0)
* [Zib FunctieHorenZichKleden 2024](VermogenTotZichKleden-v3.1.1)
* [Zib VermogenTotZichWassen 2024](VermogenTotZichWassen-v3.1.1)
* [ ](VermogenTot alle 9 zibs)
* [Zib FunctieHoren 2024](FunctieHoren-v3.4)
* [Zib FunctieZien 2024](FunctieZien-v4.0)
* [Zib Mobiliteit 2024](Mobiliteit-v3.3.1)
* [ ](MedischHulpmiddel-v5.0)
* [Zib FunctioneleOfMentaleStatus 2024](FunctioneleOfMentaleStatus-v4.0.1)
* [Basisgegevensset Zorg Medisch-specialistische Zorg ]()
* [Spoedsamenvatting 2.2.0](https://decor.nictiz.nl/pub/acutezorg/acutezorg-html-20260114T154913/sc-2.16.840.1.113883.2.4.3.11.60.55.3.12-2019-10-23T102023.html)
* [Verpleegkundige overdracht volwassenen 4.2.0-beta](https://decor.nictiz.nl/pub/eoverdracht/e-overdracht-html-20260810T104909/tr-2.16.840.1.113883.2.4.3.11.60.30.4.80-2024-04-02T000000.html)
* [NHG Tabel Diagnostische Bepalingen versie 45 versie 45](https://bepalingen.nhg.org/labcodes/determinations?q%5Bs%5D=&q%5Bapplication_kind_cont%5D=&q%5Bapplication_kind_cont%5D=&q%5Bgroup_id_eq%5D=&q%5Bdeleted_at_status%5D=&q%5Bdeleted_at_status%5D=active&q%5Bcached_version_created_eq%5D=&q%5Bmaterial_id_eq%5D=&q%5Bdetail_id_eq%5D=&q%5Bselection_eq%5D=&q%5Brequest_result_cont%5D=&q%5Brequest_result_cont%5D=&q%5Bsearch_query%5D=)
#### Base model used
Possible base models
: OpenEHR: FunctionalAbility ; FHIR: R4 Observation


Selected base model
: OpenEHR: FunctionalAbility

OpenEHR archetype FunctionalAbility is defined as 'An assessment of an individual’s ability to perform an activity safely and consistently without human assistance.' FHIR Observation is defined as 'Measurements and simple assertions made about a patient, device or other subject'. The openEHR archetype is more closely aligned with the intended concept and was therefore selected as the base model.