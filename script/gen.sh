#!/bin/bash
echo "==========================================="
echo "$1"
echo "==========================================="
file="./ast-library/$1.ts"

if [ -f "$file" ];
then
  echo "$1 file exists. Not creating."
else
  echo cp ./ast-library/_template.ts "./ast-library/$1.ts"
  cp ./ast-library/_template.ts "./ast-library/$1.ts"
  sed -i "s/placeholder/$1/g" "$file"
fi
