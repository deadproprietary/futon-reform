import {z, defineCollection} from "astro:content";

import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog"}),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            date: z.date(),
            cover: image().optional(),
            ignoreAgeWarning: z.boolean().optional(),
            wip: z.boolean().optional()
        })
});

export const collections = {
    blog
}