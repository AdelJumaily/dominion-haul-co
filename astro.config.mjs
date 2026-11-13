// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// Change SITE to the real domain before launch — it drives sitemap.xml,
// canonical URLs and every absolute URL inside the Schema.org JSON-LD.
const SITE = 'https://dominionhaul.com';

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
      // 404 is noindex; keep it out of the sitemap too.
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const u = item.url;
        if (u === `${SITE}/` || u === `${SITE}`) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
          return item;
        }
        // Service pages carry the commercial intent.
        if (u.includes('/services/')) {
          item.priority = 0.9;
          return item;
        }
        if (u.includes('/pricing')) {
          item.priority = 0.9;
          return item;
        }
        if (u.includes('/locations/')) {
          item.priority = 0.8;
          return item;
        }
        if (u.includes('/contact') || u.includes('/commercial')) {
          item.priority = 0.7;
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
