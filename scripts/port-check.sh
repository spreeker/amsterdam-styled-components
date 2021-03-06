#!/usr/bin/env bash

RED='\033[0;31m'
NC='\033[0m'
PORT='6006'

if ! type lsof &> /dev/null; then
    echo "Skipping port check... Make sure storybook is not running."
elif lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo -e "${RED}Error, port ${PORT} is in use. Please kill this process and make sure you are not
    running storybook, as this will prevent typescript from building.${NC}"
    exit 1
fi
