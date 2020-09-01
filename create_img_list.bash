#!/usr/bin/bash
echo "Creating Image List. Process ID $$"
path="imagedata"

file = "imagelist.txt"

for i in {1..30};
do 
    echo "imagedata/image$i.jpg" >> "imagelist.txt"
done

