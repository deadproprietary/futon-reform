<!--
    RandomTicker component
    A Svelte component to display a random line of text on the index page subtitle.
    This is the only Svelte component in the codebase. This is because Astro can't
    saturate components by itself.
-->

<script>
    import { randomLines } from "./lines.ts"
    
    let pickedLine = randomLines[Math.floor( Math.random() * randomLines.length )];
    let i=0, text, c=0;
    let t = document.getElementById('tickertext');
    
    setTimeout(() => {type();}, 600);

    function erase() {
        t.innerHTML = '';
        c++;
        if (c == 13) {
            pickedLine = " surprised you're still reading these. Got nothing better to do?"
            // if you're reading this here, i guess you got nothing better to do still.
        } else {
            pickedLine = randomLines[Math.floor( Math.random() * randomLines.length )];
        }
        text = '';
        i = 0;
        t.classList.remove('tickertext-highlight');
        t.classList.add('tickertext-normal');
        setTimeout(() => {type();}, 900);
    }
    
    function highlight() {
        t.classList.remove('tickertext-normal');
        t.classList.add('tickertext-highlight');
    }
    
    function type() {
        text = pickedLine.slice(0, i++);

        t.innerHTML = text;
        
        let tickerTimeout = setTimeout(type, 40+Math.random()*60);
        if (text === pickedLine) {
            clearTimeout(tickerTimeout);
            setTimeout(() => {highlight(); setTimeout(() => {erase();}, 280)}, 7500); // this sucks
        }
    }
</script>

