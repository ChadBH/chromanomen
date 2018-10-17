##################################################################################################################################
# Deployment
# ----------

echo "$DEPLOYMENT_SOURCE"
echo "$NPM_CMD"
echo "$DEPLOYMENT_TARGET"

if [ -e "$DEPLOYMENT_SOURCE/package.json" ]; then

  cd "$DEPLOYMENT_SOURCE"

  eval $NPM_CMD install

  exitWithMessageOnError "npm failed"

  cd - > /dev/null

fi


if [ -e "$DEPLOYMENT_SOURCE/package.json" ]; then

  cd "$DEPLOYMENT_SOURCE"

  eval ./node_modules/@angular/cli/bin/ng build eval $NPM_CMD install

  exitWithMessageOnError "npm build failed"

  cd - > /dev/null

fi


if [ "$IN_PLACE_DEPLOYMENT" -ne "1" ]; then


  "$KUDU_SYNC_CMD" -v 50 -f "$DEPLOYMENT_SOURCE/dist/" -t "$DEPLOYMENT_TARGET" \

                -n "$NEXT_MANIFEST_PATH" -p "$PREVIOUS_MANIFEST_PATH" \

                -i "e2e;node_modules;src;.angular-cli.json;.deployment;.gitignore;az.ps1;deploy.sh;package.json;README.md;tsconfig.json;"

  exitWithMessageOnError "Kudu Sync failed"

  cd - > /dev/null

fi

##################################################################################################################################
echo "Finished successfully."
