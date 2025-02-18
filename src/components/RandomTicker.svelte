<script>
    import { randomLines } from "../lines"
    
    let pickedLine = randomLines[Math.floor( Math.random() * randomLines.length )];
    
    let i=0, isTag, text;
    
    function type() {
        text = pickedLine.slice(0, i++);
        

        document.getElementById('tickertext').innerHTML = text;

        let char = text.slice(-1);
        if( char === '<' ) isTag = true;
        if( char === '>' ) isTag = false;

        if (isTag) return type();
        setTimeout(type, Math.random()*50);
    }
    type();
    
</script>

<!-- {randomLines[Math.floor( Math.random() * randomLines.length )]} -->
