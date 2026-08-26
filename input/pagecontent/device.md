{% include_relative Device-Concept.md %}

## FHIR-implementatie

De generieke bouwsteen Device wordt in FHIR R4 geïmplementeerd met het profiel [nl-core-Device](StructureDefinition-nl-core-Device.html).

Het profiel bevat de elementen die nodig zijn om te voldoen aan de informatiebehoefte van de generieke bouwsteen Device. De relatie tussen de informatiebehoefte en de FHIR-elementen is opgenomen als mapping in het profiel.

### Obligations

Voor elementen die onderdeel zijn van de informatiebehoefte zijn obligations opgenomen voor het ontsluitende en verwerkende systeem.

De obligations geven aan welk gedrag van een systeem wordt verwacht bij het beschikbaar stellen en verwerken van gegevens. Een obligation verandert op zichzelf de kardinaliteit van een FHIR-element niet.

### UDI

FHIR R4 ondersteunt meerdere UDI's via `Device.udiCarrier`.

Binnen de huidige uitwerking geldt de verplichting voor uitwisseling op `Device.udiCarrier.deviceIdentifier`. De overige onderdelen van `udiCarrier` worden alleen gebruikt wanneer deze informatie beschikbaar is.

### Naam van het device

`Device.deviceName` bevat de naam van het device.

Voor ieder opgenomen `deviceName` zijn zowel `Device.deviceName.name` als `Device.deviceName.type` aanwezig zoals voorgeschreven door FHIR R4.

### Versie

De ontwerp- of softwareversie van een device wordt vastgelegd in `Device.version.value`.

FHIR R4 ondersteunt meerdere `Device.version`-instanties. Binnen iedere instantie is `version.value` verplicht.

### Type

Het type device wordt vastgelegd in `Device.type`.

FHIR R4 ondersteunt voor `Device.type` maximaal één `CodeableConcept`. Dit wijkt af van modellen waarin meerdere device-types kunnen worden opgenomen.

Voor de codering van het type worden onder andere SNOMED CT en EMDN genoemd. De verdere afstemming met bestaande Nederlandse producttypelijsten is nog onderwerp van uitwerking.

### Niet-geprofileerde elementen

FHIR-elementen waarvoor binnen de huidige informatiebehoefte geen aanvullende implementatieafspraken nodig zijn, worden niet verder beperkt in het profiel. De standaard FHIR R4-definitie blijft voor deze elementen van toepassing.