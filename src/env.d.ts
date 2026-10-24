interface ImportMetaEnv {
  readonly PUBLIC_WEB3FORMS_KEY?: string;
  /** Google Analytics 4 measurement ID; empty = no analytics and no cookie banner. */
  readonly PUBLIC_GA4_ID?: string;
}

interface Window {
  /** Google tag (GA4). Defined by CookieConsent.astro only when PUBLIC_GA4_ID is set. */
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
}
