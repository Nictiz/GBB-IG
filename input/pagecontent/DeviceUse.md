
### Bekende problemen

* [GBB-151](https://nictiz.atlassian.net/browse/GBB-151): Gebruikte taal (DEVICEUSE-08) ontbreekt in het basismodel en ART-DECOR. De bestaande FHIR-mapping naar DeviceUseStatement.language moet worden gecontroleerd.
* [GBB-152](https://nictiz.atlassian.net/browse/GBB-152): Ook de keuze tussen waardelijsten voor Taalgebruik (waardelijsten BCP 47 en ISO 639) moet worden afgestemd.
* [GBB-10](https://nictiz.atlassian.net/browse/GBB-10): Anatomische locatie wordt momenteel via bodySite vastgelegd. De gewenste verwijzing naar GBB BodyStructure is nog niet ingericht.
* [GBB-153](https://nictiz.atlassian.net/browse/GBB-153): Auteur (DEVICEUSE-5) ontbreekt in het basismodel en ART-DECOR. Onderzocht moet worden of generieke metadata of Provenance hiervoor gebruikt kan worden.
* [GBB-154](https://nictiz.atlassian.net/browse/GBB-154): Zorgverlener (DEVICEUSE-13) ontbreekt in het basismodel en ART-DECOR.
* [GBB-155](https://nictiz.atlassian.net/browse/GBB-155): Zorgaanbiederalslocatie (DEVICEUSE-14) ontbreekt in het basismodel en ART-DECOR.
* [GBB-156](https://nictiz.atlassian.net/browse/GBB-156): RelatedPerson is als referentietype ondersteund in FHIR R4, maar de bijbehorende modellering in ART-DECOR is nog niet afgerond.
* [GBB-11](https://nictiz.atlassian.net/browse/GBB-11): Motivatievangebruik is niet volledig uitgewerkt. Verwijzingen naar andere GBB's ontbreken nog en een Procedure-referentie wordt niet ondersteund via DeviceUseStatement.reasonReference in FHIR R4.
* [GBB-9](https://nictiz.atlassian.net/browse/GBB-9): Timing (DEVICEUSE-09) wordt momenteel niet volledig ondersteund. De beperking tot Period wordt afzonderlijk verwerkt in GBB-9.