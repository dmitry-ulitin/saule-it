/**
 * Company details used across the site (header, footer, contact page, Schema.org).
 * Edit them here — every page picks up the change.
 */
interface Company {
  name: string;
  email: string;
  telegram: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  countryCode: string;
  mapUrl: string;
  areaServed: readonly string[];
}

export const company: Company = {
  name: 'Saule IT Services',
  email: 'info@sauleit.com',
  /** Telegram username without the @. */
  telegram: 'sauleit',
  streetAddress: 'Madara tn 25',
  postalCode: '10612',
  city: 'Tallinn',
  countryCode: 'EE',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Madara+tn+25%2C+10612+Tallinn%2C+Estonia',
  /** Countries the company works in (ISO names for Schema.org "areaServed"). */
  areaServed: ['Estonia', 'Cyprus', 'Romania', 'Spain', 'Latvia', 'Lithuania', 'Malta', 'United Kingdom'],
};
