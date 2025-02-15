import type {APIContext, ImageMetadata} from "astro";
import { getCollection } from "astro:content";

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
