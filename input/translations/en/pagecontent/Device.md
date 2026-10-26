
{% include_relative Device-Concept.md %}

### Known issues

* [GBB-149](https://nictiz.atlassian.net/browse/GBB-149): Terminology for Device.type has not yet been determined. Alignment of SNOMED CT, EMDN and the European MVC value set is still required.
* [GBB-150](https://nictiz.atlassian.net/browse/GBB-150): The cardinality of Type differs between EHDSDevice (0..*) and FHIR R4 Device.type (0..1). Multiple types are currently not supported.
* [GBB-157](https://nictiz.atlassian.net/browse/GBB-157): The EHDS UDI obligation has only been applied to Device.udiCarrier.deviceIdentifier in FHIR R4. The other UDI elements do not have a SHALL:populate obligation.

### Release notes version 1.0.0-alpha.2

* [GBB-5](http://bits.nictiz.nl/browse/GBB-5): 
* [GBB-8](http://bits.nictiz.nl/browse/GBB-8):

  Device
  EN: Device
  NL MedischHulpmiddel

  DeviceUse
  EN: DeviceUseStatement
  NL MedischHulpmiddelGebruik
* [GBB-9](http://bits.nictiz.nl/browse/GBB-9): DeviceUseStatement.timing[x] is restricted to the Period data type, so that the start and end dates can be recorded correctly. Existing mappings and obligations are retained.
* [GBB-12](http://bits.nictiz.nl/browse/GBB-12): TBB inserted in the transaction.
* [GBB-21](http://bits.nictiz.nl/browse/GBB-21): English translation provided for the Generic Building Block.
* [GBB-22](http://bits.nictiz.nl/browse/GBB-22): The transactions for ‘Device’ and ‘DeviceUse’ are now ‘LogicalModelDevice’ and ‘LogicalModelDeviceUse’. These have now also been translated into English. 
* [GBB-33](http://bits.nictiz.nl/browse/GBB-33): The obsolete supplementary zib2020-ValueSet binding has been removed from Device.type. The standard FHIR R4 binding remains in place.