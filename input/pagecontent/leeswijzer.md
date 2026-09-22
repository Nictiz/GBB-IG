### Informatiebronnen
Deze versie van het generieke bouwblok dekt informatiebehoefte uit de volgende bronnen:
* EHDS logisch informatiemodel EHDSDeviceUse versie 1.0.0 release
* FHIR R4 resource DeviceUseStatement, waaronder de verplichte elementen status, subject en device 
* Verplichte elementen uit openEHR archetype EVALUATION.device_summary versie 0.0.1 alpha
* zib MedischHulpmiddel uit de publicaties 2017, 2020, 2024 en de prepublicatie 2026
* Informatiestandaard Basisgegevensset Zorg Medisch Specialistische Zorg (BgZ-MSZ) versie 2.0.2 

### Onderbouwing basismodel
FHIR R4 DeviceUseStatement is voorlopig gekozen als basismodel. Zowel deze FHIR-resource als het beschikbare openEHR-archetype heeft een lage volwassenheid. Voor onderdelen zoals auteurschap, zorgverlener en zorgaanbieder zijn extensies of verwijzingen naar andere resources nodig.

### Overige relevante informatie over versie 1.0.0-alpha.1
* DeviceUse.timing wordt in FHIR R4 beperkt tot Period. De start- en einddatum uit de Nederlandse zib kunnen daarmee binnen één periode worden uitgewisseld; beide onderdelen blijven afzonderlijk optioneel.
* Expliciet het kunnen uitwisselen dat een device 'geen hulpmiddel' is, wordt niet meegenomen. Expliciete afwezigheid hoort niet als producttype in DeviceUse te worden vastgelegd.
* De reden voor gebruik van een medisch hulpmiddel is nog niet volledig implementeerbaar zoals het EHDS-model deze beschrijft. De relatie met een diagnose, verrichting of aanvraag en het gebruik van reason, derivedFrom en basedOn moeten verder worden uitgewerkt.
* De registrerende bron is iets anders dan de zorgverlener die een hulpmiddel voorschrijft, verstrekt, implanteert of verwijdert. De beschrijvingen en mappings moeten dit onderscheid expliciet maken; voor de uitvoerende zorgverlener wordt aansluiting op EHDSProcedure onderzocht.
* Informatiebehoefte van andere informatiestandaarden zullen in de toekomst worden geanalyseerd. 