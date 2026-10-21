/** Languages of the site. The first-level URL segment is the language: /en/, /ru/, /et/. */
export const locales = ['en', 'ru', 'et'] as const;
export type Locale = (typeof locales)[number];

/** Where "/" redirects to, and the hreflang "x-default". Change here if the main language changes. */
export const defaultLocale: Locale = 'en';

/** Label in the language switcher. */
export const localeLabels: Record<Locale, string> = { en: 'EN', ru: 'RU', et: 'ET' };

/** Value for <html lang> and Open Graph og:locale. */
export const htmlLang: Record<Locale, string> = { en: 'en', ru: 'ru', et: 'et' };
export const ogLocale: Record<Locale, string> = { en: 'en_GB', ru: 'ru_RU', et: 'et_EE' };

/** The pages of the site. The key is used for translations; the value is the URL slug after /<lang>/. */
export const pages = {
  home: '',
  services: 'services/',
  contact: 'contact/',
  privacy: 'privacy/',
} as const;
export type PageKey = keyof typeof pages;

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** For getStaticPaths() in src/pages/[lang]/*: builds every page once per language. */
export function localeStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

/** Relative URL of a page in a language, e.g. localizedPath('ru', 'services') -> "/ru/services/". */
export function localizedPath(lang: Locale, page: PageKey, hash?: string): string {
  return `/${lang}/${pages[page]}${hash ? `#${hash}` : ''}`;
}
