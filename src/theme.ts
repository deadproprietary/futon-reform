// nottheme theming settings
// https://github.com/NotNite/nottheme

import type { Settings } from "nottheme";

const settings: Settings = {
    options: {
        theme: {
            name: "Font",
            choices: ["option1", "option2", "option3", "option4"],
            names: {
                option1: "Atkinson Hyperlegible",
                option2: "Zilla Slab",
                option3: "IBM Plex Mono",
                option4: "system/browser default"
            },

            values: {
                option1: {

                    "--font": "'Atkinson Hyperlegible'",
                    "--space": "1.39em",
                    "--tween": "0.02rem"
                },
                option2: {
                    "--font": "'Zilla Slab'",
                    "--space": "1.31em",
                    "--tween": "0.02rem"
                },
                option3: {
                    "--font": "'IBM Plex Mono'",
                    "--space": "1.40em",
                    "--tween": "-0.04rem"
                },
                option4: {
                    "--font": "sans-serif",
                    "--space": "auto",
                    "--tween": "auto"
                }
            },

            default: [
                {
                    query: "(prefers-color-scheme: dark)",
                    choice: "option1"
                }
            ]
        }
    }
};

export default settings;
