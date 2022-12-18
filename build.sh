#!/usr/bin/env bash
set -e

if ! command -v minify &> /dev/null
then
    echo "minify não está instalado"
    exit
fi

mkdir -p dist

minify src/index.html > index.html
minify src/pre-wedding.html > pre-wedding.html
minify src/script.js > script.js
minify src/styles.css > styles.css

sed -i s:../assets:./assets:g index.html pre-wedding.html
sed -i s:../favicon:./favicon:g index.html pre-wedding.html
