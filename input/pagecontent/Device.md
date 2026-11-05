
{% include_relative Device-Concept.md %}

### Bekende problemen

* [GBB-149](https://bits.nictiz.nl/browse/GBB-149): Terminologie voor Device.type nog niet vastgesteld. Afstemming van SNOMED CT, EMDN en de Europese MVC-waardelijst is nog nodig.
* [GBB-150](https://bits.nictiz.nl/browse/GBB-150): Kardinaliteit van Type wijkt af tussen EHDSDevice (0..*) en FHIR R4 Device.type (0..1). Meerdere typen zijn momenteel niet ondersteund.
* [GBB-157](https://bits.nictiz.nl/browse/GBB-157): UDI-obligation uit EHDS is binnen FHIR R4 alleen toegepast op Device.udiCarrier.deviceIdentifier. Overige UDI-elementen hebben geen SHALL:populate-verplichting.

### Release notes versie 1.0.0-alpha.2

* [GBB-5](https://bits.nictiz.nl/browse/GBB-5): Ongeldige targetProfile-verwijzingen verwijderd conform FHIR R4. Mapping naar DEVICEUSE-11.01 behouden voor traceerbaarheid; beperking rondom Procedure gedocumenteerd.
* [GBB-8](https://bits.nictiz.nl/browse/GBB-8):
  Naamgeving aangepast in art-decor om alles in lijn te brengen met het basis model.

  Device
  EN: Device
  NL MedischHulpmiddel

  DeviceUse
  EN: DeviceUseStatement
  NL MedischHulpmiddelGebruik
* [GBB-9](https://bits.nictiz.nl/browse/GBB-9): DeviceUseStatement.timing[x] beperkt tot datatype Period, zodat begin- en einddatum correct kunnen worden vastgelegd. Bestaande mapping en obligations behouden.
* [GBB-12](https://bits.nictiz.nl/browse/GBB-12): Transactiebouwblokken toegevoegd in de transactie.
* [GBB-21](https://bits.nictiz.nl/browse/GBB-21): Engelse vertaling meegegeven aan de Generieke bouwblok.
* [GBB-22](https://bits.nictiz.nl/browse/GBB-22): De transacties voor Device en DeviceUse zijn nu “LogischModelDevice” en “LogischModelDeviceUse”. Deze zijn nu ook vertaald in het engels. 
* [GBB-33](https://bits.nictiz.nl/browse/GBB-33): Verouderde aanvullende zib2020-ValueSet-binding verwijderd uit Device.type. De standaard FHIR R4-binding blijft behouden.