#!/bin/bash
grep "NEW" | sort | uniq | grep -oE '[^[:space:]]+' | cut -d' ' -f3 | grep -v "NEED" | grep -v "NEW" | sed -E "s/(.*)/\1,/"
