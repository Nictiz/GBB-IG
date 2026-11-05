{% include_relative Procedure-Concept.md %}

### Bekende problemen

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

### Release notes versie 1.0.0-alpha.2

* [GBB-53](https://bits.nictiz.nl/browse/GBB-53):

  Extensie “impose-profile“ toegevoegd in GBB profielen nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner en -PractitionerRole 

  Extensie “complies-with“ aangepast naar “impose-profile“ in GBB profielen nl-core-Condition en -Procedure