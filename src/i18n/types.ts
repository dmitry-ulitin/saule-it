import type { PageKey } from './config';
import type { ServiceId } from '../data/services';

/** Shape of one language file. TypeScript reports any text that is missing in en.ts / ru.ts / et.ts. */
export interface Dictionary {
  meta: Record<PageKey, { title: string; description: string }>;
  a11y: { skipToContent: string; mainMenu: string; footerMenu: string; language: string; home: string };
  nav: { home: string; services: string; contact: string };
  cta: { discuss: string; allServices: string };
  home: {
    heroTitle: string;
    heroAccent: string;
    heroText: string;
    heroGeo: string;
    heroImageAlt: string;
    servicesTitle: string;
    whyTitle: string;
    why: [string, string, string, string];
    howTitle: string;
    steps: [Step, Step, Step, Step];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Record<ServiceId, { short: string; title: string; points: string[]; imageAlt: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    formTitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successTitle: string;
    successText: string;
    sendAnother: string;
    error: string;
    /** Text before the privacy-policy link under the form… */
    consent: string;
    /** …and the link text itself, in the right grammatical case. */
    consentLink: string;
    emailLabel: string;
    telegramLabel: string;
    officeLabel: string;
    office: string;
    officeNote: string;
    hoursLabel: string;
    hours: string;
    mapAlt: string;
    openMap: string;
  };
  privacy: { title: string; updated: string; draftNote: string; sections: { heading: string; text: string }[] };
  footer: { rights: string; privacy: string };
  notFound: { title: string; text: string; back: string };
}

interface Step {
  title: string;
  text: string;
}
