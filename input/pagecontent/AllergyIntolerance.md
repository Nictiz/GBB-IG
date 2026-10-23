{% include_relative AllergyIntolerance-Concept.md %}

### Bekende problemen
* [(GBB AllergieIntolerantie) Ontbrekende referentie naar RelatedPerson](http://nictiz.atlassian.net/browse/GBB-74)
* [(GBB AllergieIntolerantie en SBB Reactie) Ontbrekende additional bindings van FHIR EU Core AllergyIntolerance](http://nictiz.atlassian.net/browse/GBB-75)
* [(GBB AllergieIntolerantie) Ontbrekende additional binding uit EU core bij AllergyIntolerance.language](http://nictiz.atlassian.net/browse/GBB-77)
* [Verwijderen informatiestandaarden bij gebruiksscenario's van concept AllergieIntolerantie](http://nictiz.atlassian.net/browse/GBB-78)
* [Toevoegen van EU/NL traceability op alle onderdelen van de GBB's](http://nictiz.atlassian.net/browse/GBB-90)
* [Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4](http://nictiz.atlassian.net/browse/GBB-103)
* [GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten](http://nictiz.atlassian.net/browse/GBB-118)
* [Obligations toevoegen](http://nictiz.atlassian.net/browse/GBB-130)
* [Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels](http://nictiz.atlassian.net/browse/GBB-144)

### Release notes version 1.0.0-alpha.2

* [GBB-14 - Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure](http://nictiz.atlassian.net/browse/GBB-14)
* [GBB-30 - De waardelijsten van zib uit FHIR-profiel voor GBB-AllergieIntolerantie, die Reactie bevat, vervangen door waardelijsten van de GBB.](http://nictiz.atlassian.net/browse/GBB-30)
* [GBB-69 - Alle waardelijsten met een afhankelijkheid naar zib2020 zijn losgekoppeld en zonder deze afhankelijkheid toegevoegd aan de data-elementen VeroorzakendeStof, Categorie, ActieveInactieveStatus, VerificatieStatus en MateVanKritiekZijn in het afspraken model Data-type van element Bron is gewijzigd van gecodeerd element naar folder met referenties naar Patient, Zorgverlener, ZorgverlenerRol conform FHIR EU Core profiel](http://nictiz.atlassian.net/browse/GBB-69)

### Splitsing van SBB Reactie af van GBB AllergieIntolerantie
Gekozen basismodel voor GBB AllergieIntolerantie, openEHR archetype Adverse Reaction Risk, bevat een herbruikbaar onderliggend openEHR archetype, Adverse Reaction Event, dat niet zelfstandig kan worden toegepast. Dit archetype leidt tot eigen informatiebehoefte en modeldefinitie. Er is daarom gekozen om Reactie af te splitsen van AllergieIntolerantie. Voor bouwblokken zoals Reactie, die geen zelfstandige toepassing in informatiestandaarden hebben, wordt de term subbouwblok gebruikt.
In geval van Reactie is er geen behoefte van een eigen implementatieartefact, omdat FHIR Resource type AllergyIntolerance beide concepten in één artefact kan weerspiegelen en omdat de subbouwblok Rectie alleen gebruikt mag worden in combinatie met de GBB AllergieIntolerantie.  

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