// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import svelte from '@astrojs/svelte';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), svelte(), icon()],
  trailingSlash: "never",
  site: "https://yummypillow.art",
});