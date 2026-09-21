### Splitting SBB Reactie and GBB AllergieIntolerantie
The base model selected for GBB AllergyIntolerance, the openEHR archetype Adverse Reaction Risk, contains a reusable underlying openEHR archetype, Adverse Reaction Event, which cannot be used independently. This archetype leads to its own informatie requirements and model definition. It was therefore decided to separate Reaction from AllergyIntolerance. For building blocks such as Reaction, which have no independent application in information standards, the term "sub-building block" is used.

In the case of Reaction, there is no need for a separate implementation artefact, because the FHIR Resource type AllergyIntolerance can represent both concepts in a single artifact, and because the Reaction sub-building block may only be used in combination with GBB AllergyIntolerance (for the time being).

### Sources of information requirements
These versions of GBB AllergyIntolerance and SBB Reaction cover information requirements from the following sources:
* Logical information model EHDSAllergyIntolerance version 1.0.0,   
* Mandatory elements from FHIR R4 AllergyIntolerance 
* Mandatory elements from openEHR archetype Adverse Reaction Risk version 2.0.2 and openEHR archetype Adverse Reaction Event version 1.0.2 
* 2017 publication of Zib AllergyIntolerance
* 2020 publication of Zib AllergyIntolerance
* Information standard BgZ-MSZ version 2.0.2 
* Information standard eOverdracht version 4.0.17 
* Information standard Eerstelijnszorg
* Information standard Acute Zorg version 2.2.0 inclusive usecase Spoedsamenvatting 
* Information standard Ketenzorg version 3.0.2 
* Information standard Huisartswaarneeming version 6.10.1.3 
* Information standard Geboortezorg version 3.2 
* Information standard Jeugdgezondheidszorg version 8.0.1 
* Information standard Vaccinatie-Immunisatie version 2.0.4 

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