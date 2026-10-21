// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain before going live.
// It is used for canonical URLs, hreflang links, Open Graph and sitemap.xml.
const SITE_URL = 'https://saule-it.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory', // /en/services/ -> dist/en/services/index.html
  },
  integrations: [
    sitemap({
      // The root "/" page only redirects to the default language — keep it out of the sitemap.
      // TODO: remove the "/privacy/" exclusion once the final privacy policy is published (isDraft = false).
      filter: (page) => page !== `${SITE_URL}/` && !page.includes('/privacy/'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ru: 'ru', et: 'et' },
      },
    }),
  ],
});
