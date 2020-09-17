#!/usr/bin/bash
destpath="ocr_data_text"
cd $destpath
i=1
n=30
for i in {1..30};
do 
    touch "ds$i.txt"
    # i=`expr $i + 1`
done
