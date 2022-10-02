#!/bin/bash
docker run --rm -it -v /$(pwd):/src -w //src -p 6006:6006 -p 3000:3000 node:16 ./.devtools/run-server.sh