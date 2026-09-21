### Splitsing van SBB Reactie af van GBB AllergieIntolerantie 
Gekozen basismodel voor GBB AllergieIntolerantie, openEHR archetype Adverse Reaction Risk, bevat een herbruikbaar onderliggend openEHR archetype, Adverse Reaction Event, dat niet zelfstandig kan worden toegepast. Dit archetype leidt tot eigen informatiebehoefte en modeldefinitie. Er is daarom gekozen om Reactie af te splitsen van AllergieIntolerantie. Voor bouwblokken zoals Reactie, die geen zelfstandige toepassing in informatiestandaarden hebben, wordt de term subbouwblok gebruikt.
In geval van Reactie is er geen behoefte van een eigen implementatieartefact, omdat FHIR Resource type AllergyIntolerance beide concepten in één artefact kan weerspiegelen en omdat de subbouwblok Rectie alleen gebruikt mag worden in combinatie met de GBB AllergieIntolerantie.  

### Informatiebronnen
Deze versies van GBB AllergieIntolerantie en SBB Reactie dekken informatiebehoefte uit de volgende bronnen:  
* Logisch informatie model EHDSAllergyIntolerance versie 1.0.0,   
* Verplichte elementen uit FHIR R4 AllergyIntolerance 
* Verplichte elementen uit openEHR archetype Adverse Reaction Risk versie 2.0.2 en openEHR archetype Adverse Reaction Event versie 1.0.2 
* Zib AllergieIntolerantie uit publicatie 2017 
* Zib AllergieIntolerantie uit publicatie 2020 
* Informatiestandaard BgZ-MSZ versie 2.0.2 
* Informatiestandaard eOverdracht versie 4.0.17 
* Informatiestandaard Eerstelijnszorg
* Informatiestandaard Acute Zorg versie 2.2.0 inclusief usecase Spoedsamenvatting 
* Informatiestandaard Ketenzorg versie 3.0.2 
* Informatiestandaard Huisartswaarneeming versie 6.10.1.3 
* Informatiestandaard Geboortezorg versie 3.2 
* Informatiestandaard Jeugdgezondheidszorg versie 8.0.1 
* Informatiestandaard Vaccinatie-Immunisatie versie 2.0.4 

### Additional bindings
Op dit moment zijn er in ART-DECOR geen aanvullende associaties (additional bindings) aan het afsprakenmodel toegevoegd, ondanks de specificaties in het Excel-bestand. Voor sommige elementen komt dit doordat de main binding nog niet kan worden gespecificeerd, voor andere doordat het niet duidelijk is welke waardelijst als aanvullende associatie moet worden gebruikt. Dit heeft gevolgen voor de volgende gegevenselementen in het afsprakenmodel:
* AllergieIntolerantie.VeroorzakendeStof
* Reactie.SpecifiekeStof
* Reactie.ManifestatieVanReactie

### Discrepanties tussen het EHDS logische informatie model (LIM) en het FHIR EU Core profiel
Er zijn verschillen tussen het logische model van EHDS en het FHIR-profiel, waardoor het EHDS model op dit moment nog niet volledig kan worden toegepast. Dit heeft gevolgen voor de volgende gegevenselementen in het FHIR-profiel
* AllergyIntolerance.recorder (EHDS LIM verwacht dat header.author een herhalend element zal zijn. Dit is onrealiseerbaar op dit moment vanwege beperkte kardinaliteit van recorder in het basis resource van AllergyIntolerance; [link naar een Jira issue](https://jira.hl7.org/browse/FHIR-57787))
* AllergyIntolerance.reaction.manifestation (EHDS LIM verwacht dat manifestation een optioneel moment is; dat is in strijd met de FHIR resource, waar manifestation standaard verplicht is; [link naar een Jira issue](https://jira.hl7.org/browse/FHIR-57788))

### Obligations aan het registrerende systeem
In het afsprakenmodel op ART-DECOR staan obligations aangegeven voor elke gegevenselement aan drie verschillende actoren: registrerend systeem, ontsluitend systeem en verwerkend systeem. De obligations aan de kant van het ontsluitende en verwerkende systeem zijn meegenomen naar het FHIR-profiel met behulp van de FHIR-extensie: [Obligation Extension](http://hl7.org/fhir/StructureDefinition/obligation). Gegevenselementen met een minimale kardinaliteit van 1 en ReactieDatumTijd hebben een SHALL:able-to-populate obligation aan het registrerend systeem. Die obligations zijn niet meegenomen in FHIR, omdat FHIR bedoeld is voor uitwisseling en niet opslaan van de gegevens. 