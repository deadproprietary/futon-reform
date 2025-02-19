<script>
    import { randomLines } from "../lines"
    
    let pickedLine = randomLines[Math.floor( Math.random() * randomLines.length )];
    
    let i=0, isTag, text;

    function clearElement(elementID)
    {
        document.getElementById(elementID).innerHTML = "";
    }
    function type() {
        text = pickedLine.slice(0, i++);

        document.getElementById('tickertext').innerHTML = text;

        let char = text.slice(0);
        if( char === '<' ) isTag = true;
        if( char === '>' ) isTag = false;

        if (isTag) return type();
        let tickerTimeout = setTimeout(type, Math.random()*50);
        if (text === pickedLine) {
            clearTimeout(tickerTimeout);
        }
    }
    type();
    
</script>