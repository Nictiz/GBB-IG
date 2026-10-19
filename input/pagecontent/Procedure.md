{% include_relative Procedure-Concept.md %}

Opmerking
: Dit Afsprakenmodel wordt momenteel als een alpha-versie beschikbaar gesteld en is nog niet volledig.
Het backbone-element anatomischeLocatie is momenteel nog niet ingevuld, omdat de bijbehorende bouwblok nog niet is ontwikkeld.
Daarnaast bevat het backbone-element Betrokkenen.performer[x] momenteel alleen Patient, Zorgverlener en ZorgverlenerRol. ContactPersoon als uitvoerder ontbreekt nog. Deze zal worden toegevoegd zodra het bijbehorende bouwblok beschikbaar is.
Implementers dienen deze elementen als voorlopig te beschouwen; deze kunnen in toekomstige versies worden gewijzigd.

Opmerking2
: Het element HuidigeActieStatus wordt naar FHIR Procedure.status gemapt op basis van ConceptMap-openehr-currentstate-to-fhir-procedure-status. De status active wordt op basis van het al dan niet aanwezig zijn van een EindDatumTijd gemapt naar in-progress of completed. Deze mapping is gebasseerd op de aanname dat een einddatum bekend is als de verrichting is afgerond.

Opmerking3
: Het element DatumEnTijdActiestapUitgevoerd wordt gemapt op FHIR Procedure.performedDateTime indien de HuidigeActieStatus active of completed is en er geen StartDatumTijd of EindDatumTijd is vastgelegd. Als de StartDatumTijd is vastgelegd, maar er is geen EindDatumTijd, dan wordt DatumEnTijdActiestapUitgevoerd (indien de HuidigeActieStatus is active of completed) gemapt op Procedure.performedPeriod.end.

Opmerking4
:Er zijn verschillen tussen het logische model van EHDS en het FHIR-profiel, waardoor het EHDS model op dit moment nog niet volledig kan worden toegepast. Dit heeft gevolgen voor het gegevenselement Procedure.recorde in het FHIR-profiel
(EHDS LIM verwacht dat header.author een herhalend element zal zijn. Dit is onrealiseerbaar op dit moment vanwege beperkte kardinaliteit van recorder in het basis resource van Procedure)