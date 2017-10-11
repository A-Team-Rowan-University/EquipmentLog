#!/bin/sh

# Copies files to build dir
# Puts JS and CSS into HTML files

rm -r build
mkdir build

echo "Making files Google Scripts compatable"

for i in `ls src/*`; do
    js=`cat $i`
    filename=`basename $i`

    echo -e\
        "<script>\n"\
        "$js\n"\
        "</script>\n"\
    > build/$filename.html
done

if [ "$1" = "deploy" ]; then
    gapps upload
fi
