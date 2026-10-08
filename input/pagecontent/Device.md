{% include_relative Device-Concept.md %}

### UDI

FHIR R4 ondersteunt meerdere UDI's via `Device.udiCarrier`.

Binnen de huidige uitwerking geldt de verplichting voor uitwisseling op `Device.udiCarrier.deviceIdentifier`. De overige onderdelen van `udiCarrier` worden alleen gebruikt wanneer deze informatie beschikbaar is.