#!/bin/bash
set -euo pipefail
publisher_jar=publisher.jar
input_cache_path=./input-cache/
echo Checking internet connection...
curl -sSf https://tx.fhir.org > /dev/null


if [ $? -eq 0 ]; then
	echo "Online"
	txoption=""
else
	echo "Offline"
	txoption="-tx n/a"
fi

echo "$txoption"

# Run the script to convert and download the content based on the Excel input.
node util/scripts/excel-to-artifacts/excel-to-artifacts.js input/requirements generated

# Sushi is run automatically by the publisher if the folder input/fsh exists. We're not guaranteed to have this
# folder, but Sushi needs to run to handle sushi-config.yaml. So it's called here explicitly, and suppressed from
# the validator.jar call.
sushi .

export JAVA_TOOL_OPTIONS="-Dfile.encoding=UTF-8"

publisher=$input_cache_path/$publisher_jar
if test -f "$publisher"; then
	java -jar $publisher -ig . -no-sushi $txoption $*
else
	publisher=../$publisher_jar
	if test -f "$publisher"; then
		java -jar $publisher -ig . -no-sushi $txoption $*
	else
		echo IG Publisher NOT FOUND in input-cache or parent folder.  Please run _updatePublisher.  Aborting...
	fi
fi
