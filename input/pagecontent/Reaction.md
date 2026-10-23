{% include_relative Reaction-Concept.md %}

### Bekende problemen
* [Ontbrekend aparte weergave voor FHIR-profiel van SBB Reactie](http://nictiz.atlassian.net/browse/GBB-76)
* [Toevoegen van EU/NL traceability op alle onderdelen van de GBB's](http://nictiz.atlassian.net/browse/GBB-91)
* [Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4](http://nictiz.atlassian.net/browse/GBB-105)
* [GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten](http://nictiz.atlassian.net/browse/GBB-116)
* [Obligations toevoegen](http://nictiz.atlassian.net/browse/GBB-132)
* [Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels](http://nictiz.atlassian.net/browse/GBB-146)

### Release notes version 1.0.0-alpha.2

* [GBB-29 - Wijzigingen aan *SpecifiekeStof*: • value set eHDSIAllergenNoDrug toegevoegd als main binding en binding strength example conform FHIR EU core profile • nieuwe waardelijsten zonder afhankelijkheid met zib2020 toegevoegd en binding strenght 'component' (waardelijsten: SpecifiekeStofAllergeneStoffenCodelijst; SpecifiekeStofHPKCodelijst; SpecifiekeStofSNKCodelijst; SpecifiekeStofSSKCodelijst; SpecifiekeStofThesaursus122Codelijst) Wijzigingen aan *MateVanZekerheid:* • nieuwe waardelijst 'ZekerheidStatusCodelijst' zonder afhankelijkheid met zib2020 toegevoegd met binding strenght 'component' Wijzigingen aan *ManifestatieVanReactie* • value set Allergy Reaction IPS 2.0.0 toegevoegd als main binding en binding strength preferred conform FHIR EU core profile • nieuwe waardelijst ‘ManifestatieVanReactieCodelijst' zonder afhankelijkheid met zib2020 toegevoegd als additional binding met binding strength ‘component’ • waardelijst 'SymtpoomCodelijst' losgekoppeld van data-element vanwege inhoudelijk overlap met waardelijst 'ManifestatieVanReactieCodelijst' Wijzigingen aan *Ernst* en *WijzeVanBlootstelling:* • Waardelijsten met afhankelijkheid van zib2020 losgekoppeld van data-element vanwege inhoudelijk overlap met waardelijsten die als main binding is gekoppeld](http://nictiz.atlassian.net/browse/GBB-29)
* [GBB-68 - De waardelijsten van zib uit FHIR-profiel voor GBB-AllergieIntolerantie, die Reactie bevat, vervangen door waardelijsten van de GBB.](http://nictiz.atlassian.net/browse/GBB-68)