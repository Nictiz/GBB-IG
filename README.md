# Repo for the generic building block IG
## Introduction
This is the git repository for the generic building block IG maintained by Nictiz. This repo contains the IG infrastructure and some of the narrative content for the IG. However, this repo is not the single-source-of-truth for all content; it will be retrieved or generated on the fly when building the IG.

The IG is in early stage; it is expected that a lot will change upon further development.

## Setup
The IG is built from materials present in the folder structure. However, this repo is not the source of truth for all materials in the IG. For this reason, a custom preprocessing script is called first that:

* Extracts info from the requirements Excel file.
* Downloads materials from ART-DECOR.

These materials are never checked in to git, to prevent managing duplicates.

## Building
### Local
Local building is done using the `_genonce.bat` or `_genonce.sh` scripts in the root dir, like any other FHIR IG build.

This requires Node and Java to be installed.

In addition, it requires [Sushi](https://github.com/FHIR/sushi) to be installed using:

    $ npm install -g fsh-sushi

And it requires that the dependencies for the custom script are installed using:

    $ cd util/scripts
    $ npm install

### Remote
As of this moment, no official publications are made of this IG. The publication location is yet to be determined.

CI builds of each branch are available on <https://build.fhir.org/ig/Nictiz/>. Note that you will not find the actual branches of the repo here; instead you will find each branch prefixed by "`_generated_`". This is a workaround for the custom scripting situation (see [this Zulip thread](https://chat.fhir.org/#narrow/channel/179252-IG-creation/topic/Custom.20pre-processing.20script.20with.20auto-ig-builder)).

## Branching
New content, as well as changed content, must be added using a branch.

A logical approach is to use a branch per generic building block, but there is no inherent rule to do so.

## Content
This IG is the formal _publication_ for the generic building blocks. For now it contains:

* The information requirements; these are published as a FHIR Requirements resource. This provides a mechanism for referring to each requirement using a stable canonical URL.
* All documentation about the generic building block; this is narrative content authored in Markdown.
* The "Afsprakenmodel"; this is a logical model authored using ART-DECOR and published here as a FHIR Logical Model.
* The nl-core profile and associated resources (ValueSets, ConceptMaps, CodeSystems, etc.)

This will be expanded later with other content, like the openEHR template, example material, and possibly test scenario's, executable mappings, etc.

### Landing page for a generic building block
For each generic building block, a landing page needs to be created. This is done by creating a markdown file in the folder "input/pagecontent". The file name should be the English name of the generic building block (followed by `.md`).

In this file, the following line should be created:

> {% include_relative [English building block name]-Concept.md %}

This includes the concept definitions authored using the Excel file (see next section). Other narrative content can be placed below.

Note: don't add a header to this file, the IG Publisher will do this based on the file name.

### Concept definition and information requirements
The concept definition and information requirements are authored using the Excel template.

To add information requirements, place the Excel file in the "input/requirements" folder and commit it to git. Its file name should be the English name of the building block (followed by `.xlsx`).

When building the IG, the preprocessor script will generate a file called "[English building block name]-Concept.md" (which is to be included in the landing page, see section above).

It will also generate a FHIR Requirements resource. This can be used to refer to each requirement using its canonical resource, which will be: `http://nictiz.nl/gbb/Requirements/[English building block name]`.

### Afsprakenmodel
The "afsprakenmodel" is authored using ART-DECOR. The id of the relevant transaction should be noted in the Exel template, using the "ART-DECOR-id" row in the Concept tab.

Upon building, the logical model will be downloaded and added to the guide.

### FHIR materials
FHIR materials can be added manually, using the following folders:
* input/profiles: for profiles and extensions
* input/vocabulary: for ValueSet, CodeSystem, NamingSystem and ConceptMap resources
* input/resources: for example materials and other resources

### Translations
The IG is a multilingual IG, in both Dutch and English. The primary language is Dutch, all English content is seen as a translation.

Translations can come from different sources:

* Content in ART-DECOR should be translated in ART-DECOR itself. Translations will be exported together with the content.
* All narrative content in Markdown can be translated by adding a file with the same name as the original to "input/translations/en/pagecontent".
* Translations of the requirements are still to be determined.

### Menu
The menu is maintained from the file `sushi-config.yaml`. It contains an entry called "menu", and underneath that and entry called "Building blocks".

To add a new building block to the menu, create and entry with the name of the building block and populate it like this:
```yaml
menu:
  ...
  Bouwblokken:
    [Dutch building block name]:
      Overzicht: [English building block name].html (from pagecontent/[building block name]).md
      Requirements: Requirements-[building block name].html
      Afsprakenmodel: StructureDefinition-[English building block name]-model.html
      FHIR-profiel: StructureDefinition-nl-core-[English building block name].html
  ...
```

So e.g. the entry for a Patient building block might look like:
```yaml
menu:
  ...
  Bouwblokken:
    Patient:
      Overzicht: Patient.html
      Requirements: Requirements-Patient.html
      Afsprakenmodel: StructureDefinition-Patient-model.html
      FHIR-profiel: StructureDefinition-nl-core-Patient.html
  ...
```
Other entries may be added if desired, or entries may be left out if they are not ready yet.

## FHIR quality control

The FHIR IG Publisher famously creates a qa.html page that shows all kinds of qa problems in the FHIR materials. In addition to this, the [Nictiz custom tooling](https://github.com/Nictiz/Nictiz-tooling-R4-QA) is installed here. These tools are used in the configured Github actions (configured in `.github/actions/*.yml` from the root of this repo). To use them manually:
* Make sure Docker or Podman is running (when using Podman, enable Docker compatibility mode and install the Podman Compose extension).
* Start the batch scripts "_qa.bat"
* Point your webbrowser at http://localhost:9000. This will give you a menu of the checks that you can perform.

## Supporting tools
### sync-obligations
Obligations for the general actors need to be defined both on the logical model ("afsprakenmodel") and the corresponding FHIR profiles. The logical model is the source of truth for this information, the FHIR profiles implement what's defined functionally.

In order to facilitate this, there's a script called sync-obligations, which can do one of two things:

1. Check wether the obligations in FHIR profiles are applied in accordance to the logical model. This check is part of the [automated quality control](#fhir-quality-control).
2. Set the obligations in FHIR profiles in accordance to the logical model. This is not configured to run automatically, it is always an explicit, manual action.

The script uses the mapping keys in the profiles to match elements to the logical model elements.

The reason that setting obligations needs to be a manual action is that there may be valid reasons for mismatches to occur, for example when the logical model and the FHIR profile don't have a 1-to-1 match (see also the remark below about suppressing errors). So the result of the script has to be manually vetted.

To use the script for checking, use the [quality control web interface](#fhir-quality-control).

To use the script for syncing, you need to use the command line. First, make sure to install the dependencies (adjust slashes according to the OS you're using):

    cd util\scripts\sync-obligations
    npm install
    cd ..\..\..

The script than needs to know a few things:

1. Where the logical models reside. This is normally in the folder "generated\logicalmodels". (Run `_genonce.bat/sh` first to populate or refresh this folder.)
2. Which actors to consider. For FHIR, these are the actors `http://nictiz.nl/gbb/ActorDefinition/ExchangingSystem` and `http://nictiz.nl/gbb/ActorDefinition/ConsumingSystem`.
3. Which profiles to change.

To full command becomes (adjust slashes according to the OS you're using):

    node util\scripts\sync-obligations\sync-obligations.js --actor http://nictiz.nl/gbb/ActorDefinition/ExchangingSystem --actor http://nictiz.nl/gbb/ActorDefinition/ConsumingSystem --lm-folder generated\logicalmodels --suppressions known-issues.yml input\profiles\[profile 1.xml] input\profiles\[profile 2.xml] ...

As said before, sometimes mismatches between the logical model and the profile are intentional. Once it has been decided that there is a valid reason, the script should not flag these known deviations. This can be done using the `known-issues.yml` file used in the QA tooling. The format for marking deviations here is:

```yml
[profile id]:
  unmatched obligations:
    [path of the element]:
      - actor: [canonical url for the actor that doesn't match]
        reason: [explanation for the mismatch]
      - actor: [canonical url for another actor that doesn't match]
        reason: [explanation for the mismatch]
```
