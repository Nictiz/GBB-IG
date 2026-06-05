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

    $ cd scripts
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

### Translations
The IG is a multilingual IG, in both Dutch and English. The primary language is Dutch, all English content is seen as a translation.

Translations can come from different sources:

* Content in ART-DECOR should be translated in ART-DECOR itself. Translations will be exported together with the content.
* All narrative content in Markdown can be translated by adding a file with the same name as the original to "input/translations/en/pagecontent".
* Translations of the requirements are still to be determined.