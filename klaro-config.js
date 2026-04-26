var klaroConfig = {
  version: 1,
  lang: 'de',
  acceptAll: true,
  hideDeclineAll: false,
  cookieName: 'klaro',
  cookieExpiresAfterDays: 365,
  privacyPolicy: 'datenschutz.html',

  translations: {
    de: {
      privacyPolicyUrl: 'datenschutz.html',
      consentNotice: {
        description:
          'Diese Website verwendet Cookies und ähnliche Technologien. ' +
          'Einige sind technisch notwendig, andere helfen mir, das Angebot zu verbessern. ' +
          'Sie können selbst entscheiden, welche Dienste Sie erlauben möchten. ' +
          '{purposes}',
        learnMore: 'Mehr erfahren',
      },
      consentModal: {
        title: 'Datenschutzeinstellungen',
        description:
          'Hier können Sie einsehen und anpassen, welche Informationen erhoben werden. ' +
          'Weitere Details finden Sie in der <a href="datenschutz.html">Datenschutzerklärung</a>.',
        privacyPolicy: {
          text: 'Mehr dazu in der {privacyPolicy}.',
          name: 'Datenschutzerklärung',
        },
      },
      acceptAll: 'Alle akzeptieren',
      declineAll: 'Nur notwendige',
      acceptSelected: 'Auswahl speichern',
      close: 'Schließen',
      purposes: {
        analytics: {
          title: 'Analyse',
          description:
            'Diese Dienste helfen mir zu verstehen, wie Besucher die Website nutzen.',
        },
        marketing: {
          title: 'Marketing',
          description:
            'Diese Dienste ermöglichen es mir, relevante Werbung auszuspielen.',
        },
      },
      googleAnalytics: {
        description:
          'Statistik-Dienst von Google zur Auswertung des Nutzerverhaltens. ' +
          'Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
      },
      facebookPixel: {
        description:
          'Tracking-Pixel von Meta zur Messung von Werbekampagnen. ' +
          'Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
      },
      googleAds: {
        description:
          'Conversion-Tracking von Google für Anzeigenkampagnen. ' +
          'Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
      },
    },
  },

  services: [
    {
      name: 'googleAnalytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: [/^_ga/, /^_gid/, /^_gat/, /^__utma/, /^__utmb/, /^__utmc/, /^__utmz/],
      required: false,
      optOut: false,
      onlyOnce: false,
    },
    {
      name: 'facebookPixel',
      title: 'Facebook Pixel (Meta)',
      purposes: ['marketing'],
      cookies: [/^_fbp/, /^_fbc/],
      required: false,
      optOut: false,
      onlyOnce: false,
    },
    {
      name: 'googleAds',
      title: 'Google Ads',
      purposes: ['marketing'],
      cookies: [/^_gcl/],
      required: false,
      optOut: false,
      onlyOnce: false,
    },
  ],
};
