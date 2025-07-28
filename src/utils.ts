// various typescript utilities used in various places on the site.

import type {APIContext, ImageMetadata} from "astro";
import { getCollection } from "astro:content";
import * as child_process from "node:child_process";

export function getBaseURL(context?: APIContext) {
    let baseUrl = import.meta.env.PROD
        ? import.meta.env.SITE
        : (context?.url?.origin ?? "http://localhost:4321");
    if (baseUrl.at(-1) === "/") baseUrl = baseUrl.slice(0, -1);
    return baseUrl;
}

export async function blogPosts() {
    return (await getCollection("blog")).filter(
        (post) => post.data.wip !== true || !import.meta.env.PROD
    );
}
export const longhash = child_process.execSync("git rev-parse HEAD").toString().trim();
export const shorthash = child_process.execSync("git rev-parse --short HEAD").toString().trim();
export const commitMsg = child_process.execSync(`git show -s --oneline ${longhash}`).toString().trim().substring(8);

export const date = new Date().toISOString().substring(0,19).replace("T",", ") + " UTC";