import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://valentaxi.pro",
  integrations: [
    react(),
    tailwind(),
    compress(),
    partytown(),
    sitemap(),
    robotsTxt(),
  ],
  experimental: {
    assets: true,
  },
});
