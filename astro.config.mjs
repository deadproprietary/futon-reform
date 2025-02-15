// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), svelte()],
  trailingSlash: "never",
  site: "https://yummypillow.art",
});