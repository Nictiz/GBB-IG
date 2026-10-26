{% include_relative Condition-Concept.md %}

### Afwijking van EHDS in het implementatie-artefact 
De informatiebehoefte afkomstig uit het logische model van EHDSCondition zijn verwerkt in het afsprakenmodel van deze GBB. Echter, EHDSCondition is moeilijk volledig te implementeren in FHIR. Het dataelement header.author[x] is volgens het logische model een herhalend element, maar het meest relevante resourcetype van FHIR, Condition, hanteert strengere kardinaliteit (0..1), waardoor niet aan de EHDS-richtlijnen kan worden voldaan. Voor dit probleem is een Jira-ticket aangemaakt op het [HL7 Jira bord](https://jira.hl7.org/browse/FHIR-58077).

### Bekende toekomstige ontwikkelpunten
Deze versie van GBB Gezondheidstoestand is volop in ontwikkeling. In de volgende iteratie worden minstens Nederlandse informatiebehoefte uit de zibs Diagnose en AandoeningOfGesteldheid uit de publicatie van 2024 geanalyseerd, welke goed kunnen aansluiten bij bestaande modellering van de huidige versDeie van deze GBB of kunnen resulteren in aanvullende data-elementen.  
Daarnaast zal in een toekomstige versie van ART-DECOR het mogelijk worden om obligations per data-element per systeemrol te duiden en additionele bindings in terminologie te koppelen. Informatiebehoefte van andere informatiestandaarden zullen in de toekomst worden geanalyseerd.

### Bekende problemen

* [GBB-6](https://nictiz.atlassian.net/browse/GBB-6): GBB-Condition:FHIR-profiel niet conform eu-profiel: element assertedDate
* [GBB-97](https://nictiz.atlassian.net/browse/GBB-97): GBB-Condition:Voldoen aan DAGIM-spelregels versie 1.0.0-alpha.4
* [GBB-106](https://nictiz.atlassian.net/browse/GBB-106): GBB-Condition:Waardelijsten toevoegen volgens regels en handleiding
* [GBB-134](https://nictiz.atlassian.net/browse/GBB-134): GBB-Condition:Formuleren van informatie-requirements volgens DAGIM-spelregels
* [GBB-84](https://nictiz.atlassian.net/browse/GBB-84): GBB-Condition:Toevoegen van EU/NL traceability
* [GBB-148](https://nictiz.atlassian.net/browse/GBB-148): GBB-Condition:Ontbrekende additional bindings van FHIR EU Core profile Condition