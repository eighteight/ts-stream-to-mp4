#!/bin/bash
cd videos/requiem
ls
for i in `ls *.ts | sort -V`; do echo "file $i"; done >> mylist.txt
ffmpeg -f concat -i mylist.txt -c copy -bsf:a aac_adtstoasc video-joined.mp4
