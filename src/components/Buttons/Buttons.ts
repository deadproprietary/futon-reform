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

export const index: Button[] = [
    // me
    {
        img: "pillow.png",
        alt: "yummypillow.art"
    },
    
    /* --- friends --- */
    
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
        img: "cecilia.png",
        link: "https://hl2.sh/",
        alt: "ceciliabarks"
    },
    // zydra
    {
        img: "zydra.png",
        link: "https://zydra.space/",
        alt: "Zydra"
    },
    
    /* --- software --- */
    
    // fedora
    {
        img: "fedora2.png",
        link: "https://fedoraproject.org",
        alt: "Fedora Linux"
    },
    // Krita
    {
        img: "krita.png",
        link: "https://krita.org",
        alt: "Krita"
    },
    // KDE
    {
        img: "kde.gif",
        link: "https://kde.org",
        alt: "KDE"
    },
    // JetBrains
    {
        img: "jetbrains.png",
        link: "https://jetbrains.com",
        alt: "JetBrains IDEs"
    },
    // Moonlight Discord mod
    {
        img: "moonlightnow.gif",
        link: "https://moonlight-mod.github.io/",
        alt: "Moonlight Mod for Discord"
    },
    // Mullvad VPN
    {
        img: "mullvad.png",
        link: "https://mullvad.net/",
        alt: "Mullvad VPN"
    },
    // Thunderbird Mail Client
    {
        img: "thunderbird.gif",
        link: "https://www.thunderbird.net/",
        alt: "Thunderbird E-mail client"
    },
    // uBlock Origin
    {
        img: "ubo.png",
        link: "https://github.com/gorhill/uBlock",
        alt: "uBlock Origin Ad-blocker"
    },
    
]

/* don't forget to comma the closing bracket before

    // foobar
    {
        img: "",
        link: "",
        alt: ""
    }

 */

/* --- credits page --- */

export const credits: Button[] = [
    // me
    {
        img: "pillow.png",
        alt: "yummypillow.art - that's me!"
    },
    // clip studio paint
    {
        img: "clipstudiopaint.png",
        alt: "Clip Studio Paint"
    },
    // fedora dark
    {
        img: "fedora.png",
        alt: "Fedora Linux (dark mode)"
    },
    // fedora light
    {
        img: "fedora2.png",
        alt: "Fedora Linux (lighter mode)"
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