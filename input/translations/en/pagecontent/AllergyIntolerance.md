{% include_relative AllergyIntolerance-Concept.md %}

### Known issues

* [GBB-74](https://bits.nictiz.nl/browse/GBB-74): (GBB AllergyIntolerance) Missing reference to RelatedPerson
* [GBB-75](https://bits.nictiz.nl/browse/GBB-75): (GBB AllergyIntolerance and SBB Reaction) Missing additional bindings from FHIR EU Core AllergyIntolerance
* [GBB-77](https://bits.nictiz.nl/browse/GBB-77): (GBB AllergyIntolerance) Missing additional binding from EU Core for AllergyIntolerance.language
* [GBB-78](https://bits.nictiz.nl/browse/GBB-78): Remove information standards from the usage scenarios for the AllergyIntolerance concept
* [GBB-90](https://bits.nictiz.nl/browse/GBB-90): Add EU/NL traceability to all components of the GBBs
* [GBB-103](https://bits.nictiz.nl/browse/GBB-103): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-118](https://bits.nictiz.nl/browse/GBB-118): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-130](https://bits.nictiz.nl/browse/GBB-130): Add obligations
* [GBB-144](https://bits.nictiz.nl/browse/GBB-144): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

### Release notes version 1.0.0-alpha.2

* [GBB-13](https://bits.nictiz.nl/browse/GBB-13): 
* [GBB-14](https://bits.nictiz.nl/browse/GBB-14):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure
* [GBB-30](https://bits.nictiz.nl/browse/GBB-30): Replaced value sets from the zib in the FHIR profile for GBB-AllergyIntolerance, which contains Reaction, with value sets from GBB.
* [GBB-69](https://bits.nictiz.nl/browse/GBB-69):

  All value lists with a dependency on zib2020 have been unlinked and added, without this dependency, to the data elements CausativeAgent, Category, ActiveInactiveStatus, VerificationStatus, and Criticality in the logical model.
  
  The data type of the element Source has been changed from a coded element to a folder containing references to Patient, Practitioner and Practicioner Role, in accordance with the FHIR EU Core profile.

### Splitting SBB Reactie and GBB AllergieIntolerantie
The base model selected for GBB AllergyIntolerance, the openEHR archetype Adverse Reaction Risk, contains a reusable underlying openEHR archetype, Adverse Reaction Event, which cannot be used independently. This archetype leads to its own informatie requirements and model definition. It was therefore decided to separate Reaction from AllergyIntolerance. For building blocks such as Reaction, which have no independent application in information standards, the term "sub-building block" is used.

In the case of Reaction, there is no need for a separate implementation artefact, because the FHIR Resource type AllergyIntolerance can represent both concepts in a single artifact, and because the Reaction sub-building block may only be used in combination with GBB AllergyIntolerance (for the time being).

### Additional bindings
At this moment in time, no additional bindings have been added to the functional model in ART-DECOR, despite the specifications in the Excel file. For some elements, this is because the main binding cannot yet be specified; for other, it is because it is unclear which value set should be used as the additional binding. This affects the following data elements in the model:
* AllergyIntolerance.Substance
* Reaction.SpecificSubstance
* Reaction.Manifestation

### Discrepances between the EHDS logical information model (LIM) and the FHIR EU Core profile
There are various differences between the EHDS logical model and the FHIR profile, which means the EHDS model cannot yet be fully implemented. This affects the following data elements in the FHIR profile:
* AllergyIntolerance.recorder (EHDS LIM expects header.author to be a repeating element. This is currently unfeasible due to the cardinality of recorder in the AllergyIntolerance base resource; [link to a Jira issue](https://jira.hl7.org/browse/FHIR-57787))
* AllergyIntolerance.reaction.manifestation (EHDS LIM expects manifestation to be an optional element; this conflicts with the FHIR resource, where manifestation is required by default; [link to a Jira issue](https://jira.hl7.org/browse/FHIR-57788))

### Obligations on the registering system
In the model in ART-DECOR, obligations are specified for each data element with respect to three different actors: the registering system, the exchanging system and the processing system. The obligations on the exchanging and processing systems have been incorporated into the FHIR profile using the FHIR extension: [Obligation Extension](http://hl7.org/fhir/StructureDefinition/obligation). Data elements with a minimum cardinality of 1 and Onset of reaction have a SHALL:able-to-populate obligation for the registering system. These obligations have not been included in FHIR, as FHIR is intended for data exchange and not for data storage.