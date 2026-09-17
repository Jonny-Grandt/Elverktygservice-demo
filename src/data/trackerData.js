export const trackerMockData = {
  'EV-94821': {
    tool: 'Makita DHR242Z Kombihammare',
    customer: 'Smålands Bygg AB',
    issue: 'Slirande växelhus vid hålborrning',
    tech: 'Lars-Göran N.',
    est: '2026-09-19',
    currentStep: 3, // 1-5
    steps: [
      { num: 1, title: 'Inlämnad', desc: 'Mottagen i verkstad', date: '2026-09-15' },
      { num: 2, title: 'Felsökning', desc: 'Mekanisk analys klar', date: '2026-09-16' },
      { num: 3, title: 'Reservdelar', desc: 'Nytt växelhus monterat', date: '2026-09-17' },
      { num: 4, title: 'Provkörning', desc: 'Elsäkerhet & slagtest', date: 'Pågår' },
      { num: 5, title: 'Klar', desc: 'Redo för avhämtning', date: 'Kommande' }
    ]
  },
  'EV-94822': {
    tool: 'Paslode IM350+ Spikpistol',
    customer: 'Vätterns Tak & Fasad',
    issue: 'Matar inte gasol / feltändning',
    tech: 'Mikael S.',
    est: '2026-09-18',
    currentStep: 4,
    steps: [
      { num: 1, title: 'Inlämnad', desc: 'Mottagen i butik', date: '2026-09-14' },
      { num: 2, title: 'Felsökning', desc: 'Ultraljudstvätt utförd', date: '2026-09-15' },
      { num: 3, title: 'Reservdelar', desc: 'Nytt tändstift & kolvring', date: '2026-09-16' },
      { num: 4, title: 'Provkörning', desc: 'Provskjuten 50 spik', date: 'Klar' },
      { num: 5, title: 'Klar', desc: 'SMS skickat till kund', date: 'Idag' }
    ]
  },
  'EV-94823': {
    tool: 'DeWalt DWE4206 Vinkelslip',
    customer: 'Jönköpings Industrimontage',
    issue: 'Gnistor från kolborstar och glapp i kabel',
    tech: 'Lars-Göran N.',
    est: '2026-09-20',
    currentStep: 2,
    steps: [
      { num: 1, title: 'Inlämnad', desc: 'Mottagen via turbil', date: '2026-09-16' },
      { num: 2, title: 'Felsökning', desc: 'Kollektor översyn', date: 'Pågår' },
      { num: 3, title: 'Reservdelar', desc: 'Beställt kolborstsats', date: 'Kommande' },
      { num: 4, title: 'Provkörning', desc: 'Elsäkerhetskontroll', date: 'Kommande' },
      { num: 5, title: 'Klar', desc: 'Utkörning med turbil', date: 'Kommande' }
    ]
  },
  'EV-94824': {
    tool: 'Milwaukee M18 Fuel Mutterdragare',
    customer: 'Privatperson (K. Andersson)',
    issue: 'Garantireparation – växelväljare låst',
    tech: 'Mikael S.',
    est: '2026-09-19',
    currentStep: 5,
    steps: [
      { num: 1, title: 'Inlämnad', desc: 'Inlämnad över disk', date: '2026-09-13' },
      { num: 2, title: 'Felsökning', desc: 'Garanti godkänd', date: '2026-09-14' },
      { num: 3, title: 'Reservdelar', desc: 'Utbytt växelenhet', date: '2026-09-15' },
      { num: 4, title: 'Provkörning', desc: 'Momenttest godkänt', date: '2026-09-16' },
      { num: 5, title: 'Klar', desc: 'Klar för hämtning på Industrigatan 10', date: 'Klar' }
    ]
  }
};
