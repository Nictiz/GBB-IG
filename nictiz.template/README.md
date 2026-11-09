# Nictiz-IG-template
Common Nictiz template for implementation guides produced by the HL7 IG Publisher.

## Using this template
To use this template in an implemention guide, open the file "ig.ini" in the project root and set the key `template` to:

    template = https://github.com/Nictiz/Nictiz-IG-template/

This will pick up the latest version. However, it is good practice to use an explicit verison of this template to prevent unanticipated changes:

    template = https://github.com/Nictiz/Nictiz-IG-template/tree/[version]

Where versions can be a git tag, or if needed, a git commit hash. A branch name could also be used to test a new development.

## Modifying this template
Modifications need to be done in a branch and merged to main via a pull request.

Please accompany the changes with a successful build on the HL7 build server. This visualizes the changes for the reviewer. It also ensures that the modified version still works on the build server (some modifications can make a template "untrusted", in which case the build server refuses to use the template).

To build an IG with the specified branch, see the instructions above.