Alias(sen)
: ContactPoint

Conceptbeschrijving
: Dit concept is een sub-bouwsteen die de contactgegevens bevat.

Doel
: Het vastleggen en uitwisselen van contactgegevens. Primair doel is uitwisseling, secundair doel is vastlegging.

Representatie
: Het is mogelijk dat de situatie later kan veranderen en daarmee de informatie van het concept.

Basismodel
: https://hl7.org/fhir/R4/datatypes.html#ContactPoint

Beredenering basismodel
: Er is een openEHR equivalent voor contactgegevens, maar de bijbehorende cluster is nog niet volwassen (Structured_Address)

Afsprakenmodel
: 

Gebruiksscenario(’s)
: Als sub-bouwsteen zal dit concept gebruikt worden in de volgende andere concepten (zoals opgesomt in de FHIR R4 specificatie):
- ContactDetail
- CareTeam
- Device
- DeviceDefinition
- Endpoint
- HealthcareService
- InsurancePlan
- Location
- MessageHeader
- Organization
- OrganizationAffiliation
- Patient
- Person
- Practitioner
- PractitionerRole
- RelatedPerson
- Subscription

Juist gebruik
: Gebruik een ContactPoint voor telecommunicatiegegevens, zodat contact kan worden opgenomen via een specifiek telecommunicatiekanaal.

Onjuist gebruik
: Niet bedoeld voor andere middelen dan telecommunicatie.

Referenties
: https://zibs.nl/wiki/ContactInformation-v1.2(2020EN)


: https://ckm.openehr.org/ckm/archetypes/1013.1.273


: https://hl7.org/fhir/R4/datatypes.html#ContactPoint


: https://simplifier.net/nictiz-r4-zib2020/zibcontactinformationtelephonenumbers


: https://simplifier.net/nictiz-r4-zib2020/nlcorecontactinformationtelephonenumbers


: https://simplifier.net/nictiz-r4-zib2020/zibcontactinformationemailaddresses


: https://simplifier.net/nictiz-r4-zib2020/nlcorecontactinformationemailaddresses


: https://www.xt-ehr.eu/fhir/models/en/StructureDefinition-EHDSTelecom.html


: 


: https://hl7.eu/fhir/base/map-ehdstelecom.html


: https://nictiz.atlassian.net/wiki/spaces/POB/pages/954531911/Zib-issues


: https://nictiz.atlassian.net/browse/ZIB-3130?search=tele&selectedIssue=ZIB-3132