
{% include_relative Device-Concept.md %}

### Bekende problemen

* [GBB-149](https://nictiz.atlassian.net/browse/GBB-149): Terminologie voor Device.type nog niet vastgesteld. Afstemming van SNOMED CT, EMDN en de Europese MVC-waardelijst is nog nodig.
* [GBB-150](https://nictiz.atlassian.net/browse/GBB-150): Kardinaliteit van Type wijkt af tussen EHDSDevice (0..*) en FHIR R4 Device.type (0..1). Meerdere typen zijn momenteel niet ondersteund.
* [GBB-157](https://nictiz.atlassian.net/browse/GBB-157): UDI-obligation uit EHDS is binnen FHIR R4 alleen toegepast op Device.udiCarrier.deviceIdentifier. Overige UDI-elementen hebben geen SHALL:populate-verplichting.