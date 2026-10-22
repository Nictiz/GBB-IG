#!/bin/bash

# Install our tools, if needed
which node > /dev/null
has_node=$?
which npm > /dev/null
has_npm=$?
if [[ $has_node != 0 || $has_npm != 0 ]]; then
  if [[ $write_github == 1 ]]; then
    echo "::group::Installing NodeJS and NPM"
  else
    echo -e "\033[1;37mInstalling NodeJS and NPM.\033[0m"
  fi

  apk add nodejs npm

  if [[ $write_github == 1 ]]; then
    echo "::endgroup::"
  fi
fi

if ! [ -x "$(command -v sync-obligations)" ]; then
  if [[ $write_github == 1 ]]; then
    echo "::group::Installing sync-obligations tool and dependencies"
  else
    echo -e "\033[1;37mInstalling sync-obligations tool and dependencies\033[0m"
  fi

  npm install -g github:Nictiz/Nictiz-tooling-for-IGs

  if [[ $write_github == 1 ]]; then
    echo "::endgroup::"
  fi
fi

if [[ $write_github == 1 ]]; then
  echo "::group::Downloading logical models from ART-DECOR"
  lm_folder=$(mktemp -d)
  excel-to-artifacts.sh --lm --dont-descend input/requirements $lm_folder
  lm_folder=$lm_folder/logicalmodels
  echo "::endgroup::"
else
  lm_folder="generated/logicalmodels"
fi

cd $work_dir
sync-obligations --actor http://ig.nictiz.nl/gbb/ActorDefinition/SendingSystem --actor http://ig.nictiz.nl/gbb/ActorDefinition/ConsumingSystem --lm-folder $lm_folder --suppressions known-issues.yml $@
if [ $? -ne 0 ]; then
    exit_code=1
fi

exit $exit_code