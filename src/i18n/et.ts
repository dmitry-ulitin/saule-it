import type { Dictionary } from './types';

// NB: texts not taken from the brief (contact page, form, privacy, 404) should be checked by a native speaker.
const et: Dictionary = {
  meta: {
    home: {
      title: 'Saule IT Services — rahvusvaheline ärinõustamine Euroopas',
      description:
        'Ettevõtete asutamine Eestis, Küprosel, Rumeenias ja Hispaanias, raamatupidamine, tegevusload, pangakontod ja klienditugi — vastavalt teie ettevõtte vajadustele.',
    },
    services: {
      title: 'Teenused — ettevõtte asutamine, raamatupidamine, tegevusload, pangandus | Saule IT Services',
      description:
        'Ettevõtete asutamine ja korporatiivteenused, raamatupidamine, klienditoe sisseost, hasartmängude tegevusload B2B/B2C, pangandusalane nõustamine, äristruktuurid ja AML/KYC vastavus.',
    },
    contact: {
      title: 'Kontakt — arutame teie projekti | Saule IT Services',
      description: 'Rääkige meile oma vajadustest ja me pakume sobiva jurisdiktsiooni ja lahenduse. Kontor Tallinnas.',
    },
    privacy: {
      title: 'Privaatsuspoliitika | Saule IT Services',
      description: 'Kuidas Saule IT Services töötleb veebilehe külastajate isikuandmeid.',
    },
  },
  a11y: {
    skipToContent: 'Liigu sisu juurde',
    mainMenu: 'Peamenüü',
    footerMenu: 'Jaluse menüü',
    language: 'Keel',
    home: 'Saule IT Services — avalehele',
  },
  nav: { home: 'Avaleht', services: 'Teenused', contact: 'Kontakt' },
  cta: { discuss: 'Arutame teie projekti', allServices: 'Kõik teenused' },
  home: {
    heroTitle: 'Rahvusvaheline ärinõustamine',
    heroAccent: 'vastavalt teie ettevõtte vajadustele',
    heroText:
      'Nõustame sobiva jurisdiktsiooni valikul, abistame ettevõtete asutamisel, raamatupidamise ja vastavuskontrolli korraldamisel ning toetame ettevõtteid tegevuslubade taotlemisel ja pangakontode avamisel.',
    heroGeo:
      'Tegutseme Eestis, Küprosel, Rumeenias ja Hispaanias ning vajaduse korral pakume teenuseid ka Lätis, Leedus, Maltal ja Ühendkuningriigis.',
    heroImageAlt: 'Kaasaegne klaasist büroohoone altvaates',
    servicesTitle: 'Meie teenused',
    whyTitle: 'Miks valida meid?',
    why: ['Rahvusvaheline kogemus', 'Usaldusväärne partnerite võrgustik', 'Terviklik lähenemine', 'Paindlikkus'],
    howTitle: 'Kuidas me töötame?',
    steps: [
      { title: 'Vajaduste kaardistamine', text: 'Lühike konsultatsioon, mille käigus selgitame välja ettevõtte eesmärgid, sihtriigid ja ajakava.' },
      { title: 'Pakkumine', text: 'Võrdleme jurisdiktsioone ja tegevuslubade võimalusi ning määratleme töömahu, eelarve ja ajakava.' },
      { title: 'Elluviimine', text: 'Koordineerime asutamist, pangakontode avamist, tegevuslubade taotlemist, raamatupidamist ja vastavuskontrolli.' },
      { title: 'Jooksev tugi', text: 'Regulaarne nõustamine ja terviklik projektipõhine tugi vastavalt ettevõtte vajadustele.' },
    ],
  },
  services: {
    eyebrow: 'Teenused',
    title: 'Meie teenused',
    intro: 'Terviklik äritugi Euroopas.',
    items: {
      formation: {
        short: 'Ettevõtete asutamine',
        title: 'Ettevõtete asutamine ja korporatiivteenused',
        imageAlt: 'Klaasist büroohooned altvaates',
        points: [
          'Nõustame ja abistame ettevõtete asutamisel Eestis, Küprosel, Rumeenias ja Hispaanias ning soovi korral ka Lätis, Leedus, Maltal ja Ühendkuningriigis.',
          'Aitame valida sobiva jurisdiktsiooni, arvestades ettevõtte eesmärke, maksustamist, tegeliku majandustegevuse nõudeid (substance), aruandluskohustusi ja KYC nõudeid.',
          'Abistame ettevõtte registreerimisel, korporatiivdokumentide ja sisekordade koostamisel ning pakume jooksvat korporatiivset ja administratiivset tuge.',
        ],
      },
      accounting: {
        short: 'Raamatupidamine ja finantsid',
        title: 'Raamatupidamis- ja finantsteenused',
        imageAlt: 'Finantsaruanne graafikute ja kalkulaatoriga laual',
        points: [
          'Terviklik raamatupidamisteenus, sealhulgas igakuine raamatupidamisarvestus, algdokumentide töötlemine ja saldode võrdlemine.',
          'Majandusaasta aruannete ja maksudeklaratsioonide koostamine.',
          'Suhtlus audiitorite ja riigiasutustega.',
          'Ettevõttesiseste finantsprotsesside ja juhtimisaruandluse korraldamine.',
        ],
      },
      support: {
        short: 'Klienditugi',
        title: 'Klienditugi ja teenuste sisseost',
        imageAlt: 'Kõrvaklapid töölaual',
        points: [
          'Ettevõtte vajadustele vastavate klienditoe spetsialistide ja meeskondade pakkumine.',
          'Klientide päringute käsitlemine veebivestluse, e-posti ja muude suhtluskanalite kaudu.',
          'Mitmekeelne klienditugi, sealhulgas esmatasandi tehniline tugi.',
          'Klientide operatiivne toetamine, sealhulgas kasutajate registreerimise ja isikusamasuse kontrollimise protsessides.',
          'Teenuse kvaliteedikontroll, tulemusnäitajate (KPI) jälgimine ja regulaarne aruandlus.',
        ],
      },
      licensing: {
        short: 'Tegevusload (B2B, B2C)',
        title: 'Tegevuslubade taotlemine (B2B ja B2C)',
        imageAlt: 'Euroopa Liidu lipp Europarlamendi fassaadil',
        points: [
          'Kogemus online-hasartmänguettevõtete ja kihlveokorraldajate tegevuslubade taotlemisel ning nendega seotud nõuete täitmise toetamisel.',
          'Jurisdiktsioonide ja tegevusloanõuete analüüs vastavalt ärimudelile ja sihtturgudele.',
          'Taotlusdokumentide, vastavuskontrolli põhimõtete ja sisemiste protseduuride ettevalmistamine.',
        ],
      },
      banking: {
        short: 'Pangandusalane nõustamine',
        title: 'Pangandusalane nõustamine',
        imageAlt: 'Klaasist pilvelõhkuja',
        points: [
          'Sobivate pankade ja finantstehnoloogiaettevõtete soovitamine, lähtudes ettevõtte tegevusest ja riskiprofiilist.',
          'Abistamine ettevõtte pangakontode avamisel pankades ja Euroopa finantstehnoloogiaasutustes.',
          'KYC/AML küsimustike täitmise ning makseteenuse pakkujatega suhtlemise toetamine.',
        ],
      },
      structuring: {
        short: 'Äristruktuuride kujundamine',
        title: 'Äristruktuuride kujundamine ja individuaalsed lahendused',
        imageAlt: 'Kaasaegsed valged büroohooned kaldtugedel',
        points: [
          'Nõustamine rahvusvahelise äritegevuse ja maksuplaneerimise jaoks sobivate ettevõttestruktuuride valikul.',
          'Sisemiste poliitikate ja protseduuride väljatöötamine AML/KYC, riskijuhtimise, GDPR-i ja IT-vastavuse valdkonnas.',
          'Õiguslike arvamuste koostamise koordineerimine ning individuaalsete lahenduste pakkumine keerukatele äriküsimustele.',
        ],
      },
    },
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Arutame teie projekti',
    intro: 'Rääkige meile oma vajadustest ja me pakume sobiva lahenduse.',
    formTitle: 'Kirjutage meile',
    name: 'Nimi',
    namePlaceholder: 'Teie nimi',
    email: 'E-post',
    emailPlaceholder: 'teie@email.ee',
    message: 'Sõnum',
    messagePlaceholder: 'Kirjeldage oma projekti',
    send: 'Saada',
    sending: 'Saadame…',
    successTitle: 'Aitäh!',
    successText: 'Teie sõnum on saadetud. Vastame ühe tööpäeva jooksul.',
    sendAnother: 'Saada uus sõnum',
    error: 'Sõnumi saatmine ebaõnnestus. Proovige uuesti või kirjutage meile e-postiga.',
    consent: 'Vormi saates nõustute oma andmete töötlemisega vastavalt meie',
    consentLink: 'privaatsuspoliitikale',
    emailLabel: 'E-post',
    telegramLabel: 'Telegram',
    officeLabel: 'Kontor',
    office: 'Madara tn 25, 10612 Tallinn, Eesti',
    officeNote: '(kokkuleppel)',
    hoursLabel: 'Tööaeg',
    hours: 'E–R, 9:00–18:00 (EET)',
    mapAlt: 'Kaart: kontor Tallinnas',
    openMap: 'Ava kaardil',
  },
  privacy: {
    title: 'Privaatsuspoliitika',
    updated: 'Viimati uuendatud: [KUUPÄEV]',
    draftNote: 'Mustand. Tekst tuleb enne veebilehe avaldamist üle vaadata ja täiendada.',
    sections: [
      { heading: 'Kes me oleme', text: 'Saule IT Services, [JURIIDILINE NIMI], registrikood [KOOD], aadress [AADRESS], e-post info@sauleit.com.' },
      { heading: 'Milliseid andmeid me kogume', text: 'Nimi, e-posti aadress ja sõnum, mille saadate kontaktvormi kaudu. [Kui analüütika on lubatud — küpsiste andmed ja külastuste statistika.]' },
      { heading: 'Milleks me neid kasutame', text: 'Teie päringule vastamiseks ja pakkumise koostamiseks. Õiguslik alus on teie nõusolek ja meie õigustatud huvi (IKÜM art 6).' },
      { heading: 'Kellele me neid edastame', text: '[Vormiteenus, majutusteenus, analüütikateenus — loetleda.] Me ei müü isikuandmeid.' },
      { heading: 'Kui kaua me neid säilitame', text: '[PERIOOD], seejärel andmed kustutatakse.' },
      { heading: 'Teie õigused', text: 'Võite taotleda juurdepääsu oma andmetele, nende parandamist või kustutamist ning võtta nõusoleku tagasi, kirjutades aadressil info@sauleit.com. Samuti võite pöörduda Andmekaitse Inspektsiooni poole.' },
    ],
  },
  footer: { rights: 'Kõik õigused kaitstud.', privacy: 'Privaatsuspoliitika' },
  notFound: { title: 'Lehte ei leitud', text: 'See võib olla teisaldatud või kustutatud.', back: 'Avalehele' },
};

export default et;
