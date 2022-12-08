#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Print shell input lines as they are read
set -v

# Clean build dist folder
rm -rf dist && mkdir dist

# Give rights to user to write in the directory
chmod -R a+w dist

# Build assets
npm run build:webpack

# Copy package.json
cp package.json dist/

# Copy package-lock.json
cp package-lock.json dist/

npm install --omit=dev --prefix dist

# Transpile
npm run babel -- src --out-dir dist/src --source-maps true --ignore "**/*.spec.js, tests/*"
npm run babel -- server --out-dir dist/server --source-maps true --ignore "**/*.spec.js, tests/*"
