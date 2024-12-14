find $1 -type f -name "*.docx" -print0 | while IFS= read -r -d $'\0' FNAME; do
    BNAME=$(basename "$FNAME" .docx)
    DNAME=$(dirname "$FNAME")
    echo "$FNAME"
    
    pandoc -t commonmark -o "$DNAME/$BNAME.md" "$FNAME"
    pandoc -t html -o "$DNAME/$BNAME.html" "$FNAME"
    pandoc -t plain -o "$DNAME/$BNAME.txt" "$FNAME"
done