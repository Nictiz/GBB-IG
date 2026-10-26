### Address
#### Known issues

* [GBB-80](https://nictiz.atlassian.net/browse/GBB-80): Add EU/NL traceability to all components of the GBBs
* [GBB-93](https://nictiz.atlassian.net/browse/GBB-93): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-108](https://nictiz.atlassian.net/browse/GBB-108): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-122](https://nictiz.atlassian.net/browse/GBB-122): Add obligations
* [GBB-135](https://nictiz.atlassian.net/browse/GBB-135): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

#### Release notes version 1.0.0-alpha.2

* [GBB-15](http://bits.nictiz.nl/browse/GBB-15):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure
* [GBB-25](http://bits.nictiz.nl/browse/GBB-25):  Adres.Country:
  * Value list mapping updated in the agreement model: main binding ISO-366-1-2 as in EU Core
  * Additional binding with component type added to the GBA countries table: GBA – ART-DECOR®
  * Information requirement ADD-16 created for this Dutch information requirement
  * Mapping to the agreement model and FHIR profile established
* [GBB-55](http://bits.nictiz.nl/browse/GBB-55): Changed the valueset of Address.country.extension:countryCode to how it is described in https://hl7.eu/fhir/base/StructureDefinition-Address-eu.html 
* [GBB-66](http://bits.nictiz.nl/browse/GBB-66): The Dutch translation of GBB-Address is changed from ‘Adresgegevens’ to ‘Adres’ in all artefacts.
* [GBB-67](http://bits.nictiz.nl/browse/GBB-67): The valueset https://decor.nictiz.nl/ad/#/gbb2026bbr-/datasets/dataset/2.16.840.1.113883.2.4.3.11.60.153.1.2/2026-06-01T13:47:10/concept/2.16.840.1.113883.2.4.3.11.60.153.2.1.84/2026-06-01T13:49:24  is added to the FHIR profile for GBB-Address under `address.country` as an additional binding with binding type `component`

### AllergyIntolerance
#### Known issues

* [GBB-74](https://nictiz.atlassian.net/browse/GBB-74): (GBB AllergyIntolerance) Missing reference to RelatedPerson
* [GBB-75](https://nictiz.atlassian.net/browse/GBB-75): (GBB AllergyIntolerance and SBB Reaction) Missing additional bindings from FHIR EU Core AllergyIntolerance
* [GBB-77](https://nictiz.atlassian.net/browse/GBB-77): (GBB AllergyIntolerance) Missing additional binding from EU Core for AllergyIntolerance.language
* [GBB-78](https://nictiz.atlassian.net/browse/GBB-78): Remove information standards from the usage scenarios for the AllergyIntolerance concept
* [GBB-90](https://nictiz.atlassian.net/browse/GBB-90): Add EU/NL traceability to all components of the GBBs
* [GBB-103](https://nictiz.atlassian.net/browse/GBB-103): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-118](https://nictiz.atlassian.net/browse/GBB-118): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-130](https://nictiz.atlassian.net/browse/GBB-130): Add obligations
* [GBB-144](https://nictiz.atlassian.net/browse/GBB-144): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

#### Release notes version 1.0.0-alpha.2

* [GBB-13](http://bits.nictiz.nl/browse/GBB-13): 
* [GBB-14](http://bits.nictiz.nl/browse/GBB-14):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure
* [GBB-30](http://bits.nictiz.nl/browse/GBB-30): Replaced value sets from the zib in the FHIR profile for GBB-AllergyIntolerance, which contains Reaction, with value sets from GBB.
* [GBB-69](http://bits.nictiz.nl/browse/GBB-69):

  All value lists with a dependency on zib2020 have been unlinked and added, without this dependency, to the data elements CausativeAgent, Category, ActiveInactiveStatus, VerificationStatus, and Criticality in the logical model.
  
  The data type of the element Source has been changed from a coded element to a folder containing references to Patient, Practitioner and Practicioner Role, in accordance with the FHIR EU Core profile.

### Condition
#### Known issues

* [GBB-6](https://nictiz.atlassian.net/browse/GBB-6): FHIR profile not conformant with the EU profile: assertedDate element
* [GBB-97](https://nictiz.atlassian.net/browse/GBB-97): Comply with DAGIM rules version 1.0.0-alpha.4
* [GBB-106](https://nictiz.atlassian.net/browse/GBB-106): Add value sets according to the rules and guidelines
* [GBB-134](https://nictiz.atlassian.net/browse/GBB-134): Formulate information requirements according to the DAGIM rules
* [GBB-84](https://nictiz.atlassian.net/browse/GBB-84): Add EU/NL traceability
* [GBB-148](https://nictiz.atlassian.net/browse/GBB-148): Missing additional bindings in the FHIR EU Core Condition profile

#### Release notes version 1.0.0-alpha.2

* [GBB-52](http://bits.nictiz.nl/browse/GBB-52):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure

### ContactPoint
#### Known issues

* [GBB-92](https://nictiz.atlassian.net/browse/GBB-92): Add EU/NL traceability to all components of the GBBs
* [GBB-104](https://nictiz.atlassian.net/browse/GBB-104): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-119](https://nictiz.atlassian.net/browse/GBB-119): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-133](https://nictiz.atlassian.net/browse/GBB-133): Add obligations
* [GBB-145](https://nictiz.atlassian.net/browse/GBB-145): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

#### Release notes version 1.0.0-alpha.2

### Device
#### Known issues

* [GBB-149](https://nictiz.atlassian.net/browse/GBB-149): Terminology for Device.type has not yet been determined. Alignment of SNOMED CT, EMDN and the European MVC value set is still required.
* [GBB-150](https://nictiz.atlassian.net/browse/GBB-150): The cardinality of Type differs between EHDSDevice (0..*) and FHIR R4 Device.type (0..1). Multiple types are currently not supported.
* [GBB-157](https://nictiz.atlassian.net/browse/GBB-157): The EHDS UDI obligation has only been applied to Device.udiCarrier.deviceIdentifier in FHIR R4. The other UDI elements do not have a SHALL:populate obligation.

#### Release notes version 1.0.0-alpha.2

* [GBB-5](http://bits.nictiz.nl/browse/GBB-5): 
* [GBB-8](http://bits.nictiz.nl/browse/GBB-8):

  Device
  EN: Device
  NL MedischHulpmiddel

  DeviceUse
  EN: DeviceUseStatement
  NL MedischHulpmiddelGebruik
* [GBB-9](http://bits.nictiz.nl/browse/GBB-9): DeviceUseStatement.timing[x] is restricted to the Period data type, so that the start and end dates can be recorded correctly. Existing mappings and obligations are retained.
* [GBB-12](http://bits.nictiz.nl/browse/GBB-12): TBB inserted in the transaction.
* [GBB-21](http://bits.nictiz.nl/browse/GBB-21): English translation provided for the Generic Building Block.
* [GBB-22](http://bits.nictiz.nl/browse/GBB-22): The transactions for ‘Device’ and ‘DeviceUse’ are now ‘LogicalModelDevice’ and ‘LogicalModelDeviceUse’. These have now also been translated into English. 
* [GBB-33](http://bits.nictiz.nl/browse/GBB-33): The obsolete supplementary zib2020-ValueSet binding has been removed from Device.type. The standard FHIR R4 binding remains in place.

### DeviceUse
#### Known issues

* [GBB-151](https://nictiz.atlassian.net/browse/GBB-151): Language used (DEVICEUSE-08) is missing from the base model and ART-DECOR. The existing FHIR mapping to DeviceUseStatement.language needs to be verified.
* [GBB-152](https://nictiz.atlassian.net/browse/GBB-152): The choice between value sets for language usage (BCP 47 and ISO 639) still requires alignment.
* [GBB-10](https://nictiz.atlassian.net/browse/GBB-10): Anatomical location is currently represented using bodySite. The intended reference to GBB BodyStructure has not yet been implemented.
* [GBB-153](https://nictiz.atlassian.net/browse/GBB-153): Author (DEVICEUSE-5) is missing from the base model and ART-DECOR. It needs to be investigated whether generic metadata or Provenance can be used for this purpose.
* [GBB-154](https://nictiz.atlassian.net/browse/GBB-154): Healthcare professional (DEVICEUSE-13) is missing from the base model and ART-DECOR.
* [GBB-155](https://nictiz.atlassian.net/browse/GBB-155): Healthcare provider as location (DEVICEUSE-14) is missing from the base model and ART-DECOR.
* [GBB-156](https://nictiz.atlassian.net/browse/GBB-156): RelatedPerson is supported as a reference type in FHIR R4, but the corresponding modelling in ART-DECOR has not yet been completed.
* [GBB-11](https://nictiz.atlassian.net/browse/GBB-11): Reason for use has not been fully elaborated. References to other GBBs are still missing, and a Procedure reference is not supported through DeviceUseStatement.reasonReference in FHIR R4.
* [GBB-9](https://nictiz.atlassian.net/browse/GBB-9): Timing (DEVICEUSE-09) is currently not fully supported. The restriction to Period is being addressed separately in GBB-9.

#### Release notes version 1.0.0-alpha.2

* [GBB-9](http://bits.nictiz.nl/browse/GBB-9): DeviceUseStatement.timing[x] is restricted to the Period data type, so that the start and end dates can be recorded correctly. Existing mappings and obligations are retained.
* [GBB-12](http://bits.nictiz.nl/browse/GBB-12): TBB inserted in the transaction.
* [GBB-22](http://bits.nictiz.nl/browse/GBB-22): The transactions for ‘Device’ and ‘DeviceUse’ are now ‘LogicalModelDevice’ and ‘LogicalModelDeviceUse’. These have now also been translated into English.

### HumanName
#### Known issues

* [GBB-79](https://nictiz.atlassian.net/browse/GBB-79): Add EU/NL traceability to all components of the GBBs
* [GBB-95](https://nictiz.atlassian.net/browse/GBB-95): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-112](https://nictiz.atlassian.net/browse/GBB-112): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-126](https://nictiz.atlassian.net/browse/GBB-126): Add obligations
* [GBB-139](https://nictiz.atlassian.net/browse/GBB-139): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

#### Release notes version 1.0.0-alpha.2

* [GBB-7](http://bits.nictiz.nl/browse/GBB-7): The missing Dutch translation of the comment on HumanName.Given has been added.
* [GBB-23](http://bits.nictiz.nl/browse/GBB-23): ‘Naamgegevens’ is changed to ‘Persoonsnaam’ in all artefacts.

### Location
#### Known issues

* [GBB-82](https://nictiz.atlassian.net/browse/GBB-82): Add EU/NL traceability to all components of the GBBs
* [GBB-94](https://nictiz.atlassian.net/browse/GBB-94): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-113](https://nictiz.atlassian.net/browse/GBB-113): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-120](https://nictiz.atlassian.net/browse/GBB-120): Add obligations
* [GBB-138](https://nictiz.atlassian.net/browse/GBB-138): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

#### Release notes version 1.0.0-alpha.2

* [GBB-16](http://bits.nictiz.nl/browse/GBB-16):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure

### Organization
#### Known issues

* [GBB-83](https://nictiz.atlassian.net/browse/GBB-83): Add EU/NL traceability to all components of the GBBs
* [GBB-99](https://nictiz.atlassian.net/browse/GBB-99): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-110](https://nictiz.atlassian.net/browse/GBB-110): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-121](https://nictiz.atlassian.net/browse/GBB-121): Add obligations
* [GBB-141](https://nictiz.atlassian.net/browse/GBB-141): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

#### Release notes version 1.0.0-alpha.2

* [GBB-17](http://bits.nictiz.nl/browse/GBB-17):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure
* [GBB-26](http://bits.nictiz.nl/browse/GBB-26): The “zib-organizationType” value list in the logical model under the “Organization.Type” element for GBB Organization has been replaced by the “gbb-organizationType” value list as an additional binding with a binding strength component.
* [GBB-34](http://bits.nictiz.nl/browse/GBB-34): Replaced the value set zib-organizationType in the FHIR profile for GBB-Organization with value set gbb-organizationType as additional binding with binding strength component

### Patient
#### Known issues

* [GBB-65](https://nictiz.atlassian.net/browse/GBB-65): Information requirements for Pronouns and SexParametersForClinicalUse are missing from the IG
* [GBB-85](https://nictiz.atlassian.net/browse/GBB-85): Add EU/NL traceability to all components of the GBBs
* [GBB-100](https://nictiz.atlassian.net/browse/GBB-100): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-107](https://nictiz.atlassian.net/browse/GBB-107): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-127](https://nictiz.atlassian.net/browse/GBB-127): Add obligations
* [GBB-137](https://nictiz.atlassian.net/browse/GBB-137): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

#### Release notes version 1.0.0-alpha.2

* [GBB-18](http://bits.nictiz.nl/browse/GBB-18):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure
* [GBB-27](http://bits.nictiz.nl/browse/GBB-27): The zib value sets have been removed from the logical model of GBB-Patient, and the bindings have been added in accordance with the EU Core FHIR profile.
* [GBB-54](http://bits.nictiz.nl/browse/GBB-54): Removed Patient.extension:patSexParameterForClinicalUse.extension:patSexParameterForClinicalUse from the FHIR profile

### Practitioner
#### Known issues

* [GBB-86](https://nictiz.atlassian.net/browse/GBB-86): Add EU/NL traceability to all components of the GBBs
* [GBB-98](https://nictiz.atlassian.net/browse/GBB-98): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-111](https://nictiz.atlassian.net/browse/GBB-111): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-124](https://nictiz.atlassian.net/browse/GBB-124): Add obligations
* [GBB-140](https://nictiz.atlassian.net/browse/GBB-140): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

#### Release notes version 1.0.0-alpha.2

* [GBB-19](http://bits.nictiz.nl/browse/GBB-19):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure
* [GBB-20](http://bits.nictiz.nl/browse/GBB-20):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure
* [GBB-28](http://bits.nictiz.nl/browse/GBB-28): Replacement of value lists in the GBB Healthcare Provider Role for the following elements:
  * The “code” main binding now uses → Valueset-practitioner-role - FHIR v4.0.1 with a binding strength of “example,” as in the FHIR EU core profile
  * The “specialism” main binding now uses → Valueset-c80-practice-codes - FHIR v4.0.1 with a binding strength of “preferred,” as in the FHIR EU core profile
  * Two value sets are added as additional bindings to ProviderRole.Specialty: the UZI code list and the UGB code list as binding type components. These value sets are decoupled from the zib2020 publication
* [GBB-64](http://bits.nictiz.nl/browse/GBB-64): Replaced value sets from the zib in the FHIR profile for GBB-AllergyIntolerance, which contains Reaction, with value sets from GBB.

### PractitionerRole
#### Known issues

* [GBB-89](https://nictiz.atlassian.net/browse/GBB-89): Add EU/NL traceability to all components of the GBBs
* [GBB-102](https://nictiz.atlassian.net/browse/GBB-102): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-114](https://nictiz.atlassian.net/browse/GBB-114): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-129](https://nictiz.atlassian.net/browse/GBB-129): Add obligations
* [GBB-143](https://nictiz.atlassian.net/browse/GBB-143): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

#### Release notes version 1.0.0-alpha.2

* [GBB-20](http://bits.nictiz.nl/browse/GBB-20):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure
* [GBB-28](http://bits.nictiz.nl/browse/GBB-28): Replacement of value lists in the GBB Healthcare Provider Role for the following elements:
  * The “code” main binding now uses → Valueset-practitioner-role - FHIR v4.0.1 with a binding strength of “example,” as in the FHIR EU core profile
  * The “specialism” main binding now uses → Valueset-c80-practice-codes - FHIR v4.0.1 with a binding strength of “preferred,” as in the FHIR EU core profile
  * Two value sets are added as additional bindings to ProviderRole.Specialty: the UZI code list and the UGB code list as binding type components. These value sets are decoupled from the zib2020 publication
* [GBB-64](http://bits.nictiz.nl/browse/GBB-64): Replaced value sets from the zib in the FHIR profile for GBB-AllergyIntolerance, which contains Reaction, with value sets from GBB.

### Procedure
#### Known issues

* [MPI-11](https://nictiz.atlassian.net/browse/MPI-11): Add EU/NL traceability for all parts of the GBBs
* [MPI-12](https://nictiz.atlassian.net/browse/MPI-12): Conform to the DAGIM-rules version 1.0.0-alpha.4
* [GBB-56](https://nictiz.atlassian.net/browse/GBB-56): The anatomicalLocation backbone element is currently not populated, as the corresponding Building Block has not yet been developed.
* [GBB-57](https://nictiz.atlassian.net/browse/GBB-57): The Participations.performer[x] backbone element currently contains only Patient, Practitioner and PractitionerRole. RelatedPerson as a participant is still missing. It will be added once the corresponding Building Block becomes available.
* [GBB-58](https://nictiz.atlassian.net/browse/GBB-58): For the same reason, the InformationProvider backbone element does not yet support a reference to RelatedPerson.
* [GBB-59](https://nictiz.atlassian.net/browse/GBB-59): The CurrentActionState element is mapped to FHIR Procedure.status using ConceptMap-openehr-currentstate-to-fhir-procedure-status. The status active is mapped to either in-progress or completed, depending on whether an EndDateTime is present. This mapping is based on the assumption that an end date is known when the procedure has been completed.
* [GBB-60](https://nictiz.atlassian.net/browse/GBB-60): The DateAndTimeActionstepPerformed element is mapped to FHIR Procedure.performedDateTime if CurrentActionState is active or completed and neither StartDateTime nor EndDateTime are populated.If StartDateTime is populated but EndDateTime is absent, DateAndTimeActionstepPerformed is mapped to FHIR Procedure.performedPeriod.end, provided that CurrentACtionState is active or completed.
* [GBB-61](https://nictiz.atlassian.net/browse/GBB-61): There are differences between the EHDS Logical Model and the FHIR profile, which currently prevent the EHDS model from being fully implemented. The mapping defined in the eu-core-profile is followed. This has implications for the following data elements in the FHIR profile.
  * Procedure.recorder (cardinality): The EHDS Logical Information Model (LIM) expects header.author to be a repeating element. This cannot currently be implemented because recorder has a maximum cardinality of 1 in the base FHIR Procedure resource.
  * Procedure.recorder (reference types): The EHDS LIM expects header.author to support EHDSHealthProfessional, EHDSOrganisation, or EHDSDevice. This cannot currently be fully implemented because recorder in the base FHIR Procedure resource can only reference Patient, RelatedPerson, Practitioner, or PractitionerRole.
  * [GBB-62](https://nictiz.atlassian.net/browse/GBB-62) Procedure.asserter (data type): The EHDS LIM expects header.source to be a CodeableConcept, which is mapped to Procedure.asserter. However, Procedure.asserter is defined as a Reference in the base FHIR Procedure resource.
* [GBB-63](https://nictiz.atlassian.net/browse/GBB-63): The EHDS Logical Model provides contextual information about devices through DeviceUsed and FocalDevice. In openEHR, information about devices used or applied during a procedure is represented within the procedure details. However, openEHR can only assign specific meaning to these concepts through templates. For now, the Procedure Logical Model distinguishes between the different ways in which devices may be used.

#### Release notes version 1.0.0-alpha.2

* [GBB-53](http://bits.nictiz.nl/browse/GBB-53):
  * Added extension “impose-profile“ in GBB profiles nl-core-Address, -AllergyIntolerance, -Location, -Organization, -Patient, -Practitioner, and -PractitionerRole 
  * Changed extension “complies-with“ to “impose-profile“ in GBB profiles nl-core-Condition, and -Procedure

### Reaction
#### Known issues

* [GBB-76](https://nictiz.atlassian.net/browse/GBB-76): Missing separate view for the FHIR profile of SBB Reaction
* [GBB-91](https://nictiz.atlassian.net/browse/GBB-91): Add EU/NL traceability to all components of the GBBs
* [GBB-105](https://nictiz.atlassian.net/browse/GBB-105): Comply with the DAGIM rules, version 1.0.0-alpha.4
* [GBB-116](https://nictiz.atlassian.net/browse/GBB-116): Review and update the GBBs according to the rules for terminology and value sets
* [GBB-132](https://nictiz.atlassian.net/browse/GBB-132): Add obligations
* [GBB-146](https://nictiz.atlassian.net/browse/GBB-146): Information requirements are not yet adequately formulated in accordance with the DAGIM rules

#### Release notes version 1.0.0-alpha.2

* [GBB-29](http://bits.nictiz.nl/browse/GBB-29):
  * Changes to *SpecificSubstance*: 
    * Added the value set eHDSIAllergenNoDrug as a main binding and binding strength example in accordance with the FHIR EU Core Profile
    * Added new value sets without dependency on zib2020 as additional bindings, along with the binding strength ‘component’ (value lists: SpecifiekeStofAllergeneStoffenCodelijst; SpecifiekeStofHPKCodelijst; SpecifiekeStofSNKCodelijst; SpecifiekeStofSSKCodelijst; SpecifiekeStofThesaurus122Codelijst)
  * Changes to *Certainty*:
    * Added new value set ‘ZekerheidStatusCodelijst’ without dependency on zib2020 as additional bindings, along with the binding strength ‘component’ 
  * Changes to *Manifestation*:
    * Added the value set Allergy Reaction IPS 2.0.0 as a main binding and binding strength example in accordance with the FHIR EU Core Profile
    * Added new value set ‘ManifestatieVanReactieCodelijst’ without dependency on zib2020 as additional bindings, along with the binding strength ‘component’ 
    * Removed value set ‘SymptoomCodelijst’ due to content overlap with the ‘ManifestatieVanReactieCodelijst’
  * Changes to *Severity* and *RouteOfExposure*: 
    * Removed value sets with a dependency to zib2020 due to content overlap with the value sets linked as main binding
* [GBB-68](http://bits.nictiz.nl/browse/GBB-68): Replaced value sets from the zib in the FHIR profile for GBB-AllergyIntolerance, which contains Reaction, with value sets from GBB.