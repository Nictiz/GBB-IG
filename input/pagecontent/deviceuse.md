{% include_relative DeviceUse-Concept.md %}

## FHIR-implementatie

De generieke bouwsteen DeviceUse wordt in FHIR R4 geïmplementeerd met het profiel [nl-core-DeviceUse](StructureDefinition-nl-core-DeviceUse.html) op de resource `DeviceUseStatement`.

Het profiel bevat de elementen die nodig zijn om te voldoen aan de informatiebehoefte van de generieke bouwsteen DeviceUse. De relatie tussen de informatiebehoefte en de FHIR-elementen is opgenomen als mapping in het profiel.

### Obligations

Voor elementen waarvoor in de uitwerking implementatieverplichtingen zijn vastgesteld, zijn obligations opgenomen voor het ontsluitende en verwerkende systeem.

Een obligation geeft aan welk gedrag van een systeem wordt verwacht bij het beschikbaar stellen en verwerken van gegevens. Een obligation verandert op zichzelf de kardinaliteit van een FHIR-element niet.

### Patiënt en device

`DeviceUseStatement.subject` identificeert de patiënt waarop het gebruik van het hulpmiddel betrekking heeft.

Het gebruikte hulpmiddel wordt vastgelegd in `DeviceUseStatement.device`.

### Gebruiksperiode

De periode of het moment waarop het hulpmiddel wordt gebruikt wordt vastgelegd in `DeviceUseStatement.timing[x]`.

Het DeviceUse-profiel beperkt de in FHIR R4 beschikbare datatypen voor `timing[x]` niet verder.

### Reden voor gebruik

De reden voor het gebruik van het hulpmiddel kan worden vastgelegd met `DeviceUseStatement.reasonCode` en `DeviceUseStatement.reasonReference`.

Voor `reasonCode` wordt in deze versie geen aanvullende ValueSet-binding opgelegd.

### Anatomische locatie

De anatomische locatie waarop het gebruik betrekking heeft kan worden vastgelegd in `DeviceUseStatement.bodySite`.

## Terminologie

Het profiel behoudt de standaard FHIR R4-bindings, tenzij aanvullende afspraken expliciet in de informatiebehoefte zijn vastgesteld.

In deze versie worden geen aanvullende DeviceUse-specifieke ValueSets geïntroduceerd.

## Niet-geprofileerde elementen

FHIR-elementen waarvoor binnen de huidige informatiebehoefte geen aanvullende implementatieafspraken nodig zijn, worden niet verder beperkt in het profiel. De standaard FHIR R4-definitie blijft voor deze elementen van toepassing.