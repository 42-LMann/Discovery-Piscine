#!/bin/bash
if [ $# -eq 0 ] 
then
    echo "No arguments supplied"
else
    if [ $# -eq 1 ]; then
        echo "$1" | tr '\ ' '\n'
    elif [ $# -eq 2 ]; then 
        echo "$1 $2" | tr '\ ' '\n'
    else
        echo "$1 $2 $3" | tr '\ ' '\n'
    fi
fi