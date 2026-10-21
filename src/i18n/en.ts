import type { Dictionary } from './types';

const en: Dictionary = {
  meta: {
    home: {
      title: 'Saule IT Services — International Corporate Consulting in Europe',
      description:
        'Company formation in Estonia, Cyprus, Romania and Spain, accounting, gaming licensing, corporate bank accounts and customer support outsourcing — tailored to your business.',
    },
    services: {
      title: 'Services — Company Formation, Accounting, Licensing, Banking | Saule IT Services',
      description:
        'Company formation and corporate services, accounting and financial support, customer support outsourcing, B2B/B2C gaming licensing, banking advisory, business structuring and AML/KYC compliance.',
    },
    contact: {
      title: 'Contact — Discuss Your Project | Saule IT Services',
      description: 'Tell us about your goals and we will propose the right jurisdiction and solution. Office in Tallinn, Estonia.',
    },
    privacy: {
      title: 'Privacy Policy | Saule IT Services',
      description: 'How Saule IT Services processes the personal data of website visitors.',
    },
  },
  a11y: {
    skipToContent: 'Skip to content',
    mainMenu: 'Main menu',
    footerMenu: 'Footer menu',
    language: 'Language',
    home: 'Saule IT Services — home',
  },
  nav: { home: 'Home', services: 'Services', contact: 'Contact' },
  cta: { discuss: 'Discuss your project', proposal: 'Request a proposal', allServices: 'All services' },
  home: {
    heroTitle: 'International corporate consulting',
    heroAccent: 'tailored to your business',
    heroText:
      'We advise on jurisdiction selection, assist with company formation, accounting and compliance, and support businesses with licensing and corporate bank accounts.',
    heroGeo:
      'We operate in Estonia, Cyprus, Romania and Spain, with additional support available in Latvia, Lithuania, Malta and the United Kingdom.',
    heroImageAlt: 'Modern glass office building, low angle',
    servicesTitle: 'Our services',
    whyTitle: 'Why choose us',
    why: ['International expertise', 'Trusted partner network', 'Comprehensive approach', 'Flexibility'],
    howTitle: 'How we work',
    steps: [
      { title: 'Assessment', text: 'A brief consultation to understand your business objectives, target jurisdictions and timelines.' },
      { title: 'Proposal', text: 'We assess jurisdictions and licensing options, define the scope, budget and timeline.' },
      { title: 'Implementation', text: 'We coordinate company formation, banking, licensing, accounting and compliance.' },
      { title: 'Ongoing support', text: 'Ongoing advisory services and tailored end-to-end project support.' },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'What we do',
    intro: 'Comprehensive business support in Europe.',
    items: {
      formation: {
        short: 'Company Formation',
        title: 'Company Formation & Corporate Services',
        imageAlt: 'Glass office buildings, low angle',
        points: [
          'Advise on and assist with company formation in Estonia, Cyprus, Romania and Spain, as well as Latvia, Lithuania, Malta and the United Kingdom upon request.',
          'Recommend suitable jurisdictions based on business objectives, taxation, substance requirements, reporting obligations and KYC considerations.',
          'Assist with company registration, preparation of corporate documents and internal policies, and provide ongoing corporate and administrative support.',
        ],
      },
      accounting: {
        short: 'Accounting & Finance',
        title: 'Accounting & Financial Support',
        imageAlt: 'Financial report with charts and a calculator on a desk',
        points: [
          'Comprehensive accounting services, including monthly bookkeeping, transaction processing and reconciliations.',
          'Preparation of annual financial statements and tax returns.',
          'Liaison with auditors and government authorities.',
          'Development of internal financial processes and management reporting.',
        ],
      },
      support: {
        short: 'Customer Support',
        title: 'Customer Support & Outsourcing',
        imageAlt: 'Headphones on a desk',
        points: [
          'Dedicated customer support specialists and teams tailored to business needs.',
          'Handling customer inquiries via live chat, email and other communication channels.',
          'Multilingual customer service, including first-line technical support.',
          'Operational customer assistance, including user registration and verification support.',
          'Quality assurance, KPI monitoring and regular performance reporting.',
        ],
      },
      licensing: {
        short: 'Licensing (B2B, B2C)',
        title: 'Gaming Licensing (B2B & B2C)',
        imageAlt: 'EU flag on the European Parliament facade',
        points: [
          'Experience in obtaining and maintaining gaming licences for online gaming businesses and betting operators.',
          'Assessment of jurisdictions and licensing requirements based on business models and target markets.',
          'Preparation of application documentation, compliance policies and internal procedures.',
        ],
      },
      banking: {
        short: 'Banking Advisory',
        title: 'Banking Advisory',
        imageAlt: 'Glass skyscraper',
        points: [
          'Recommend banking and fintech partners based on business activities and risk profiles.',
          'Assist with opening corporate accounts with banks and European fintech institutions.',
          'Support the completion of KYC/AML questionnaires and communication with payment service providers.',
        ],
      },
      structuring: {
        short: 'Business Structuring',
        title: 'Business Structuring & Compliance',
        imageAlt: 'Modern white office buildings on angled supports',
        points: [
          'Advise on corporate structures for international operations and tax planning.',
          'Develop internal policies and procedures covering AML/KYC, risk management, GDPR and IT compliance.',
          'Coordinate the preparation of legal opinions and provide tailored solutions for complex business requirements.',
        ],
      },
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Discuss your project',
    intro: 'Tell us about your goals and we’ll propose the right solution.',
    formTitle: 'Write to us',
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    message: 'Message',
    messagePlaceholder: 'Tell us about your project',
    send: 'Send message',
    sending: 'Sending…',
    successTitle: 'Thank you!',
    successText: 'Your message has been sent. We’ll get back to you within one business day.',
    sendAnother: 'Send another message',
    error: 'The message could not be sent. Please try again or email us directly.',
    consent: 'By sending the form you agree to the processing of your data as described in our',
    consentLink: 'privacy policy',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    officeLabel: 'Office',
    office: 'Tallinn, Estonia',
    officeNote: '(by appointment)',
    hoursLabel: 'Working hours',
    hours: 'Mon–Fri, 9:00–18:00 (EET)',
    mapAlt: 'Map: office in Tallinn',
    openMap: 'Open in maps',
  },
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: [DATE]',
    draftNote: 'Draft. The text must be reviewed and completed before the site goes live.',
    sections: [
      { heading: 'Who we are', text: 'Saule IT Services, [LEGAL NAME], registry code [CODE], address [ADDRESS], email info@saule-it.com.' },
      { heading: 'What data we collect', text: 'The name, email address and message you send through the contact form. [If analytics is enabled — cookie data and visit statistics.]' },
      { heading: 'Why we use it', text: 'To answer your enquiry and prepare a proposal. The legal basis is your consent and our legitimate interests (Art. 6 GDPR).' },
      { heading: 'Who we share it with', text: '[Form delivery service, hosting provider, analytics provider — list them.] We do not sell personal data.' },
      { heading: 'How long we keep it', text: '[PERIOD], after which the data is deleted.' },
      { heading: 'Your rights', text: 'You can request access to, correction or deletion of your data, or withdraw your consent, by writing to info@saule-it.com. You may also lodge a complaint with the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon).' },
    ],
  },
  footer: { rights: 'All rights reserved.', privacy: 'Privacy policy' },
  notFound: { title: 'Page not found', text: 'It may have been moved or deleted.', back: 'Back to home' },
};

export default en;
