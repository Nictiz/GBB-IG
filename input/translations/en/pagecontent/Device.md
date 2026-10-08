{% include_relative Device-Concept.md %}

### UDI

FHIR R4 supports multiple UDI's via `Device.udiCarrier`.

In the current implementation, `Device.udiCarrier.deviceIdentifier` is used for exchange. The other components of `udiCarrier` are used only when this information is available.