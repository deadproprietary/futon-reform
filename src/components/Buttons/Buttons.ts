/**
 * Buttons script
 * Contains the list of all buttons as a constant, along with their types.
 * Thank you notnite.
 */

export type Button = {
    img: string;
    link?: string;
    alt: string;
};

export const buttons: Button[] = [
    // me
    {
        img: "pillow.png",
        alt: "yummypillow.art"
    },
    // notnite
    {
        img: "notnite.png",
        link: "https://www.notnite.com/",
        alt: "notnite"
    },
    // 88x31
    {
        img: "88x31.png",
        link: "https://eightyeightthirty.one",
        alt: "eighty eight thirty one"
    },
    // selene
    {
        img: "gothzip.png",
        link: "https://www.goth.zip/",
        alt: "Selene"
    },
    // CSP
    {
        img: "clipstudiopaint.png",
        link: "https://www.clipstudio.net/en/",
        alt: "Clip Studio Paint"
    },
    // Astro
    {
        img: "astro.png",
        link: "https://astro.build/",
        alt: "Astro"
    },
    // Cobalt
    {
        img: "cobalt.png",
        link: "https://cobaltmusic.fi/",
        alt: "Cobalt Music"
    },
    // Rafl
    {
        img: "raflcoopter.gif",
        link: "https://raflcoopter.carrd.co/",
        alt: "Raflcoopter"
    },
    // mem
    {
        img: "mem451.png",
        link: "https://mem451.com/",
        alt: "Mem451"
    },
    // cecilia
    {
        img: "jay.png",
        link: "https://hl2.sh/",
        alt: "Jay"
    },
    // zydra
    {
        img: "zydra.png",
        link: "https://zydra.space/",
        alt: "Zydra"
    }
]

/* don't forget to comma the closing bracket before

    // foobar
    {
        img: "",
        link: "",
        alt: ""
    }

 */