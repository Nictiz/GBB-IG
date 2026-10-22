
{% include_relative DeviceUse-Concept.md %}

### Overige relevante informatie over versie 1.0.0-alpha.1

* DeviceUse.timing wordt in FHIR R4 beperkt tot Period. De start- en einddatum uit de Nederlandse zib kunnen daarmee binnen één periode worden uitgewisseld; beide onderdelen blijven afzonderlijk optioneel.
* Expliciet het kunnen uitwisselen dat een device 'geen hulpmiddel' is, wordt niet meegenomen. Expliciete afwezigheid hoort niet als producttype in DeviceUse te worden vastgelegd.
* De reden voor gebruik van een medisch hulpmiddel is nog niet volledig implementeerbaar zoals het EHDS-model deze beschrijft. De relatie met een diagnose, verrichting of aanvraag en het gebruik van reason, derivedFrom en basedOn moeten verder worden uitgewerkt.
* De registrerende bron is iets anders dan de zorgverlener die een hulpmiddel voorschrijft, verstrekt, implanteert of verwijdert. De beschrijvingen en mappings moeten dit onderscheid expliciet maken; voor de uitvoerende zorgverlener wordt aansluiting op EHDSProcedure onderzocht.
* Informatiebehoefte van andere informatiestandaarden zullen in de toekomst worden geanalyseerd.

### Bekende beperkingen en openstaande punten

#### Gebruikte taal (DEVICEUSE-08)

De informatiebehoefte 'Gebruikte taal' is opgenomen in het EHDS-logisch informatiemodel. In het FHIR-profiel is een mapping naar `DeviceUseStatement.language` opgenomen. In het FHIR-basismodel en ART-DECOR is deze informatiebehoefte nog niet volledig uitgewerkt.

Het FHIR-element `language` beschrijft de taal van de resource-inhoud. Er moet nog worden vastgesteld of dit semantisch aansluit op de informatiebehoefte 'Gebruikte taal' uit het EHDS-model.

Voor de codering van taal wordt in FHIR gebruikgemaakt van BCP 47. In de Europese uitwerking worden ook ISO 639-1 en ISO 639-2 genoemd. De definitieve keuze en afstemming van de waardelijst moeten nog plaatsvinden.

#### Anatomische locatie

De anatomische locatie wordt momenteel vastgelegd via `DeviceUseStatement.bodySite`, waarbij gecodeerde anatomische locaties kunnen worden gebruikt, waaronder SNOMED CT-codes.

Binnen het EHDS-model is deze informatie gerelateerd aan `EHDSBodyStructure.Location`. De behoefte bestaat om hiervoor in de toekomst een afzonderlijke GBB BodyStructure te gebruiken.

Deze GBB is nog niet ingericht in ART-DECOR. Totdat deze beschikbaar is en de verwijzing is uitgewerkt, blijft de huidige modellering via `bodySite` van toepassing.

#### Auteur (DEVICEUSE-5)

De informatiebehoefte 'Auteur' is nog niet opgenomen in de mapping van het FHIR-basismodel en is ook niet ingericht in ART-DECOR.

Deze informatie is relevant wanneer herleidbaar moet zijn wie de registratie over het gebruik van een medisch hulpmiddel heeft opgesteld.

Er moet nog worden vastgesteld of deze informatiebehoefte noodzakelijk is binnen DeviceUse of dat deze via generieke metadata of provenance kan worden ondersteund.

#### Zorgverlener (DEVICEUSE-13)

Voor de informatiebehoefte 'Zorgverlener' ontbreekt momenteel een mapping in het basismodel. Deze is ook nog niet ingericht in ART-DECOR.

De verdere uitwerking moet rekening houden met het onderscheid tussen de registrerende bron en de zorgverlener die betrokken is bij het gebruik van het hulpmiddel.

#### Zorgaanbieder als locatie (DEVICEUSE-14)

De informatiebehoefte 'Zorgaanbieder als locatie' is nog niet opgenomen in de mapping van het basismodel en is ook niet ingericht in ART-DECOR.

De relatie tussen het gebruik van het hulpmiddel en de betreffende zorgaanbieder of locatie moet nog worden uitgewerkt.

#### RelatedPerson

Binnen FHIR R4 kan `DeviceUseStatement.source` verwijzen naar onder andere `RelatedPerson`.

De bijbehorende modellering en verwijzing naar RelatedPerson moeten in ART-DECOR nog verder worden ingericht.

#### Motivatie van gebruik

In ART-DECOR is voor de motivatie van gebruik momenteel een verwijzing naar `Condition` opgenomen.

De informatiebehoefte voorziet ook in relaties met andere GBB's. Deze zijn nog niet allemaal beschikbaar in ART-DECOR.

De overige verwijzingen worden toegevoegd wanneer de betreffende GBB's zijn ingericht. Tot die tijd is de modellering van de motivatie van gebruik nog niet volledig.

#### Timing (DEVICEUSE-09)


* Voor de Nederlandse uitwerking is het uitgangspunt om de gebruiksperiode via `Period` vast te leggen. FHIR R4 ondersteunt voor `DeviceUseStatement.timing[x]` ook andere datatypen. De technische beperking tot `Period` wordt afzonderlijk verwerkt in GBB-9. De begin- en einddatum blijven afzonderlijk optioneel.


De EHDS-informatiebehoefte omvat ook timinginformatie die niet volledig met deze periode wordt afgedekt.

Een verdere uitwerking van het concept `Period` als subbouwblok is voorzien. Totdat hierover aanvullende afspraken zijn vastgesteld, blijft de huidige modellering van toepassing.