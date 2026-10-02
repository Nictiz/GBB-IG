### Informatiebronnen
Deze versie van dit generieke bouwblok (GBB) dekt informatiebehoefte uit de volgende bronnen: 
* Logisch informatie model EHDSCondition versie 1.0.0
* Verplichte elementen uit FHIR R4 Condition 
* Verplichte elementen uit openEHR Problem / Diagnosis versie 1.7.4 
* Zib Probleem uit publicatie 2017 
* Zib Probleem uit publicatie 2020 
* Informatiestandaard BgZ-MSZ versie 2.0.2 
* Usecase Spoedsamenvatting van informatiestandaard Acute Zorg versie 2.2.0 

### Afwijking van EHDS in het implementatie-artefact 
De informatiebehoefte afkomstig uit het logische model van EHDSCondition zijn verwerkt in het afsprakenmodel van deze GBB. Echter, EHDSCondition is moeilijk volledig te implementeren in FHIR. Het dataelement header.author[x] is volgens het logische model een herhalend element, maar het meest relevante resourcetype van FHIR, Condition, hanteert strengere kardinaliteit (0..1), waardoor niet aan de EHDS-richtlijnen kan worden voldaan. Voor dit probleem is een Jira-ticket aangemaakt op het [HL7 Jira bord](https://jira.hl7.org/browse/FHIR-58077).

### Overige relevante informatie over versie 1.0.0-alpha.1
Belangrijk om te vermelden dat het vanwege de huidige versie van ART-DECOR de transactie behorend bij dit logisch model nog niet afgerond is. Andere GBB's die in deze GBB worden verwezen, bijvoorbeeld Zorgverlener als auteur van de Gezondheidstoestand, moeten een transaction building block (TBB) bevatten. Deze TBB neemt de kardinaliteiten over van de gekoppelde GBB. De koppeling van de TBB van GBB Patient is in deze versie wel gelukt. In de volgende release van ART-DECOR (3.10.3) wordt dit probleem verholpen.

### Bekende toekomstige ontwikkelpunten
Deze versie van GBB Gezondheidstoestand is volop in ontwikkeling. In de volgende iteratie worden minstens Nederlandse informatiebehoefte uit de zibs Diagnose en AandoeningOfGesteldheid uit de publicatie van 2024 geanalyseerd, welke goed kunnen aansluiten bij bestaande modellering van de huidige versDeie van deze GBB of kunnen resulteren in aanvullende data-elementen.  
Daarnaast zal in een toekomstige versie van ART-DECOR het mogelijk worden om obligations per data-element per systeemrol te duiden en additionele bindings in terminologie te koppelen. Informatiebehoefte van andere informatiestandaarden zullen in de toekomst worden geanalyseerd.