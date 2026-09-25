### Informatiebronnen
Deze versie van dit generieke bouwblok (GBB) dekt informatiebehoefte uit de volgende bronnen:
* EHDS logisch informatiemodel EHDSDevice versie 1.0.0 release
* Verplichte elementen uit openEHR-EHR-CLUSTER.device.v1
* zib MedischHulpmiddel uit de publicaties 2017, 2020, 2024 en de prepublicatie 2026 
* Informatiestandaard Basisgegevensset Zorg Medisch Specialistische Zorg (BgZ-MSZ) versie 2.0.2 
FHIR R4 resource Device bevat geen verplichte elementen. 

### Onderbouwing basismodel
FHIR R4 Device is voorlopig gekozen als basismodel. FHIR voldoet beter aan de informatie-requirements, aangezien er slechts bij 3 informatie-requirements (betreffende 1 element in het model) afwijkingen zijn, terwijl openEHR bij 7 informatie-requirements (betreffende 3 elementen in het model) afwijkt.

### Obligations aan het registrerende systeem
In het afsprakenmodel op ART-DECOR staan obligations aangegeven voor elke gegevenselement aan drie verschillende actoren: registrerend systeem, ontsluitend systeem en verwerkend systeem. De obligations aan de kant van het ontsluitende en verwerkende systeem zijn meegenomen naar het FHIR-profiel met behulp van de FHIR-extensie: [Obligation Extension](http://hl7.org/fhir/StructureDefinition/obligation). Gegevenselementen met een minimale kardinaliteit van 1 hebben een SHALL:able-to-populate obligation aan het registrerend systeem. Die obligations zijn niet meegenomen in FHIR, omdat FHIR bedoeld is voor uitwisseling en niet opslaan van de gegevens. 