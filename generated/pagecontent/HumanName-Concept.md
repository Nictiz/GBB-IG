Conceptbeschrijving
: De naam van een persoon, bestaande uit tekst, onderdelen en gebruiksinformatie.

Doel
: Het vastleggen en uitwisselen van naamgegevens van een persoon.

Gebruiksscenario(’s)
: Zorgcontext:
- Overdrachten van dossiers (nieuwe bronhouder)
- Doorverwijzing tussen zorgverleners
- Ondersteuning in het identificeren van de patient, contactpersonen en zorgverleners
- aanspreken van de persoon

FHIR context: Als sub-bouwsteen zal dit concept gebruikt worden in de volgende andere concepten (zoals opgesomt in de FHIR R4 specificatie):
- InsurancePlan (alleen in FHIR spec als contactpersoon van de insurance, wordt niet binnen Nictiz gebruikt als resource)
- Organization
- Patient
- Person (alleen in FHIR resource)
- Practitioner
- RelatedPerson

Representatie
: Het is mogelijk dat de situatie later kan veranderen en daarmee de informatie van het concept

Alias(sen)
: Name information, Nameinformation.Givenname

Juist gebruik
: Juist:
-Voor namen van natuurlijke personen zoals patiënten, zorgverleners en gerelateerde personen.
-Voor identificatie en correcte aanschrijving van personen.
-Gebruik HumanName.use/Naamgegevens.Doel om het type naam aan te geven zoals bijvoorbeeld “official”.
-Leg verschillende type namen van één persoon vast als afzonderlijke HumanName/Naamgegevens instanties.
-Given/Voornaam kan meerdere voornamen en initialen bevatten
-Given/Voornaam bevat slechts in het geval dat er geen volledige voornamen bekend zijn, de initialen.

Onjuist gebruik
: Onjuist:
Namen van organisaties, locaties of andere niet-menselijke entiteiten.
-Given/Voornaam mag niet automatisch geïnterpreteerd worden als roepnaam.
-Verschillende alternatieve namen mogen niet gecombineerd worden in één instantie van HumanName/Naamgegevens.
-Text en de gestructureerde naamdelen mogen niet met tegenstrijdige naamgegevens worden gevuld.

Referenties
: zie bronnen tabblad