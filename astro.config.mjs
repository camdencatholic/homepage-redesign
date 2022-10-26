import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vue from "@astrojs/vue"
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), svelte(), react(), prefetch(), vue()],
  site: 'https://camdencatholic.github.io',
  base: "/homepage-redesign/",
  outDir: "./docs"
});