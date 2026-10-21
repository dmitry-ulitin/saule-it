/**
 * Company details used across the site (header, footer, contact page, Schema.org).
 * Edit them here — every page picks up the change.
 */
interface Company {
  name: string;
  email: string;
  phone: string;
  phonePlaceholder: string;
  city: string;
  countryCode: string;
  mapUrl: string;
  areaServed: readonly string[];
}

export const company: Company = {
  name: 'Saule IT Services',
  email: 'info@saule-it.com',
  /** TODO: real phone number in international format, e.g. '+372 5555 5555'. Leave empty to hide it in Schema.org. */
  phone: '',
  /** Shown on the site while the real number is unknown. */
  phonePlaceholder: '+372 [PHONE]',
  city: 'Tallinn',
  countryCode: 'EE',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tallinn%2C+Estonia',
  /** Countries the company works in (ISO names for Schema.org "areaServed"). */
  areaServed: ['Estonia', 'Cyprus', 'Romania', 'Spain', 'Latvia', 'Lithuania', 'Malta', 'United Kingdom'],
};
