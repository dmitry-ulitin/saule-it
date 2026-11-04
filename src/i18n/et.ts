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
    updated: 'Viimati uuendatud: 4. november 2026',
    draftNote: 'Mustand. Tekst tuleb enne veebilehe avaldamist üle vaadata ja täiendada.',
    sections: [
      {
        heading: 'Kes me oleme',
        body: [
          'Teie isikuandmete vastutav töötleja on Saule IT Services OÜ, registrikood 12835454, Madara tn 25, 10612 Tallinn, Eesti. Privaatsusküsimuste korral kirjutage aadressil info@sauleit.com.',
          'See poliitika kehtib veebilehe sauleit.com ja selle kaudu meile saadetud päringute kohta. Isikuandmete töötlemist klientidele teenuste osutamisel reguleerib leping vastava kliendiga.',
        ],
      },
      {
        heading: 'Milliseid andmeid me kogume ja miks',
        body: [
          [
            'Kontaktvorm: nimi, e-posti aadress ja sõnum. Kasutame neid teie päringule vastamiseks ja pakkumise koostamiseks. Õiguslik alus on teie taotlusel enne lepingu sõlmimist tehtavad toimingud ja meie õigustatud huvi päringutele vastata (IKÜM art 6 lg 1 p b ja f).',
            'E-post ja Telegram: teie kontaktandmed ja kirjavahetuse sisu. Neid töödeldakse samal eesmärgil ja samal alusel nagu kontaktvormi andmeid.',
            'Veebilehe statistika, ainult juhul, kui olete küpsised heaks kiitnud: külastatud lehed, ligikaudne asukoht, seadme ja brauseri andmed, külastuse allikas ning kontaktvormi saatmise fakt. Kasutame neid, et mõista veebilehe kasutamist ja seda paremaks muuta. Õiguslik alus on teie nõusolek (IKÜM art 6 lg 1 p a).',
            'Tehnilised logid: majutusteenuse pakkuja võib salvestada IP-aadressi, brauseri andmed ja iga päringu aja. Need on vajalikud veebilehe töökindluse ja turvalisuse tagamiseks. Õiguslik alus on meie õigustatud huvi (IKÜM art 6 lg 1 p f).',
          ],
          'Te ei ole kohustatud meile andmeid esitama, kuid ilma kontaktandmeteta ei saa me teie päringule vastata. Me ei kasuta teie andmeid automatiseeritud otsuste tegemiseks, profiilianalüüsiks ega reklaamiks.',
        ],
      },
      {
        heading: 'Küpsised ja brauseri salvestusruum',
        body: [
          'Google Analyticsi küpsised salvestatakse alles pärast nupu „Nõustun“ vajutamist. Enne seda ei laadita Google’ist midagi.',
          [
            '_ga: eristab külastajaid; säilib kuni 2 aastat.',
            '_ga_<ID>: hoiab külastuse olekut; säilib kuni 2 aastat.',
            'cookie-consent: kirje brauseri kohalikus salvestusruumis, mis jätab teie valiku meelde. Seda ei edastata kellelegi ja see säilib, kuni kustutate brauseri andmed.',
          ],
          'Oma valikut saate igal ajal muuta iga lehe allosas oleva lingi „Küpsiste seaded“ kaudu. Kui keeldute pärast nõusoleku andmist, analüütika peatub ja _ga-küpsised kustutatakse.',
          'Kontaktilehe kaart on kohalik pilt ja fondid laaditakse meie enda veebilehelt, seega ei võeta nende puhul ühendust kolmandate isikutega. Link Google Mapsile avab Google’i veebilehe alles sellel klõpsamisel.',
        ],
      },
      {
        heading: 'Kellele me neid edastame',
        body: [
          'Me ei müü isikuandmeid. Edastame neid ainult teenusepakkujatele, kes aitavad meil veebilehte hallata, ning ametiasutustele, kui seadus seda nõuab:',
          [
            'Web3Forms (web3forms.com) edastab kontaktvormi sõnumid meie postkasti ja filtreerib rämpsposti.',
            'Google Ireland Limited pakub teenust Google Analytics, kui olete küpsised heaks kiitnud.',
            'Majutus- ja e-posti teenuse pakkujad säilitavad veebilehte ja meie kirjavahetust.',
            'Telegram, kui otsustate meiega seal ühendust võtta. Sellele vestlusele kehtib Telegrami enda privaatsuspoliitika.',
          ],
        ],
      },
      {
        heading: 'Edastamine väljapoole EMP-d',
        body: [
          'Mõned teenusepakkujad võivad töödelda andmeid väljaspool Euroopa Majanduspiirkonda, sealhulgas Ameerika Ühendriikides. Google Analyticsi andmeid võidakse edastada ettevõttele Google LLC, mis on sertifitseeritud EL-i ja USA andmekaitseraamistiku (EU–US Data Privacy Framework) alusel. Muude edastamiste puhul tugineme Euroopa Komisjoni kaitse piisavust käsitlevale otsusele või lepingu tüüptingimustele (IKÜM art 45–46).',
        ],
      },
      {
        heading: 'Kui kaua me neid säilitame',
        body: [
          [
            'Päringud, mis ei viinud koostööni: kuni 12 kuud pärast viimast suhtlust teiega, seejärel andmed kustutatakse.',
            'Päringud, mis viisid lepinguni: lepingu kehtivuse ajal ja seejärel nii kaua, kui seadus nõuab. Raamatupidamisdokumente säilitatakse raamatupidamise seaduse alusel 7 aastat.',
            'Veebilehe statistika: Google Analyticsis kuni 14 kuud.',
          ],
        ],
      },
      {
        heading: 'Teie õigused',
        body: [
          'Teil on õigus tutvuda oma andmetega, nõuda nende parandamist või kustutamist, piirata nende töötlemist, esitada vastuväiteid õigustatud huvil põhinevale töötlemisele ja saada oma andmed ülekantaval kujul. Kui töötlemine põhineb nõusolekul, võite selle igal ajal tagasi võtta; see ei mõjuta enne tagasivõtmist toimunud töötlemist.',
          'Nende õiguste kasutamiseks kirjutage aadressil info@sauleit.com. Samuti võite esitada kaebuse Andmekaitse Inspektsioonile (www.aki.ee) või oma riigi andmekaitseasutusele.',
        ],
      },
      {
        heading: 'Poliitika muudatused',
        body: [
          'Kui andmetöötluse viis muutub, uuendame seda lehte ja selle alguses olevat kuupäeva.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Kasutame küpsiseid',
    text: 'Teie nõusolekul kasutame Google Analyticsi küpsiseid, et mõista, kuidas veebilehte kasutatakse. Valikut saate igal ajal muuta lehe allosas oleva lingi „Küpsiste seaded” kaudu. Lähemalt meie',
    policyLink: 'privaatsuspoliitikas',
    accept: 'Nõustun',
    decline: 'Keeldun',
  },
  footer: { rights: 'Kõik õigused kaitstud.', privacy: 'Privaatsuspoliitika', cookieSettings: 'Küpsiste seaded' },
  notFound: { title: 'Lehte ei leitud', text: 'See võib olla teisaldatud või kustutatud.', back: 'Avalehele' },
};

export default et;
