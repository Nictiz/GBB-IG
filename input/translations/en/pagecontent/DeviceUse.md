
{% include_relative DeviceUse-Concept.md %}

### Relevant information about version 1.0.0-alpha.1

* In FHIR R4, DeviceUse.timing is restricted to Period. This allows the start and end dates from the Dutch zib to be exchanged within a single period; both components remain optional separately.
* The ability to explicitly indicate that a device is "not a medical device" is not included. Explicit absence should not be recorded as a product type in DeviceUse.
* The reason for using a medical device cannot yet be fully implemented as described in the EHDS model: the relationship with a diagnosis, procedure, or request, as well as the use of reason, derivedFrom, and basedOn, must be further elaborated.
* The recording source is distinct from the healthcare provider who prescribes, dispenses, implants, or removes a medical device. The descriptions and mappings must explicitly clarify this distinction; for the performing healthcare provider, alignment with EHDSProcedure is being explored.
* Information requirements from other information standards will be analyzed in the future.

### Known limitations and outstanding issues

#### Language used (DEVICEUSE-08)

The information requirement 'Language used' is included in the EHDS Logical Information Model. The FHIR profile includes a mapping to `DeviceUseStatement.language`. However, this information requirement has not yet been fully elaborated in the FHIR base model and ART-DECOR.

The FHIR element `language` describes the language of the resource content. It remains to be determined whether this is semantically equivalent to the EHDS information requirement 'Language used'.

FHIR uses BCP 47 for language coding. The European specifications also refer to ISO 639-1 and ISO 639-2. Further alignment is required to determine the applicable value set.

#### Anatomical location

The anatomical location is currently represented using `DeviceUseStatement.bodySite`, which supports coded anatomical locations, including SNOMED CT codes.

Within the EHDS model, this information is related to `EHDSBodyStructure.Location`. The intention is to use a separate BodyStructure GBB in the future.

This GBB has not yet been configured in ART-DECOR. Until it becomes available and the reference has been defined, the current representation using `bodySite` remains applicable.

#### Author (DEVICEUSE-5)

The information requirement 'Author' is not yet included in the FHIR base model mapping and has not been configured in ART-DECOR.

This information is relevant when it must be possible to identify who created the record concerning the use of a medical device.

Further assessment is required to determine whether this information requirement is necessary within DeviceUse or whether it can be supported through generic metadata or provenance.

#### Healthcare professional (DEVICEUSE-13)

The information requirement 'Healthcare professional' currently has no mapping in the base model and has not been configured in ART-DECOR.

Further elaboration must distinguish between the recording source and the healthcare professional involved in the use of the medical device.

#### Healthcare provider as location (DEVICEUSE-14)

The information requirement 'Healthcare provider as location' has not yet been mapped in the base model or configured in ART-DECOR.

The relationship between the use of the medical device and the relevant healthcare provider or location requires further elaboration.

#### RelatedPerson

In FHIR R4, `DeviceUseStatement.source` can reference `RelatedPerson`, among other resource types.

The corresponding modelling and reference to RelatedPerson still require further elaboration in ART-DECOR.

#### Reason for use

ART-DECOR currently includes a reference to `Condition` for the reason for using a medical device.

The information requirement also includes relationships with other GBBs. Not all of these are currently available in ART-DECOR.

Additional references will be added once the corresponding GBBs have been configured. Until then, the representation of the reason for use remains incomplete.

#### Timing (DEVICEUSE-09)

* The Dutch implementation intends to represent the period of use using `Period`. FHIR R4 also supports other datatypes for `DeviceUseStatement.timing[x]`. The technical restriction to `Period` is being addressed separately in GBB-9. The start and end dates remain independently optional.

The EHDS information requirement also includes timing information that cannot be fully represented by this period.

Further elaboration of the `Period` concept as a separate building block is planned. Until additional agreements have been established, the current implementation remains applicable.