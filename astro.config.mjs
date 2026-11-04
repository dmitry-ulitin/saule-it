// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain before going live.
// It is used for canonical URLs, hreflang links, Open Graph and sitemap.xml.
const SITE_URL = 'https://sauleit.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  // Start loading a page as soon as the visitor hovers (or touches) a link, so the transition feels instant.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  build: {
    format: 'directory', // /en/services/ -> dist/en/services/index.html
  },
  integrations: [
    sitemap({
      // The root "/" page only redirects to the default language — keep it out of the sitemap.
      filter: (page) => page !== `${SITE_URL}/`,
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ru: 'ru', et: 'et' },
      },
    }),
  ],
});
