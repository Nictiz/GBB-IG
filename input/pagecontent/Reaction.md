{% include_relative Reaction-Concept.md %}

### Bekende problemen

* [GBB-76](https://nictiz.atlassian.net/browse/GBB-76): Ontbrekend aparte weergave voor FHIR-profiel van SBB Reactie
* [GBB-91](https://nictiz.atlassian.net/browse/GBB-91): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-105](https://nictiz.atlassian.net/browse/GBB-105): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-116](https://nictiz.atlassian.net/browse/GBB-116): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-132](https://nictiz.atlassian.net/browse/GBB-132): Obligations toevoegen
* [GBB-146](https://nictiz.atlassian.net/browse/GBB-146): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

### Release notes versie 1.0.0-alpha.2

* [GBB-29](http://bits.nictiz.nl/browse/GBB-29):

  Wijzigingen aan *SpecifiekeStof*:

  * value set eHDSIAllergenNoDrug toegevoegd als main binding en binding strength example conform FHIR EU core profile
  * nieuwe waardelijsten zonder afhankelijkheid met zib2020 toegevoegd en binding strenght 'component' (waardelijsten: SpecifiekeStofAllergeneStoffenCodelijst; SpecifiekeStofHPKCodelijst; SpecifiekeStofSNKCodelijst; SpecifiekeStofSSKCodelijst; SpecifiekeStofThesaursus122Codelijst)

  Wijzigingen aan *MateVanZekerheid:*

  * nieuwe waardelijst 'ZekerheidStatusCodelijst' zonder afhankelijkheid met zib2020 toegevoegd met binding strenght 'component'

  Wijzigingen aan *ManifestatieVanReactie*

  *  value set Allergy Reaction IPS 2.0.0 toegevoegd als main binding en binding strength preferred conform FHIR EU core profile
  * nieuwe waardelijst ‘ManifestatieVanReactieCodelijst' zonder afhankelijkheid met zib2020 toegevoegd als additional binding met binding strength ‘component’
  * waardelijst 'SymtpoomCodelijst' losgekoppeld van data-element vanwege inhoudelijk overlap met waardelijst 'ManifestatieVanReactieCodelijst'

  Wijzigingen aan *Ernst* en *WijzeVanBlootstelling:* 

  * Waardelijsten met afhankelijkheid van zib2020 losgekoppeld van data-element vanwege inhoudelijk overlap met waardelijsten die als main binding is gekoppeld
* [GBB-68](http://bits.nictiz.nl/browse/GBB-68): De waardelijsten van zib uit FHIR-profiel voor GBB-AllergieIntolerantie, die Reactie bevat, vervangen door waardelijsten van de GBB.