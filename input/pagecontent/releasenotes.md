### Adres
#### Bekende problemen

* [GBB-80](https://bits.nictiz.nl/browse/GBB-80): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-93](https://bits.nictiz.nl/browse/GBB-93): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-108](https://bits.nictiz.nl/browse/GBB-108): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-122](https://bits.nictiz.nl/browse/GBB-122): Obligations toevoegen
* [GBB-135](https://bits.nictiz.nl/browse/GBB-135): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

#### Release notes versie 1.0.0-alpha.2

* [GBB-15](https://bits.nictiz.nl/browse/GBB-15): Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole 
Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure
* [GBB-25](https://bits.nictiz.nl/browse/GBB-25): Adres.Country:
  * Waardelijstkoppeling aangepast in afsprakenmodel: main binding ISO-366-1-2 zoals in EU core
  * Additional binding met type component toegevoegd naar de GBA landen tabel: GBA - https://decor.nictiz.nl/ad/#/gbb2026bbr-/terminology/valueset/2.16.840.1.113883.2.4.3.11.60.153.11.35/2026-10-19T07:42:38
  * informatierequirement ADD-16 aangemaakt voor deze NL informatiebehoefte
  * Mapping naar afsprakenmodel en FHIR profiel gelegd
* [GBB-55](https://bits.nictiz.nl/browse/GBB-55): De waardelijst van Address.country.extension:countryCode aangepast naar hoe het staat in https://hl7.eu/fhir/base/StructureDefinition-Address-eu.html
* [GBB-66](https://bits.nictiz.nl/browse/GBB-66): De Nederlandse vertaling van GBB-Address is gewijzigd van ‘Adresgegevens’ naar ‘Adres’ in alle artefacten.
* [GBB-67](https://bits.nictiz.nl/browse/GBB-67): De waardelijst https://decor.nictiz.nl/ad/#/gbb2026bbr-/datasets/dataset/2.16.840.1.113883.2.4.3.11.60.153.1.2/2026-06-01T13:47:10/concept/2.16.840.1.113883.2.4.3.11.60.153.2.1.84/2026-06-01T13:49:24 aan FHIR-profiel voor GBB-Adres toegevoegd op adres.country als additional binding met binding type component

### AllergieIntolerantie
#### Bekende problemen

* [GBB-74](https://bits.nictiz.nl/browse/GBB-74): (GBB AllergieIntolerantie) Ontbrekende referentie naar RelatedPerson
* [GBB-75](https://bits.nictiz.nl/browse/GBB-75): (GBB AllergieIntolerantie en SBB Reactie) Ontbrekende additional bindings van FHIR EU Core AllergyIntolerance
* [GBB-77](https://bits.nictiz.nl/browse/GBB-77): (GBB AllergieIntolerantie) Ontbrekende additional binding uit EU core bij AllergyIntolerance.language
* [GBB-78](https://bits.nictiz.nl/browse/GBB-78): Verwijderen informatiestandaarden bij gebruiksscenario's van concept AllergieIntolerantie
* [GBB-90](https://bits.nictiz.nl/browse/GBB-90): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-103](https://bits.nictiz.nl/browse/GBB-103): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-118](https://bits.nictiz.nl/browse/GBB-118): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-130](https://bits.nictiz.nl/browse/GBB-130): Obligations toevoegen
* [GBB-144](https://bits.nictiz.nl/browse/GBB-144): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

#### Release notes versie 1.0.0-alpha.2

* [GBB-13](https://bits.nictiz.nl/browse/GBB-13): 
* [GBB-14](https://bits.nictiz.nl/browse/GBB-14):

  Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole 

  Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure
* [GBB-30](https://bits.nictiz.nl/browse/GBB-30): De waardelijsten van zib uit FHIR-profiel voor GBB-AllergieIntolerantie, die Reactie bevat, vervangen door waardelijsten van de GBB.
* [GBB-69](https://bits.nictiz.nl/browse/GBB-69):

  Alle waardelijsten met een afhankelijkheid naar zib2020 zijn losgekoppeld en zonder deze afhankelijkheid toegevoegd aan de data-elementen VeroorzakendeStof, Categorie, ActieveInactieveStatus, VerificatieStatus en MateVanKritiekZijn in het afspraken model

  Data-type van element Bron is gewijzigd van gecodeerd element naar folder met referenties naar Patient, Zorgverlener, ZorgverlenerRol conform FHIR EU Core profiel
### Contactgegevens
#### Bekende problemen
* [GBB-92)](https://bits.nictiz.nl/browse/GBB-92): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-104)](https://bits.nictiz.nl/browse/GBB-104): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-119)](https://bits.nictiz.nl/browse/GBB-119): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-133)](https://bits.nictiz.nl/browse/GBB-133): Obligations toevoegen
* [GBB-145)](https://bits.nictiz.nl/browse/GBB-145): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

#### Release notes versie 1.0.0-alpha.2
### Device
#### Bekende problemen

* [GBB-149](https://bits.nictiz.nl/browse/GBB-149): Terminologie voor Device.type nog niet vastgesteld. Afstemming van SNOMED CT, EMDN en de Europese MVC-waardelijst is nog nodig.
* [GBB-150](https://bits.nictiz.nl/browse/GBB-150): Kardinaliteit van Type wijkt af tussen EHDSDevice (0..*) en FHIR R4 Device.type (0..1). Meerdere typen zijn momenteel niet ondersteund.
* [GBB-157](https://bits.nictiz.nl/browse/GBB-157): UDI-obligation uit EHDS is binnen FHIR R4 alleen toegepast op Device.udiCarrier.deviceIdentifier. Overige UDI-elementen hebben geen SHALL:populate-verplichting.

#### Release notes versie 1.0.0-alpha.2

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

### Gezondheidstoestand
#### Bekende problemen

* [GBB-6](https://bits.nictiz.nl/browse/GBB-6): GBB-Condition:FHIR-profiel niet conform eu-profiel: element assertedDate
* [GBB-97](https://bits.nictiz.nl/browse/GBB-97): GBB-Condition:Voldoen aan DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-106](https://bits.nictiz.nl/browse/GBB-106): GBB-Condition:Waardelijsten toevoegen volgens regels en handleiding
* [GBB-134](https://bits.nictiz.nl/browse/GBB-134): GBB-Condition:Formuleren van informatie-requirements volgens DAGIM-spelregels
* [GBB-84](https://bits.nictiz.nl/browse/GBB-84): GBB-Condition:Toevoegen van EU/NL traceability
* [GBB-148](https://bits.nictiz.nl/browse/GBB-148): GBB-Condition:Ontbrekende additional bindings van FHIR EU Core profile Condition

#### Release notes versie 1.0.0-alpha.2

* [GBB-52](https://bits.nictiz.nl/browse/GBB-52):

  Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole 

  Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure

### Locatie
#### Bekende problemen

* [GBB-82](https://bits.nictiz.nl/browse/GBB-82): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-94](https://bits.nictiz.nl/browse/GBB-94): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-113](https://bits.nictiz.nl/browse/GBB-113): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-120](https://bits.nictiz.nl/browse/GBB-120): Obligations toevoegen
* [GBB-138](https://bits.nictiz.nl/browse/GBB-138): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

#### Release notes versie 1.0.0-alpha.2

* [GBB-16](https://bits.nictiz.nl/browse/GBB-16):

  Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole 

  Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure

### MedischHulpmiddel
#### Bekende problemen

* [GBB-149](https://bits.nictiz.nl/browse/GBB-149): Terminologie voor Device.type nog niet vastgesteld. Afstemming van SNOMED CT, EMDN en de Europese MVC-waardelijst is nog nodig.
* [GBB-150](https://bits.nictiz.nl/browse/GBB-150): Kardinaliteit van Type wijkt af tussen EHDSDevice (0..*) en FHIR R4 Device.type (0..1). Meerdere typen zijn momenteel niet ondersteund.
* [GBB-157](https://bits.nictiz.nl/browse/GBB-157): UDI-obligation uit EHDS is binnen FHIR R4 alleen toegepast op Device.udiCarrier.deviceIdentifier. Overige UDI-elementen hebben geen SHALL:populate-verplichting.

#### Release notes versie 1.0.0-alpha.2

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

### Persoonsnaam
#### Bekende problemen

* [GBB-79](https://bits.nictiz.nl/browse/GBB-79): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-95](https://bits.nictiz.nl/browse/GBB-95): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-112](https://bits.nictiz.nl/browse/GBB-112): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-126](https://bits.nictiz.nl/browse/GBB-126): Obligations toevoegen
* [GBB-139](https://bits.nictiz.nl/browse/GBB-139): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

#### Release notes versie 1.0.0-alpha.2

* [GBB-7](https://bits.nictiz.nl/browse/GBB-7): Op Naamgegevens.Voornaam is de ontbrekende Nederlandse vertaling van de comment toegevoegd.
* [GBB-23](https://bits.nictiz.nl/browse/GBB-23): ‘Naamgegevens’ is gewijzigd naar ‘Persoonsnaam’ in alle artefacten.

### Organisatie
#### Bekende problemen

* [GBB-83](https://bits.nictiz.nl/browse/GBB-83): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-99](https://bits.nictiz.nl/browse/GBB-99): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-110](https://bits.nictiz.nl/browse/GBB-110): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-121](https://bits.nictiz.nl/browse/GBB-121): Obligations toevoegen
* [GBB-141](https://bits.nictiz.nl/browse/GBB-141): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

#### Release notes versie 1.0.0-alpha.2

* [GBB-17](https://bits.nictiz.nl/browse/GBB-17):

  Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole 

  Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure
* [GBB-26](https://bits.nictiz.nl/browse/GBB-26): De waardelijst zib-organizationType in afsprakenmodel bij element Organisatie.Type voor GBB-Organisatie is vervangen door waardelijst gbb-organizationType als additional binding met binding strength component
* [GBB-34](https://bits.nictiz.nl/browse/GBB-34): De waardelijst zib-organizationType uit FHIR-profiel voor GBB-Organisatie is vervangen door waardelijst gbb-organizationType als additional binding met binding strength component

### Patiënt
#### Bekende problemen

* [GBB-65](https://bits.nictiz.nl/browse/GBB-65): Informatierequirements Pronouns en SexParametersForClinicalUse ontbreken in IG
* [GBB-85](https://bits.nictiz.nl/browse/GBB-85): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-100](https://bits.nictiz.nl/browse/GBB-100): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-107](https://bits.nictiz.nl/browse/GBB-107): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-127](https://bits.nictiz.nl/browse/GBB-127): Obligations toevoegen
* [GBB-137](https://bits.nictiz.nl/browse/GBB-137): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

#### Release notes versie 1.0.0-alpha.2

* [GBB-18](https://bits.nictiz.nl/browse/GBB-18):

  Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole

  Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure
* [GBB-27](https://bits.nictiz.nl/browse/GBB-27): De zib waardelijsten zijn verwijderd uit het logisch model van GBB-Patient en de bindings zijn toegevoegd in lijn met het EU Core FHIR profiel.
* [GBB-54](https://bits.nictiz.nl/browse/GBB-54): Patient.extension:patSexParameterForClinicalUse.extension:patSexParameterForClinicalUse in FHIR-profiel verwijderd

### Reactie
#### Bekende problemen

* [GBB-76](https://bits.nictiz.nl/browse/GBB-76): Ontbrekend aparte weergave voor FHIR-profiel van SBB Reactie
* [GBB-91](https://bits.nictiz.nl/browse/GBB-91): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-105](https://bits.nictiz.nl/browse/GBB-105): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-116](https://bits.nictiz.nl/browse/GBB-116): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-132](https://bits.nictiz.nl/browse/GBB-132): Obligations toevoegen
* [GBB-146](https://bits.nictiz.nl/browse/GBB-146): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

#### Release notes versie 1.0.0-alpha.2

* [GBB-29](https://bits.nictiz.nl/browse/GBB-29):

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
* [GBB-68](https://bits.nictiz.nl/browse/GBB-68): De waardelijsten van zib uit FHIR-profiel voor GBB-AllergieIntolerantie, die Reactie bevat, vervangen door waardelijsten van de GBB.

### Verrichting
#### Bekende problemen

* [MPI-11](https://bits.nictiz.nl/browse/MPI-11): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [MPI-12](https://bits.nictiz.nl/browse/MPI-12): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-56](https://bits.nictiz.nl/browse/GBB-56): Het backbone-element anatomischeLocatie is momenteel nog niet ingevuld, omdat de bijbehorende bouwblok nog niet is ontwikkeld.
* [GBB-57](https://bits.nictiz.nl/browse/GBB-57): Het backbone-element Betrokkenen.performer[x] bevat momenteel alleen Patient, Zorgverlener en ZorgverlenerRol. ContactPersoon als uitvoerder ontbreekt nog. Deze zal worden toegevoegd zodra het bijbehorende bouwblok beschikbaar is.
* [GBB-58](https://bits.nictiz.nl/browse/GBB-58): Het backbone-element InformationProvider mist om deze reden nog een referentie naar ContactPersoon.
* [GBB-59](https://bits.nictiz.nl/browse/GBB-59): Het element HuidigeActieStatus wordt naar FHIR Procedure.status gemapt op basis van ConceptMap-openehr-currentstate-to-fhir-procedure-status. De status active wordt op basis van het al dan niet aanwezig zijn van een EindDatumTijd gemapt naar in-progress of completed. Deze mapping is gebasseerd op de aanname dat een einddatum bekend is als de verrichting is afgerond.
* [GBB-60)](https://bits.nictiz.nl/browse/GBB-60): Het element DatumEnTijdActiestapUitgevoerd wordt gemapt op FHIR Procedure.performedDateTime indien de HuidigeActieStatus active of completed is en er geen StartDatumTijd of EindDatumTijd is vastgelegd. Als de StartDatumTijd is vastgelegd, maar er is geen EindDatumTijd, dan wordt DatumEnTijdActiestapUitgevoerd (indien de HuidigeActieStatus is active of completed) gemapt op Procedure.performedPeriod.end.
* [GBB-61](https://bits.nictiz.nl/browse/GBB-61): Er zijn verschillen tussen het logische model van EHDS en het FHIR-profiel, waardoor het EHDS model op dit moment nog niet volledig kan worden toegepast. We volgen hierin de mapping van het eu-core-profiel. Dit heeft gevolgen voor het gegevenselementen in het FHIR-profiel
  * Procedure.recorder (EHDS LIM verwacht dat header.author een herhalend element zal zijn. Dit is onrealiseerbaar op dit moment vanwege beperkte kardinaliteit van recorder in het basismodel van Procedure.)
  * Procedure.recorder (EHDS LIM verwacht dat header.author een EHDSHealthProfessional, EHDSOrganisation of EHDSDevice zal zijn. Dit is onrealiseerbaar op dit moment, recorder in het basis resource van Procedure refereert alleen naar Patient, RelatedPerson, Practitioner of PractitionerRole.)
  * [GBB-62](https://bits.nictiz.nl/browse/GBB-62): Procedure.asserter (EHDS LIM verwacht dat header.source een codeableConcept zal zijn. Deze wordt gemapt naar Procedure.asserter. Dit gegevenselement in het basis resource van Procedure is een Reference.)
* [GBB-63](https://bits.nictiz.nl/browse/GBB-63): In het logisch model van EHDS is er context over een Device mbt tot DeviceUsed en FocalDevice. In OpenEHR wordt informatie over gebruikte en toegepaste devices onder procedure detail geplaatst. OpenEHR kan pas betekenis geven aan het concepten in templates. Voor nu is er in het logisch model Procedure wel onderscheid gegeven aan de verschillende manier van Device gebruik.

#### Release notes versie 1.0.0-alpha.2

* [GBB-53](https://bits.nictiz.nl/browse/GBB-53):

  Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole 

  Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure

### Zorgverlener
#### Bekende problemen

* [GBB-86](https://bits.nictiz.nl/browse/GBB-86): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-98](https://bits.nictiz.nl/browse/GBB-98): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-111](https://bits.nictiz.nl/browse/GBB-111): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-124](https://bits.nictiz.nl/browse/GBB-124): Obligations toevoegen
* [GBB-140](https://bits.nictiz.nl/browse/GBB-140): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

#### Release notes versie 1.0.0-alpha.2

* [GBB-19](https://bits.nictiz.nl/browse/GBB-19):

  Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole 

  Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure
* [GBB-20](https://bits.nictiz.nl/browse/GBB-20):


  Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole 

  Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure
* [GBB-28](https://bits.nictiz.nl/browse/GBB-28):
  Vervanging van waardelijsten op de GBB ZorgverlenerRol op de elementen:

  * code main binding krijgt nu→ [Valueset-practitioner-role - FHIR v4.0.1+](https://hl7.org/fhir/R4/valueset-practitioner-role.html) met binding strength example, zoals in FHIR EU core profile
  * specialisme krijgt nu main binding → [Valueset-c80-practice-codes - FHIR v4.0.1](https://hl7.org/fhir/R4/valueset-c80-practice-codes.html) met binding strength preferred, zoals in FHIR EU core profile
  * Twee waardelijsten zijn toegevoegd als additional bindings aan ZorgverlenerRol.Specialisme: [UZI codelijst](https://decor.nictiz.nl/ad/#/gbb2026bbr-/terminology/valueset/2.16.840.1.113883.2.4.3.11.60.153.11.55/2026-10-19T12:14:43) en [UGB codelijst](https://decor.nictiz.nl/ad/#/gbb2026bbr-/terminology/valueset/2.16.840.1.113883.2.4.3.11.60.153.11.56/2026-10-19T12:14:49) als binding type component. Deze waardelijsten zijn ontkoppeld van de zib2020 publicatie
* [GBB-64](https://bits.nictiz.nl/browse/GBB-64): De waardelijsten van zib uit FHIR-profiel voor GBB-AllergieIntolerantie, die Reactie bevat, vervangen door waardelijsten van de GBB.

### ZorgverlenerRol
#### Bekende problemen

* [GBB-89](https://bits.nictiz.nl/browse/GBB-89): Toevoegen van EU/NL traceability op alle onderdelen van de GBB's
* [GBB-102](https://bits.nictiz.nl/browse/GBB-102): Voldoen aan de DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-114](https://bits.nictiz.nl/browse/GBB-114): GBB's controleren en aanpassen volgens de regels voor terminologie en waardelijsten
* [GBB-129](https://bits.nictiz.nl/browse/GBB-129): Obligations toevoegen
* [GBB-143](https://bits.nictiz.nl/browse/GBB-143): Informatie-requirements zijn nog onvoldoende geformuleerd volgens de DAGIM-spelregels

#### Release notes versie 1.0.0-alpha.2

* [GBB-20](https://bits.nictiz.nl/browse/GBB-20):

  Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole 

  Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure
* [GBB-28](https://bits.nictiz.nl/browse/GBB-28):

  Vervanging van waardelijsten op de GBB ZorgverlenerRol op de elementen:

  * code main binding krijgt nu→ [Valueset-practitioner-role - FHIR v4.0.1](https://hl7.org/fhir/R4/valueset-practitioner-role.html) met binding strength example, zoals in FHIR EU core profile
  * specialisme krijgt nu main binding → [Valueset-c80-practice-codes - FHIR v4.0.1](https://hl7.org/fhir/R4/valueset-c80-practice-codes.html) met binding strength preferred, zoals in FHIR EU core profile
  * Twee waardelijsten zijn toegevoegd als additional bindings aan ZorgverlenerRol.Specialisme: [UZI codelijst](https://decor.nictiz.nl/ad/#/gbb2026bbr-/terminology/valueset/2.16.840.1.113883.2.4.3.11.60.153.11.55/2026-10-19T12:14:43) en [UGB codelijst](https://decor.nictiz.nl/ad/#/gbb2026bbr-/terminology/valueset/2.16.840.1.113883.2.4.3.11.60.153.11.56/2026-10-19T12:14:49) als binding type component. Deze waardelijsten zijn ontkoppeld van de zib2020 publicatie
* [GBB-64](https://bits.nictiz.nl/browse/GBB-64): De waardelijsten van zib uit FHIR-profiel voor GBB-AllergieIntolerantie, die Reactie bevat, vervangen door waardelijsten van de GBB.