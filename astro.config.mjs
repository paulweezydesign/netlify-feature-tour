import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind"; // https://astro.build/config

import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://feature-tour.netlify.app',
  integrations: [preact(), sitemap({
    canonicalURL: 'https://feature-tour.netlify.app'
  }), tailwind(), svelte(), react(), alpinejs()]
});