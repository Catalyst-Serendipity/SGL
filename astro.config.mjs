import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@styles': '/src/styles'
      }
    }
  },
  site: "https://Catalyst-Serendipity.github.io/SGL",
  base: "/SGL/",
});