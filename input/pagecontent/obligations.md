### Inleiding
Generieke bouwstenen specificeren hoe informatie wordt gemodelleerd voor alle bekende usecases. Het is niet de verwachting dat alle gemodelleerde informatie actief wordt ondersteund door elke gebruiker van een bouwsteen, want sommige informatie is mogelijk niet relevant voor de usecase. De verwachtingen kunnen bovendien anders zijn voor de verschillende rollen in het proces. In de regel zullen de generieke bouwstenen alleen actieve ondersteuning vereisen voor de onderdelen die nodig zijn voor correcte interpretatie van de data of die wettelijk verplicht zijn. Voor specifieke usecases kunnen aanvullende eisen worden gedefinieerd; dit gebeurt als onderdeel van de usecase-specificaties.

De generieke bouwstenen gebruiken het obligations-mechanisme van FHIR om de eisen met betrekking tot de ondersteuning van gemodelleerde informatie te specificeren. Met dit mechanisme kan fijnmazig per actor gespecificeerd worden wat de eisen zijn voor elk gegevenselement in een model. Obligations zijn aanwezig in zowel de afsprakenmodellen als de FHIR-profielen.

### Eisniveaus
De obligations die worden gebruikt voor de generieke bouwstenen gebruiken de vereistenniveaus SHALL en SHOULD volgens de definities in RFC 2119.

| Term   | Eisniveau  | Definitie |
| ---    | --------   | ----------------------------------|
| SHALL  | Verplicht  | Betekent dat de definitie een absolute vereiste van de specificatie is. |
| SHOULD | Aanbevolen | Betekent dat er in bepaalde omstandigheden geldige redenen kunnen zijn om een item te negeren, maar dat de volledige implicaties moeten worden begrepen en zorgvuldig afgewogen voordat een andere aanpak wordt gekozen. |

### Actoren
Generieke bouwstenen zijn bedoeld voor het registreren en uitwisselen van informatie. Hiervoor worden drie verschillende actoren onderkend. Dit zijn generieke actoren. Voor usecases kunnen aanvullende, usecase-specifieke actoren worden gedefinieerd.

Registrerend systeem
: Deze actor vertegenwoordigt een systeem dat informatie uit de echte wereld vastlegt in een elektronisch formaat, zoals een EPD-systeem of een persoonlijke gezondheidsomgeving.

Ontsluitend systeem
: Deze actor vertegenwoordigt een systeem dat elektronisch informatie, vastgelegd door een registrerend systeem, overdraagt ​​aan een derde partij. Het is voor deze actorbeschrijving irrelevant of informatie actief wordt verzonden, passief wordt aangeboden of anderszins. Een uitwisselend systeem is niet verantwoordelijk voor het vastleggen van (aanvullende) informatie. Dit is doorgaans een FHIR-client of -server.

Ontvangend systeem
: Deze actor vertegenwoordigt een systeem dat informatie in elektronische vorm ontvangt van een uitwisselend systeem. Net als bij uitwisselende systemen is het voor deze actorbeschrijving irrelevant of informatie wordt ontvangen of actief wordt opgehaald.

Deze actordefinities gaan over de rol die het systeem vervult tijdens het proces. Vaak vertegenwoordigt één fysiek systeem meerdere actoren.

### Obligations, kardinaliteit en `mustSupport`
Naast obligations hebben data-elementen ook een kardinaliteit om aan te geven hoe vaak het mag of moet voorkomen. Dit zijn complementaire mechanismen. De kardinaliteit beschrijft eisen aan de data, obligations beschrijven eisen aan actoren.

Wanneer bijvoorbeeld een element een kardinaliteit van 0..1 of 0..* heeft, hoeft de informatie niet aanwezig te zijn in de data. Deze kardinaliteit kan gekozen zijn om verschillende redenen: de informatie is niet relevant is voor elke instantiatie van het model (een procedure kan onderhande zijn, dus de eindtijd kan afwezig zijn), er kunnen legacy gegevens zijn waarin het gegeven niet geregistreerd is, het wordt niet noodzakelijk geacht om de informatie vast te leggen of uit te wisselen. Met obligations kan worden aangegeven dat bijvoorbeeld registrerende systemen het gegevenselement wel moeten vullen op het moment dat de informatie bestaat.

FHIR specificeert ook een `mustSupport`-vlag voor elementen; wanneer deze op actief staat, geeft dat het signaal dat er ondersteuning verwacht wordt van gebruikers. Wat precies de verwachting is, moet verder worden gespecificeerd. In deze gids betekent `mustSupport` dat de nadere specificatie volgt uit de obligations.

### Algemene overwegingen voor obligations
Op generiek niveau hoeft slechts een kleine subset van de gegevenselementen aanwezig te zijn voor een zinvolle interpretatie van de vastgelegde of uitgewisselde gegevens. Voor verplichtingen op dit generieke niveau is dit de enige overweging. Latere specificaties voor usecases kunnen aanvullende verplichtingen bevatten met betrekking tot informatie die relevant is voor die usecase.

Gewoonlijk worden verplichtingen en kardinaliteit als volgt toegepast:

|                                                | Kardinaliteit | Registrerend systeem     | Ontsluitend systeem         | Ontvangend systeem |
| ---                                            | ---           | ---                      | ---                         | ---                |
| Element nodig voor correcte interpretatie      | 1..           | SHALL *able to populate* | SHALL *able to populate*    | SHALL *handle*     |
| Element niet nodig voor correcte interpretatie | 0..           |                          | SHOULLD *populate if known* | SHALL *not-error*  |

Dit vertaalt zich als volgt:
1. Als een gegevenselement nodig is voor een correcte interpretatie van de gegevens, moet het altijd aanwezig zijn en moet een registrerend systeem het op een zinvolle manier kunnen invullen. Het element moet ook in het FHIR-bericht terechtkomen en de ontvanger moet iets met de informatie kunnen doen -- wat precies, is afhankelijk van de situatie.
2. Wanneer een element niet nodig is voor een correcte interpretatie van de gegevens, hoeft het niet aanwezig te zijn en is registratie niet vereist. Omdat de bouwstenen een nationale overeenkomst vertegenwoordigen, wordt verwacht dat het element in het FHIR-bericht terechtkomt als het is geregistreerd. Om dezelfde reden mogen ontvangers nooit crashen op het element, zelfs als ze het niet nodig hebben voor de usecase waarvoor ze ontworpen zijn.

Deze verplichtingen betekenen ook dat uitwisselende systemen nooit verplicht zijn om informatie in te vullen die niet in eerste instantie is geregistreerd, waardoor op een algemeen niveau de uitwisseling van historische of onjuist geregistreerde informatie mogelijk is. Usecase-specificaties kunnen het gebruik van deze onvolledige informatie inperken.

### Obligations in logische modellen versus FHIR-profielen
De logische modellen worden gebruikt als basis voor het definiëren van FHIR-profielen. Daarom komen de obligations die in de logische modellen zijn gedefinieerd overeen met die in de FHIR-profielen, behalve wanneer er een indirecte koppeling is tussen het logische model en het FHIR-profiel.

De actor "Registrerend systeem" ontbreekt in de FHIR-profielen, omdat FHIR gaat over gegevensuitwisseling, niet over registratie.