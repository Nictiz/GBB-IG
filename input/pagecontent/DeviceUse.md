
### Bekende problemen

* [GBB-151](https://bits.nictiz.nl/browse/GBB-151): Gebruikte taal (DEVICEUSE-08) ontbreekt in het basismodel en ART-DECOR. De bestaande FHIR-mapping naar DeviceUseStatement.language moet worden gecontroleerd.
* [GBB-152](https://bits.nictiz.nl/browse/GBB-152): Ook de keuze tussen waardelijsten voor Taalgebruik (waardelijsten BCP 47 en ISO 639) moet worden afgestemd.
* [GBB-10](https://bits.nictiz.nl/browse/GBB-10): Anatomische locatie wordt momenteel via bodySite vastgelegd. De gewenste verwijzing naar GBB BodyStructure is nog niet ingericht.
* [GBB-153](https://bits.nictiz.nl/browse/GBB-153): Auteur (DEVICEUSE-5) ontbreekt in het basismodel en ART-DECOR. Onderzocht moet worden of generieke metadata of Provenance hiervoor gebruikt kan worden.
* [GBB-154](https://bits.nictiz.nl/browse/GBB-154): Zorgverlener (DEVICEUSE-13) ontbreekt in het basismodel en ART-DECOR.
* [GBB-155](https://bits.nictiz.nl/browse/GBB-155): Zorgaanbiederalslocatie (DEVICEUSE-14) ontbreekt in het basismodel en ART-DECOR.
* [GBB-156](https://bits.nictiz.nl/browse/GBB-156): RelatedPerson is als referentietype ondersteund in FHIR R4, maar de bijbehorende modellering in ART-DECOR is nog niet afgerond.
* [GBB-11](https://bits.nictiz.nl/browse/GBB-11): Motivatievangebruik is niet volledig uitgewerkt. Verwijzingen naar andere GBB's ontbreken nog en een Procedure-referentie wordt niet ondersteund via DeviceUseStatement.reasonReference in FHIR R4.
* [GBB-9](https://bits.nictiz.nl/browse/GBB-9): Timing (DEVICEUSE-09) wordt momenteel niet volledig ondersteund. De beperking tot Period wordt afzonderlijk verwerkt in GBB-9.

### Release notes versie 1.0.0-alpha.2

* [GBB-9](https://bits.nictiz.nl/browse/GBB-9): DeviceUseStatement.timing[x] beperkt tot datatype Period, zodat begin- en einddatum correct kunnen worden vastgelegd. Bestaande mapping en obligations behouden.
* [GBB-12](https://bits.nictiz.nl/browse/GBB-12): Transactiebouwblokken toegevoegd in de transactie.
* [GBB-22](https://bits.nictiz.nl/browse/GBB-22): De transacties voor Device en DeviceUse zijn nu “LogischModelDevice” en “LogischModelDeviceUse”. Deze zijn nu ook vertaald in het engels.
