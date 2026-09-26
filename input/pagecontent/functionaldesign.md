# \(FO Functioneel Ontwerp\) Implementatiegids NL\-PS

# 1.              Inleiding

## 1.1       Algemeen

De European Patient Summary (EPS) is een gestandaardiseerde samenvatting van minimaal essentiële en aanvullende informatie over de klinische toestand van een patiënt, bedoeld ter ondersteuning van de zorgverlener en de patiënt in geval van noodsituaties, ongeplande en geplande zorg, zowel in eigen land als in het buitenland. De EPS is een van de eerste categorieën onder de [EHDS wetgeving artikel 15](https://ehdsexplorer.eu/article/15). Interoperabiliteit wordt mogelijk gemaakt middels het EEHRxF (European electronic health record exchange format) wat is uitgewerkt door het Xt-EHR project in samenwerking met de lidstaten.

Hier in dit document, beschrijven we de informatiestandaard Nederlandse Patientsamenvatting (NL-PS) met in de basis deze EPS en EEHRxF. De NL-PS voegt daarbij toe aan de EPS de mogelijkheidheden voor een set van essentiële informatiebehoeften binnen de Nederlandse context. Het vertaalt de Europese kaders naar functionele eisen die aansluiten en ondersteuning geven bij de Nederlandse zorgprocessen, informatiesystemen en gegevensuitwisseling.

*Voor de verklaring van de begrippen die voorkomen in het functioneel ontwerp wordt verwezen naar het *[*begrippenoverzicht op de Nictiz website*](https://www.nictiz.nl/standaardisatie/overzichten/begrippen/)*.*

## 1.2       Doelgroep

Dit functioneel ontwerp is bedoeld voor partijen die betrokken zijn bij de ontwikkeling, implementatie, beproeving, en het beheer van de NL-PS. De primaire doelgroep bestaat uit:

- zorgaanbieders en zorgverleners die gegevens voor de NL-PS registreren, valideren, beschikbaar stellen of gebruiken;
- leveranciers en beheerders van Electronic Health Record (EHRs) zoals EPD’s, huisartsinformatiesystemen en andere zorginformatiesystemen;
- leveranciers en beheerders van patiëntportalen en elektronische gezondheidsgegevensdiensten;
- functioneel ontwerpers, informatieanalisten, architecten en interoperabiliteitsspecialisten;
- landelijke en regionale infrastructuurpartijen die de gegevensuitwisseling ondersteunen;
- beleidsmakers, toezichthouders en partijen die verantwoordelijk zijn voor kwalificatie, conformiteitsbeoordeling en implementatie.

## 1.3       Kaders & Uitgangspunten

### 1.3.1     Richtlijn en proces

De European Health Data Space (EHDS) is een Europese verordening die het juridische kader vormt voor de elektronische beschikbaarheid en uitwisseling van de Patient Summary. De wettelijke eisen en specificaties voor interoperabele EHR-systemen, ook wel het EEHRxF (European Electronic Health Record exchange Format) genoemd, worden gespecificeerd aan de hand van artikel 15 van de EHDS implementing acts. Aan het EEHRxF format wordt invulling gegeven met Europese lidstaten binnen het Extended EHR project (Xt-EHR) door middel van Implementation Guides. Voor de Patient Summary is de volgende Europese implementatiegids opgeleverd, die zal dienen als basis voor deze informatiestandaard: [Xt-EHR Deliverable 6.1 - Patient Summary: Implementation guides on EEHRxF, functional and technical requirements and specifications for EHR systems](https://www.xt-ehr.eu/deliverables/). Dit document beschrijft de functionele, semantische en technische specificaties voor de Patient Summary als onderdeel van het European Electronic Health Record Exchange Format (EEHRxF).

Grensoverschrijdende gegevensuitwisseling vanuit Nederland verloopt via de [National Contact Point for eHealth (NCPeH) Nederland](https://www.ncpeh.nl/) die aansluit op de [MyHealth@EU](https://health.ec.europa.eu/ehealth-digital-health-and-care/digital-health-and-care/electronic-cross-border-health-services_en?utm_source=chatgpt.com) infrastructuur.

Voor de Nederlandse context zijn twee informatiestandaarden als bron gebruikt: de [**BgZ-MSZ**](https://www.nictiz.nl/informatiestandaarden/basisgegevensset-zorg/) en de [**Spoedsamenvatting**](https://www.nictiz.nl/informatiestandaarden/acute-zorg/). 

### 1.3.2     Reikwijdte Informatiestandaard

*De reikwijdte van de informatiestandaard beslaat de functionele beschrijvingen en de dataset voor alle gegevensuitwisselingen binnen de zorgprocessen waarbij een bevoegde partij behoefte heeft aan een patiëntsamenvatting. Hieronder vallen onder andere de volgende processen:*

- Het beschikbaar maken van gegevens die onderdeel zijn van de patiëntsamenvatting.
- Het opvragen van een patiëntsamenvatting voor behandeling van een (buitenlandse) patiënt binnen Nederland.
- Het beschikbaar stellen van een patiëntsamenvatting voor behandeling van een (Nederlandse) patiënt binnen Europa.
- Het actualiseren van gegevens die onderdeel zijn van de patiëntsamenvatting. 

Voor volledige aansluiting met het Nederlandse contactpunt (NCPeH-NL) voor grensoverschrijdende uitwisselingen en aansluiting op de processen van MyHealth@EU zijn mogelijk aanvullende stappen nodig. Hiervoor verwijzen we naar de beschikbare documentatie op: <https://www.ncpeh.nl/>

### 1.3.3     Infrastructuur

De NL-PS gegevens zullen in Nederland via het [Landelijk Dekkend Netwerk](https://www.datavoorgezondheid.nl/onderwerpen/l/landelijk-dekkend-netwerk) (LDN) worden uitgewisseld, dat door het ministerie van Volksgezondheid, Welzijn en Sport (VWS) in samenwerking met partijen in zorg en ICT wordt bewerkstelligd. Via het *landelijk dekkend netwerk van infrastructuren* worden zorgaanbieders met elkaar verbonden voor het uitwisselen en beschikbaar stellen van gezondheidsgegevens. Als onderdeel hiervan staan in het Landelijk Afsprakenstelsel alle technische, organisatorische en juridische afspraken die nodig zijn om te zorgen dat burgers en zorgverleners kunnen vertrouwen op de data en op het veilige en verantwoorde gebruik ervan. Daarnaast wordt middels het programma [Implementatie generieke functies van VWS](https://www.datavoorgezondheid.nl/onderwerpen/g/generieke-functies) samengewerkt met het zorg- en ICT-veld aan een set afspraken, standaarden en voorzieningen om Identificatie, Authenticatie, Toestemming, Autorisatie, Lokalisatie en Addressering vast te stellen.

Bij grensoverschrijdende uitwisselingen wordt aangesloten op de [MyHealth@EU](https://health.ec.europa.eu/ehealth-digital-health-and-care/digital-health-and-care/electronic-cross-border-health-services_en?utm_source=chatgpt.com) infrastructuur via de [National Contact Point for eHealth (NCPeH) Nederland](https://www.ncpeh.nl/).

# 2. Ontwerp Nederlandse Patientsamenvatting

## 2.1 Ontwerpaanpak

De NL-PS wijkt af van de gebruikelijke werkwijze bij informatiestandaarden, waarbij domeinspecifieke usecases het uitgangspunt vormen. Voor de NL-PS wordt eerst op basis van de EPS een domeinoverstijgende set van systeemrollen uitgewerkt met de bijbehorende functionele eisen.

In een volgende fase wordt bepaald op welke manier domeinspecifieke usecases hierop aansluiten en welke aanvullende eisen voor systeemrollen hieruit voortvloeien. De uitwerking daarvan valt buiten de huidige scope.

## 2.2 Specificatie van NL-PS

De NL-PS is de Nederlandse implementatie van de EPS. De EPS specificatie en de EEHRxF vormt de basis voor de inhoud, structuur, betekenis, kardinaliteiten en terminologie van de NL-PS. In het afsprakenmodel (logisch model) is de opbouw van de NL-PS en de bijbehorende componenten gespecificeerd. 

Om de Nederlandse zorgprocessen te ondersteunen, zijn Generieke Bouwblokken (GBB’s) ontwikkeld, die zijn ontworpen vanuit de informatierequirements uit de EHDS modellen en de aanvullende behoeften binnen Nederland. In deze versie van de NL-PS zijn de informatierequirements vanuit de informatiestandaarden BgZ-MSZ 2.0 en de Spoedsamenvatting 2.2. In de NL-PS wordt per sectie gebruikgemaakt van GBB’s. Waar nog geen GBB voor ontwikkeld is (bijv. in sectie MedicatieSamenvatting), wordt aangegeven dat het ontbreekt.

In toekomstige versies zullen de secties verder worden aangevuld voor domeinspecifieke use cases, en internationale uitwisselingen.

## 2.3 Bedrijfsrollen

Binnen de EHDS Xt-EHR implementation guides zijn er bedrijfsrollen gedefinieerd voor de EPS. De bedrijfsrollen kunnen ingevuld worden door technische actoren:

- **Producent van de patiëntsamenvatting (PS Producer):** stelt de NL-PS samen en rondt deze af op basis van klinische en administratieve gegevens.
- **Beheerder van PS-gegevens (PS Data Holder):** slaat de PS veilig op en maakt deze toegankelijk voor bevoegde gebruikers. Kan ook metadata publiceren en verzoeken om gegevenslevering afhandelen. Deze optionele, architectuurafhankelijke rol kan functies van een *Exchanger *vervullen.
- **Gebruiker van de patiëntsamenvatting (PS Consumer):** haalt NL-PS-gegevens op en bekijkt of verwerkt deze voor zorgverlening, zorgcontinuïteit of zelfmanagement door de patiënt.

## 2.4 Systeemrollen

Een systeem kan verschillende rollen aannemen. Om te voldoen aan een systeemrol zijn er bepaalde eisen en capaciteiten verwacht. Hieronder staan de systeemrollen die in scope staan voor de NL-PS gedefinieerd en aangevuld met de eisen. In de tabel is te zien welke systeemrollen ondersteund moeten worden door een systeem om te voldoen aan de genoemde bedrijfsrollen. Voor de rollen registrerend/vastleggend en verwerkend system is nog geen aansluiting op de bedrijfsrollen van EHDS gevonden. 

| **EHDSBedrijfsrol \\Systeemrollen** | **Registrerend systeem** | **Raadplegend systeem NL-PS** | **Raadplegend systeem GBBs** | **Beschikbaarstellend systeem NL-PS** | **Beschikbaarstellend systeem GBBs** | **Ontvangend systeem** | **Tonend systeem** | **Verwerkend systeem** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PS Producer |  |  |  | X | X |  |  |  |
| PS Data holder |  |  |  | X | X |  |  |  |
| PS Consumer |  | X | X |  |  | X | X |  |

1. Registrerend/Vastleggend systeem (niet onderdeel bedrijfsrol)  
Definitie:  Het EHR systeem zou nieuwe gegevens moeten kunnen vastleggen compliant met de definities van de GBB’s in scope van de NL-PS.

   Eisen: In ontwikkeling met product architectuur. Denk aan eisen aan gecodeerd vastleggen volgens de afgesproken waardelijsten en kwaliteit van registraties.
2. Raadplegend systeem NL-PS  
Definitie: Een systeem is in staat om een NL-PS op te vragen (via het LDN).

   Eis1: De informatiestandaard stelt zich op volledig aan te sluiten bij het LDN. Eisen aan opvraging, zoals query parameters en adressering, zullen worden gesteld door het LDN.  
Eis2: Disclaimer, deze eisen zullen ook compliant moeten zijn met IPS en EPS  
Eis3: Het systeem is in staat om een NL-PS op te vragen.
3. Raadplegend systeem GBBs  
Definitie: Het systeem is in staat GBBs te raadplegen die vermeld zijn in een NL-PS  
Eis1:  De informatiestandaard stelt zich op volledig aan te sluiten bij het LDN. Eisen aan opvraging, zoals query parameters en adressering, zullen worden gesteld door het LDN.  
Eis2: Het systeem is in staat om de referenties in de NL-PS naar gestructureerde data te raadplegen. Zoals, specifiek allergy-02 volledig raadplegen.
4. Beschikbaarstellend systeem NL-PS  
Definitie: Het systeem moet in staat zijn om een NL-PS beschikbaar te stellen.

   Eis 1: De NL-PS is beschikbaar gesteld conform de specificaties op het logische model.  
Eis 2: De NL-PS is beschikbaar gesteld conform aan het FHIR-profiel NL-PS composition.  
Eis 3: De NL-PS is beschikbaar gesteld conform aan het FHIR-profiel EPS composition.  
Eis 4: andere API eisen aan het EHR systeem volgen uit het LDN en EHDS  
Disclaimer: Mogelijk worden de verschillende niveaus van volwassenheid uit de EHDS comitologie nog verder uitgeschreven. 1) Alleen PDF met metadata via FHIR, 2) In FHIR geformateerde samenvattingen in groeperingen met metadata of 3) in FHIR gestructureerde data in combinatie met samenvattingen met metadata.
5. Beschikbaarstellend systeem GBBs   
Definitie: Het systeem is in staan om de GBBs individueel beschikbaar te stellen.  
Eis 1: De GBB is beschikbaar gesteld conform de specificaties op het logische model.  
Eis 2: De GBB is beschikbaar gesteld conform aan het desbetreffende FHIR-profiel.
6. Ontvangend systeem  
Definitie: Het systeem moet in staat zijn een NL-PS te ontvangen.

   Eisen: Het systeem is in staat de NL-PS te kunnen ontvangen, zoals verzonden en zonder foutmeldingen.
7. Tonend systeem  
Definitie: Het systeem is in staat om alle informatie van het NL-PS logisch model te tonen aan gebruikers.

   Eisen: Het systeem is in staat alle informatie van het NL-PS logisch model te tonen, zonder informatieverlies.
8. Verwerkend systeem   
Definitie: Het systeem is in staat om de informatie uit de NL-PS te verwerken en over te nemen in het eigen systeem.  
Eis1: Het systeem is in staat alle informatie uit de NL-PS over te nemen.  
Eis2: Het systeem is in staat alle verplichte onderdelen van de NL-PS over te nemen.  
Eis3: Het systeem kan een beperkte set informatie uit de NL-PS overnemen.

| **Systeemrol** | **Definitie** |
| --- | --- |
| **Registrerend / vastleggend systeem** | Het EHR-systeem legt nieuwe gegevens vast die compliant zijn met de definities van de GBB’s die onderdeel zijn van de NL-PS-secties. |
| **Raadplegend systeem NL-PS** | Het systeem is in staat om een NL-PS op te vragen via het LDN. |
| **Raadplegend systeem GBB’s** | Het systeem is in staat om GBB’s te raadplegen die vermeld zijn in een NL-PS. |
| **Beschikbaarstellend systeem NL-PS** | Het systeem is in staat om een NL-PS beschikbaar te stellen. |
| **Beschikbaarstellend systeem GBB’s** | Het systeem is in staat om GBB’s individueel beschikbaar te stellen. |
| **Ontvangend systeem** | Het systeem is in staat om een NL-PS te ontvangen. |
| **Tonend systeem** | Het systeem is in staat om alle informatie uit het NL-PS-logische model aan gebruikers te tonen. |
| **Verwerkend systeem** | Het systeem is in staat om informatie uit de NL-PS te verwerken en over te nemen in het eigen systeem. |

## 2.5 Systeemrollen per bedrijfsrol

| **Bedrijfsrol** | **Kernverantwoordelijkheid** | **Bijbehorende systeemrollen** | **Hoofdactiviteit in de uitwisseling** |
| --- | --- | --- | --- |
| **PS Producer** | Stelt de NL-PS samen en rondt deze af op basis van beschikbare klinische en administratieve gegevens. | - Registrerend / vastleggend systeem - Beschikbaarstellend systeem NL-PS - Beschikbaarstellend systeem GBB’s | Samenstellen en beschikbaarstellen van de NL-PS of onderliggende GBB-gegevens. |
| **PS Data Holder** | Beheert PS-gegevens en maakt deze toegankelijk voor bevoegde raadpleging. | - Beschikbaarstellend systeem NL-PS - Beschikbaarstellend systeem GBB’s | Bewaren, beschikbaar houden en leveren van PS-gegevens op verzoek. |
| **PS Consumer** | Vraagt de NL-PS op, ontvangt deze en gebruikt de informatie binnen het zorgproces. | - Raadplegend systeem NL-PS - Raadplegend systeem GBB’s - Ontvangend systeem - Tonend systeem - Verwerkend systeem | Opvragen, ontvangen, tonen en eventueel overnemen van informatie uit de NL-PS. |

# 3. Transacties / Capabiliteiten / Requirements

**Pre-proces: (informatief)**

1. Er zijn medische gegevens van de patient geregistreerd door een zorgverlener. (Registrerend systeem; PS Data Holder)

**Proces:**

1. De zorgverlener start een verzoek om de NL-PS van een patiënt te raadplegen vanuit diens EHR-systeem (raadplegende systeem; PS Consumer).
2. Een beschikbaarstellende systeem ontvangt via de daarvoor afgesproken Nederlandse LDN infrastructuur het verzoek voor de NL-PS. (beschikbaarstellend systeem; PS Data Holder)
3. Het beschikbaarstellend EHR systeem beantwoordt het verzoek met de NL-PS van de patient. (beschikbaarstellend systeem; PS Producer)
4. Het raadplegend systeem ontvangt de NL-PS. (ontvangend systeem; PS Consumer)
5. Het raadplegende EHR systeem toont de ontvangen NL-PS aan de zorgverlener. (tonend systeem; PS Consumer)

**Post-proces (informatief)**

1. De zorgverlener of zijn systeem zijn nu in staat de NL-PS te gebruiken en mogelijk om data te verwerken of over te nemen in het eigen systeem (verwerkend systeem)

## 3.1 Raadplegen / Query van de PS 

EHR systemen moeten een NL-PS kunnen opvragen middels query-parameters.

|  |  |  |  |
| --- | --- | --- | --- |
| ​**​Transactie** | **​Systeemrol** | **​Systeem** | ​​**Bedrijfsrol** |
| Raadplegen Patient Summary | ​NPS-PSR-FHIR | EHR Raadplegende zorgaanbieder | PS Consumer |

## 3.2 Opstellen PS / beschikbaarstellen

EHR systemen moeten een NL-PS kunnen opstellen aan de hand van de in de transactiedataset vastgestelde gegevens en deze op verzoek beschikbaarstellen via de afgesproken Nederlandse infrastructuur.

|  |  |  |  |
| --- | --- | --- | --- |
| ​**​Transactie** | **​Systeemrol** | **​Systeem** | ​​**Bedrijfsrol** |
| Beschikbaarstellen Patient Summary \<link naar LIM\> | ​NPS-PSB-FHIR | EHR Beschikbaarstellende zorgaanbieder | PS Producer |

## 3.3 Ontvangen van de PS

EHR systemen moeten de NL-PS kunnen ontvangen via de in Nederland afgesproken infrastructuur en tonen aan de hand van de in de transactiedataset vastgestelde gegevens.

|  |  |  |  |
| --- | --- | --- | --- |
| ​**​Transactie** | **​Systeemrol** | **​Systeem** | ​​**Bedrijfsrol** |
| Ontvangen Patient Summary | ​NPS-PSO-FHIR | EHR Ontvangende zorgaanbieder | PS Consumer |

## 3.4 Update van de PS

**Disclaimer**: Dit is een onderdeel van de Xt-EHR Patient Summary guidelines, echter is het updaten van de NL-PS is op dit moment geen expliciet onderdeel van deze informatiestandaard. Afspraken met betrekking tot consolidatie en reconciliatie zijn momenteel nog in ontwikkeling.

# 4.                Praktijkgevallen / Use case(s)

*Een use case is een specifieke beschrijving van een praktijksituatie in de zorg waarbij voor een concrete situatie het uitwisselen van informatie wordt beschreven aan de hand van actoren (mensen, systemen) en transacties (welke informatie wordt wanneer uitgewisseld). Een use case is een verbijzondering van een specifiek onderdeel van het zorgproces.​ Een informatiestandaard kan bestaan uit één of meerdere use cases. *

## 4.1       Algemeen

De use cases beschrijven het functionele gebruik van de NL-PS en zijn toepasbaar op nationale uitwisseling en, waar aangegeven, op grensoverschrijdende uitwisseling via MyHealth@EU. 

Vanuit de EHDS Xt-EHR implementation guide zijn onderstaande usecases geïdentificeerd. Deze zijn per usecase visueel weergegeven. Verdere uitwerking van de bijbehorende processen komen in een volgende versie.


# 4.       Referenties

Een overzicht met referenties waar naar verwezen wordt in het functioneel ontwerp.

# 5.        Release notes

Voeg een tabel in waarin de wijzigingen voor deze informatiestandaard als BITS-issues staan.
