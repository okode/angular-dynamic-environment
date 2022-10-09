#!/bin/bash
set -eo pipefail

ENV=$1

if [[ $ENV != "pre" ]] && [[ $ENV != "pro" ]]
then
  echo "Invalid environment: ${ENV} (valid ones: pre, pro)"
  exit 1
fi

# Copy generated site to deploy-folder
rm -rf deploy-${ENV}
mkdir -p deploy-${ENV}
cp -R dist/* deploy-${ENV}

# Set selected environment
cd deploy-${ENV}
MD5=$(md5 -q assets/environments/environment.${ENV}.js)
mv assets/environments/environment.${ENV}.js assets/environments/environment.${MD5}.js
rm -rf assets/environments/environment.js
rm -rf assets/environments/environment.pre.js
rm -rf assets/environments/environment.pro.js
sed -i '' "s/environment.js/environment.${MD5}.js/" index.html
cd ..

echo "Successfully deployed ${ENV} environment to deploy-${ENV} folder."
echo "For testing run: cd deploy-${ENV} && npx http-server"