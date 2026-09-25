Conceptbeschrijving
: Het concept bevat de eigenschappen van een verscheidenheid aan implantaten, apparaten en hulpmiddelen die patiëntgerelateerd zijn, en ondersteunend zijn in het zorgproces. 

Opsomming van voorbeelden uit Device FHIR R5: 
Medische hulpmiddelen omvatten duurzame (herbruikbare) medische apparatuur, implanteerbare hulpmiddelen, evenals wegwerpartikelen die worden gebruikt voor diagnose, behandeling en onderzoek in de gezondheidszorg en volksgezondheid. Medische hulpmiddelen kunnen ook bepaalde soorten software omvatten.
Niet-medische hulpmiddelen kunnen onder meer bestaan uit voorwerpen zoals een machine, mobiele telefoon, computer, softwareapplicatie of algoritme, enz. Kortom, een hulpmiddel kan variëren van een tongspatel tot een MRI-apparaat. De velden in de hulpmiddelbron moeten flexibel genoeg zijn om dit spectrum te bestrijken.
Apparaten kunnen worden gecategoriseerd en aan één of meer categorieën worden gekoppeld. Voorbeelden van apparaatcategorieën zijn onder meer, maar zijn niet beperkt tot: actieve apparaten, communicerende apparaten, duurzame medische apparatuur, apparaten voor thuisgebruik, implanteerbare apparaten, in-vitrodiagnostiek, persoonlijke gezondheidsapparatuur, point-of-care-apparatuur, apparaten voor eenmalig gebruik, herbruikbare apparaten en software.

Doel
: Administratief concept over implantaten  of anderzins aan het zorgproces ondersteunende apparaten of hulpmiddelen om, indien nodig, te kunnen traceren.

Gebruiksscenario(’s)
: Het concept wordt gebruikt in het daadwerkelijk registreren in LIR.

Krukken of een rolstoel kunnen ook een hulpmiddel zijn en wil je dan kunnen hergebruiken. Voorraadbeheer.

Auteur zoals een AI die helpt bij het opstellen van een Document.
Beslissingsondersteuner, ofwel Clinical Decision Support die helpt bij het maken van medische keuzes.
Beeldvormende apparatuur zoals MRI
 Onderdeel van containerverzameling van Monster.
Testkit van laboratoriumonderzoek
EHDSMedication: Toedieningsapparaat is bij het product inbegrepen. Apparaten die niet in de medicatieverpakking zitten, zijn uitgesloten . voorbeeld: een naald
Als onderdeel van een verrichting uit xt ehr Procedure Model: , Device(s) that is/are implanted, removed, or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.

De informatiestandaarden waar Device wordt gebruikt, gekeken vanuit zib MedischHulpmiddel en common sense:
Document
Lab
BGZ MSZ 
Eoverdracht, tav hulpmiddelen zoals alarmbel
Geboortezorg 
Beeldbeschikbaarheid voor pacemakers of intracraniële vaatclips
acute zorg
Medicatieproces

Representatie
: 

Alias(sen)
: Implantaat, apparaat, specifieke termen (catheter, port-a-cath, pacemaker etc).

uit openehr: 	
apparaat hulpmiddel machine implantaat toestel katheter prothese hulp biomedisch instrument apparatuur meter monitor software

Juist gebruik
: -Het concept is bedoeld om te gebruiken voor aanleveren Landelijk Implantaat Register, zie: https://www.cibg.nl/lir
-Voorraadbeheer
- Zie lijstje hierboven bij de gebruiksscenarios en waar xt-ehr het in gebruikt.

Onjuist gebruik
: - 	uit openehr vertaald:
Niet bedoeld voor het vastleggen van gegevens over geneesmiddelen die een direct farmacologisch, metabolisch of immunologisch effect hebben. Bijvoorbeeld: een met geneesmiddel geïmpregneerd verband waarvoor een recept vereist is, moet worden vastgelegd met behulp van het archetype INSTRUCTION.medication_order, waarbij de nadruk ligt op de werkzame bestanddelen, de dosering enz.

Referenties
: Zie tabblad bronnen