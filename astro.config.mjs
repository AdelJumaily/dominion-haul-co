// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// Change SITE to the real domain before launch — it drives sitemap.xml,
// canonical URLs and every absolute URL inside the Schema.org JSON-LD.
const SITE = 'https://dominionhaulco.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const u = item.url;
        if (u === `${SITE}/` || u === `${SITE}`) {
          item.priority = 1.0;
          item.changefreq = 'daily';
          return item;
        }
        // City × service landers — high commercial intent
        if (/\/locations\/[^/]+\/[^/]+\/?$/.test(u)) {
          item.priority = 0.95;
          item.changefreq = 'weekly';
          return item;
        }
        if (u.includes('/locations/') || u.includes('/services/')) {
          item.priority = 0.9;
          return item;
        }
        if (u.includes('/pricing') || u.includes('/contact')) {
          item.priority = 0.85;
          return item;
        }
        if (u.includes('/blog/')) {
          item.priority = 0.5;
          item.changefreq = 'monthly';
          return item;
        }
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
