import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@styles': '/src/styles'
      }
    }
  },
  site: "https://sotogarenglama.biz.id",
  base: "/",
  integrations: [sitemap()],
});