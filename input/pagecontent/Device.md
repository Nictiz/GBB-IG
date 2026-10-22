
{% include_relative Device-Concept.md %}

### UDI

Het EHDSDevice-model bevat `Udi` met kardinaliteit `0..*`. In FHIR R4 worden UDI-gegevens vastgelegd via `Device.udiCarrier`, dat meerdere keren kan voorkomen.

Binnen de huidige uitwerking is de obligation `SHALL:populate` alleen toegepast op `Device.udiCarrier.deviceIdentifier`. Voor de overige onderliggende elementen van `udiCarrier` geldt deze verplichting niet. Deze worden gebruikt wanneer de informatie beschikbaar is.

### Type - terminologie

Voor de Europese informatiebehoefte 'Type' (EU-11) worden SNOMED CT en EMDN genoemd als mogelijke terminologiestelsels. Daarnaast bevat de Europese Master Value Sets Catalog (v10.0.0) een waardenset voor MedicalDevice.

Er wordt nog onderzocht welke waardelijst van toepassing is op de GBB's. In ART-DECOR is hiervoor momenteel nog geen waardelijst gekoppeld.

### Type - kardinaliteit

In het EHDSDevice-model heeft `Type` kardinaliteit `0..*`. In FHIR R4 heeft `Device.type` kardinaliteit `0..1` en ondersteunt dit element maximaal één `CodeableConcept`.

Hierdoor is de kardinaliteit uit het EHDS-model niet één-op-één over te nemen in FHIR R4. Zolang hiervoor geen aanvullende oplossing is vastgesteld, volgt de implementatie de kardinaliteit van FHIR R4.
