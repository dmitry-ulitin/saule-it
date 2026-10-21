import type { Locale } from './config';
import type { Dictionary } from './types';
import en from './en';
import ru from './ru';
import et from './et';

export * from './config';
export type { Dictionary } from './types';

const dictionaries: Record<Locale, Dictionary> = { en, ru, et };

/** All texts of the site in one language. Usage in a page: `const t = useTranslations(lang); t.nav.home` */
export function useTranslations(lang: Locale): Dictionary {
  return dictionaries[lang];
}
