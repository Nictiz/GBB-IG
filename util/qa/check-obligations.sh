#!/bin/bash

so_dir=$tools_dir/sync-obligations

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

if [[ ! -f $so_dir/sync-obligations.js ]]; then
  # Copy the script to the tools dir, where it can download dependencies
  
  if [[ $write_github == 1 ]]; then
    echo "::group::Installing sync-obligations tool and dependencies"
  else
    echo -e "\033[1;37mInstalling sync-obligations tool and dependencies\033[0m"
  fi

  cp -r $work_dir/util/scripts/sync-obligations $so_dir

  cd $so_dir
  npm install

  if [[ $write_github == 1 ]]; then
    echo "::endgroup::"
  fi
fi

cd $work_dir
node $so_dir/sync-obligations.js --actor http://nictiz.nl/gbb/ActorDefinition/SendingSystem --actor http://nictiz.nl/gbb/ActorDefinition/ConsumingSystem --lm-folder generated/logicalmodels $@
if [ $? -ne 0 ]; then
    exit_code=1
fi

exit $exit_code