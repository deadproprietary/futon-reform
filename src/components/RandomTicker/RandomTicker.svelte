<!--
    RandomTicker component
    A Svelte component to display a random line of text on the index page subtitle.
    This is the only Svelte component in the codebase. This is because Astro can't
    saturate components by itself.
-->

<script>
    import { randomLines } from "./lines.ts"
    
    let pickedLine = randomLines[Math.floor( Math.random() * randomLines.length )];
    
    let i=0, isTag, text;
    
    setTimeout(() => {type();}, 600);
    
    function type() {
        text = pickedLine.slice(0, i++);

        document.getElementById('tickertext').innerHTML = text;

        let char = text.slice(0);
        if( char === '<' ) isTag = true;
        if( char === '>' ) isTag = false;

        if (isTag) return type();
        let tickerTimeout = setTimeout(type, 40+Math.random()*30);
        if (text === pickedLine) {
            clearTimeout(tickerTimeout);
            setTimeout(() => {document.getElementById('tickertext').style.animation = 'none';}, 1000);
        }
    }
    
    
</script>