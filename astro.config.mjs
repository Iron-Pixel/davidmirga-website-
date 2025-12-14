// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind'; // Jetzt kennt er das!

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://davidmirga.com',

  integrations: [react(), tailwind(), sitemap()],
});