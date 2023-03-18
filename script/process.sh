#/bin/bash
if [ -z "$1" ]; then
  echo "Usage: process.sh [test javascript file]"
  exit -1
fi
clear
node dist/$1.js | ./script/uniq.sh
echo
node dist/$1.js | ./script/conv1.sh
echo
node dist/$1.js | ./script/conv2.sh
echo
node dist/$1.js | ./script/conv3.sh
