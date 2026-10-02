Conceptbeschrijving
: Een klinische aandoening, probleem, diagnose of andere gebeurtenis, situatie, kwestie of klinisch concept dat aanleiding geeft tot zorg.

Doel
: Het doel van het concept is het eenduidig vastleggen en uitwisselen van een klinisch relevante diagnose, aandoening, gezondheidstoestand of ander zorgpunt van een patiënt. Dit ondersteunt nader onderzoek, behandeling, monitoring en overdracht van zorg, ook wanneer het gaat om een niet-negatieve gezondheidstoestand, zoals zwangerschap, of om een toestand die het gevolg is van een eerdere ingreep.

Gebruiksscenario(’s)
: Het kan worden gebruikt om informatie vast te leggen over een ziekte of aandoening die is vastgesteld op basis van klinische redenering over pathologische en pathofysiologische bevindingen (diagnose); over gezondheidsproblemen of -situaties die een zorgverlener als schadelijk of potentieel schadelijk beschouwt en die nader onderzoek en behandeling vereisen (probleem); of over andere gezondheidsproblemen of -situaties die mogelijk voortdurende monitoring en/of behandeling behoeven (gezondheidsprobleem/-zorgpunt).
De 'Condition'-resource kan worden gebruikt om een ​​bepaalde gezondheidstoestand van een patiënt vast te leggen die doorgaans niet als een negatieve uitkomst wordt beschouwd, zoals zwangerschap. De 'Condition'-resource kan ook worden gebruikt om een ​​aandoening of toestand vast te leggen die volgt op een ingreep, zoals de status van 'onderbeenamputatiepatiënt' na een amputatieprocedure.

Spoedsamenvatting 2.2.0, bij het opstellen van de episodes en problemen 
BgZ-MSZ: bij klachten en diagnoses
eOverdracht: problemen
Eerstelijnszorg: problemen

Representatie
: Een instantiatie beschrijft één klinisch relevante conditie bij een patiënt. Veranderingen in status of zekerheid worden in dezelfde registratie bijgewerkt; voor een andere conditie of afzonderlijke episode wordt een nieuwe instantiatie gemaakt. Beëindigde of weerlegde condities blijven als historie beschikbaar.

Alias(sen)
: episode, diagnose, aandoening, probleem, klacht(als het geen onderdeel is van de aandoening), functionele beperking, complicatie, symptoom(als het geen onderdeel is van de aandoening)

Juist gebruik
: Het concept is bedoeld voor het vastleggen van een klinisch relevante aandoening, diagnose, probleem, gezondheidstoestand, risico of zorgpunt dat beoordeling, behandeling of monitoring vereist.

Onjuist gebruik
: Het concept is niet bedoeld voor losse metingen, bevindingen of kortdurende symptomen; gebruik hiervoor Observation. Het is ook niet bedoeld om de uitgevoerde ingreep zelf vast te leggen; gebruik daarvoor Procedure. Voor allergieën en intoleranties die klinische beslisondersteuning moeten activeren, is AllergyIntolerance het aangewezen concept. Een blijvende toestand na een ingreep kan wel als conditie worden vastgelegd.

Referenties
: Condition - FHIR v4.0.1

Keuze Basismodel
: FHIR Condition Maturity Level: 3 & openEHR Problem/Diagnosis;latest revision / latest published  53 [1.7.4] 

Na analyse blijkt FHIR beste keus, want: 
-categorie: bij openEHR zijn de keuzes voor cathegorie niet overeenkomend met de cathegorieen van de LIM -> maar hoeft niet persé een deal-breaker te zijn
- diagnosisAssertionStatus waardelijst komt niet precies overeen bij openEHR(mist differential en netered-in-error), wel volledige mapping met FHIR
- stage komt niet precies overeen in openEHR, namelijk via extensie / uitbreiding van archetype Specific Details (cluster?), wel in FHIR
- nadereSpecificatieProbleemNaam heeft in ZIBFHIR-145 een mapping gekregen op FHIR, maar is duidelijker in openEHR gemodelleerd als "variant" (echter variant is specifieker, dan LIMS/ZIB wil duiden )
-specialistcontact: in openEHR is het onduidelijk, mogelijk other participants mits je aan kan geven dat het een voorkeurscontactpersoon is. in FHIR ook niet ideaal, namelijk note.text of via careteam.reason

Concept-sheet is opgemaakt met spelregel: https://nictiz.atlassian.net/browse/DAGIM-72
: 