/* ==========================================================================
   Elverktygsservice Jönköping - Core Application Logic
   Interactive Repair Tracker, Dynamic Hours Status, Form Handlers & Modals
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initOpeningHoursStatus();
  initMobileMenu();
  initRepairTracker();
  initServiceForm();
  initBrandModals();
  initSocialTabs();
  initSmoothScroll();
});

/* ==========================================================================
   1. Sticky Header & Scroll Effects
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   2. Live Opening Hours Calculation (Swedish Local Time)
   ========================================================================== */
function initOpeningHoursStatus() {
  const statusElement = document.getElementById('store-status-pill');
  if (!statusElement) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  // Opening Hours (Monday - Friday 07:00 - 17:00, Sat-Sun Closed)
  const openTime = 7 * 60;   // 07:00
  const closeTime = 17 * 60; // 17:00

  let isOpen = false;
  let statusText = '';

  if (day >= 1 && day <= 5) {
    if (currentTime >= openTime && currentTime < closeTime) {
      isOpen = true;
      statusText = 'Öppet nu! Stänger kl 17:00';
    } else if (currentTime < openTime) {
      statusText = 'Stängt nu. Öppnar kl 07:00';
    } else {
      statusText = 'Stängt för idag. Öppnar imorgon 07:00';
    }
  } else if (day === 6) {
    statusText = 'Stängt idag (Lördag). Öppnar Måndag 07:00';
  } else {
    statusText = 'Stängt idag (Söndag). Öppnar Måndag 07:00';
  }

  statusElement.innerHTML = `
    <span class="pulse-dot" style="background-color: ${isOpen ? '#10b981' : '#ef4444'}; box-shadow: 0 0 0 0 ${isOpen ? 'rgba(16, 185, 129, 0.7)' : 'rgba(239, 68, 68, 0.7)'}"></span>
    <span>${statusText}</span>
  `;

  // Highlight today in hours table
  const daysMap = [6, 0, 1, 2, 3, 4, 5]; // Match HTML table row index
  const tableRows = document.querySelectorAll('.hours-table tr');
  if (tableRows && tableRows[daysMap[day]]) {
    tableRows[daysMap[day]].classList.add('today');
  }
}

/* ==========================================================================
   3. Mobile Navigation Drawer
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu || !overlay) return;

  function openMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   4. Live Repair Tracking System (Mock DB & Dynamic Stepper)
   ========================================================================== */
const mockRepairDatabase = {
  'EV-94821': {
    id: 'EV-94821',
    customer: 'Smålands Bygg & Montage AB',
    brand: 'Makita',
    model: 'DHR242Z Kombihammare 18V',
    serial: 'MK-8849201',
    issue: 'Slirande växelhus & periodiskt spänningsfall',
    receivedDate: '2026-09-08',
    estCompletion: '2026-09-12 (Imorgon)',
    technician: 'Lars-Göran N. (Auktoriserad Makita-tekniker)',
    stepIndex: 3, // 1 to 5
    statusLabel: 'Reservdelar beställda (Kuggväxelsats)',
    steps: [
      { title: 'Inlämnad', desc: 'Registrerad i verkstan' },
      { title: 'Felsökning', desc: 'Diagnos & test i provbänk' },
      { title: 'Godkänd', desc: 'Kostnadsförslag godkänt' },
      { title: 'Reservdelar', desc: 'Originaldelar monterade' },
      { title: 'Klar!', desc: 'Elsäkerhetstestad & klar' }
    ]
  },
  'EV-94822': {
    id: 'EV-94822',
    customer: 'Jönköpings Maskinuthyrning AB',
    brand: 'Paslode',
    model: 'Impulse IM350+ Spikpistol',
    serial: 'PS-339102',
    issue: 'Tändningsfel & rengöring av brännkammare',
    receivedDate: '2026-09-09',
    estCompletion: 'Idag (Klar för avhämtning på Industrigatan 10)',
    technician: 'Johan K. (Certifierad Paslode-tekniker)',
    stepIndex: 5,
    statusLabel: 'Reparerad & Provskjuten - Klar för hämtning!',
    steps: [
      { title: 'Inlämnad', desc: 'Registrerad i verkstan' },
      { title: 'Felsökning', desc: 'Rengöring & diagnos' },
      { title: 'Godkänd', desc: 'Servicetyp godkänd' },
      { title: 'Reparation', desc: 'Filter & stift utbytt' },
      { title: 'Klar!', desc: 'Klar för avhämtning' }
    ]
  },
  'EV-94823': {
    id: 'EV-94823',
    customer: 'Eriksson VVS & El AB',
    brand: 'DeWalt',
    model: 'DWE4206 Vinkelslip 125mm',
    serial: 'DW-771092',
    issue: 'Kabelbrott vid handtag & utslitna kolborstar',
    receivedDate: '2026-09-10',
    estCompletion: '2026-09-14',
    technician: 'Anders M.',
    stepIndex: 2,
    statusLabel: 'Felsökning pågår - Provkörning i belastningsbänk',
    steps: [
      { title: 'Inlämnad', desc: 'Registrerad i verkstan' },
      { title: 'Felsökning', desc: 'Diagnos pågår' },
      { title: 'Godkänd', desc: 'Väntar godkännande' },
      { title: 'Reparation', desc: 'Montering delar' },
      { title: 'Klar!', desc: 'Slutkontroll' }
    ]
  },
  'EV-94824': {
    id: 'EV-94824',
    customer: 'Privatperson (Kalle Svensson)',
    brand: 'Milwaukee',
    model: 'M18 ONEFHIWF12 Mutterdragare',
    serial: 'MW-991204',
    issue: 'Årlig elsäkerhetstestning & smörjning av hammarmekanism',
    receivedDate: '2026-09-10',
    estCompletion: '2026-09-11 (Idag eftermiddag)',
    technician: 'Lars-Göran N.',
    stepIndex: 4,
    statusLabel: 'Slutprovning i vridmomentsmätare',
    steps: [
      { title: 'Inlämnad', desc: 'Registrerad' },
      { title: 'Felsökning', desc: 'Inspektion' },
      { title: 'Godkänd', desc: 'Servicegodkänd' },
      { title: 'Service', desc: 'Momentskalibrering' },
      { title: 'Klar!', desc: 'Slutkontroll' }
    ]
  }
};

function initRepairTracker() {
  const form = document.getElementById('tracker-form');
  const input = document.getElementById('tracker-input');
  const resultCard = document.getElementById('repair-result-card');
  const sampleBtns = document.querySelectorAll('.sample-btn');

  if (!form || !input || !resultCard) return;

  function lookupRepair(ticketId) {
    const cleanId = ticketId.trim().toUpperCase();
    const data = mockRepairDatabase[cleanId];

    if (!data) {
      showToast(`Ingen reparation hittades med ordernummer: ${cleanId}. Kontrollera numret eller ring oss på 036-18 70 80.`, 'error');
      resultCard.classList.remove('active');
      return;
    }

    // Populate result card
    document.getElementById('res-id').textContent = data.id;
    document.getElementById('res-customer').textContent = data.customer;
    document.getElementById('res-tool').textContent = `${data.brand} ${data.model}`;
    document.getElementById('res-issue').textContent = data.issue;
    document.getElementById('res-tech').textContent = data.technician;
    document.getElementById('res-est').textContent = data.estCompletion;

    // Render Stepper
    const stepperContainer = document.getElementById('res-stepper');
    const progressLine = document.getElementById('res-progress-line');

    const totalSteps = data.steps.length;
    const progressPercent = ((data.stepIndex - 1) / (totalSteps - 1)) * 100;
    if (progressLine) {
      if (window.innerWidth <= 768) {
        progressLine.style.width = '3px';
        progressLine.style.height = `${progressPercent}%`;
      } else {
        progressLine.style.height = '3px';
        progressLine.style.width = `${progressPercent}%`;
      }
    }

    let html = '';
    data.steps.forEach((step, idx) => {
      const stepNum = idx + 1;
      let stateClass = '';
      if (stepNum < data.stepIndex) stateClass = 'completed';
      else if (stepNum === data.stepIndex) stateClass = 'active';

      html += `
        <div class="step ${stateClass}">
          <div class="step-circle">${stepNum < data.stepIndex ? '✓' : stepNum}</div>
          <div class="step-title">${step.title}</div>
          <div style="font-size: 0.725rem; color: var(--text-subtle); margin-top: 2px;">${step.desc}</div>
        </div>
      `;
    });

    stepperContainer.innerHTML = html;
    resultCard.classList.add('active');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast(`Order ${cleanId} laddades framgångsrikt!`, 'success');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    lookupRepair(input.value);
  });

  sampleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.dataset.code;
      input.value = code;
      lookupRepair(code);
    });
  });
}

/* ==========================================================================
   5. Interactive Service Request & Quote Form
   ========================================================================== */
function initServiceForm() {
  const form = document.getElementById('service-inquiry-form');
  const fileInput = document.getElementById('file-upload');
  const filePreview = document.getElementById('file-preview-area');

  if (!form) return;

  // File Upload Preview Handler
  if (fileInput && filePreview) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          filePreview.innerHTML = `
            <div class="file-preview">
              <img src="${event.target.result}" alt="Bifogad bild">
              <div>
                <strong style="font-size: 0.875rem; display: block;">${file.name}</strong>
                <span style="font-size: 0.75rem; color: var(--text-subtle);">${(file.size / 1024).toFixed(1)} KB</span>
              </div>
            </div>
          `;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Form Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const brand = document.getElementById('form-brand').value;
    const model = document.getElementById('form-model').value.trim();
    const issue = document.getElementById('form-issue').value;

    if (!name || !email || !phone || !brand || !issue) {
      showToast('Vänligen fyll i alla obligatoriska fält (*)', 'error');
      return;
    }

    // Generate Mock Tracking Code
    const trackingCode = 'EV-' + Math.floor(10000 + Math.random() * 90000);

    // Add new entry to mock DB for instant lookup test
    mockRepairDatabase[trackingCode] = {
      id: trackingCode,
      customer: name,
      brand: brand,
      model: model || 'Ej angiven modell',
      serial: 'Ej angivet S/N',
      issue: issue,
      receivedDate: new Date().toISOString().split('T')[0],
      estCompletion: '2-4 arbetsdagar efter mottagande på Industrigatan 10',
      technician: 'Tilldelas vid inlämning',
      stepIndex: 1,
      statusLabel: 'Föranmälan registrerad online',
      steps: [
        { title: 'Registrerad', desc: 'Föranmälan klar' },
        { title: 'Felsökning', desc: 'Mottages i verkstan' },
        { title: 'Godkänd', desc: 'Kostnadsförslag' },
        { title: 'Reparation', desc: 'Arbete pågår' },
        { title: 'Klar!', desc: 'Redo för hämtning' }
      ]
    };

    // Show Confirmation Modal
    showSuccessModal(trackingCode, name, email, brand, model);

    form.reset();
    if (filePreview) filePreview.innerHTML = '';
  });
}

function showSuccessModal(code, name, email, brand, model) {
  const modal = document.getElementById('confirmation-modal');
  if (!modal) return;

  document.getElementById('modal-code').textContent = code;
  document.getElementById('modal-customer-name').textContent = name;
  document.getElementById('modal-details').textContent = `${brand} ${model || ''}`;

  modal.classList.add('active');
}

/* ==========================================================================
   6. Brand Info Modal System
   ========================================================================== */
const brandInfoData = {
  'Makita': {
    title: 'Auktoriserad Makita Verktygsservice Jönköping',
    badge: 'Auktoriserad Garantiverkstad',
    description: 'Som auktoriserad servicepartner för Makita på Industrigatan 10 i Jönköping utför vi både garantireparationer och avgiftsbelagda servicetjänster. Vi lagerför originalreservdelar, rotorer, kolborstar, växelhus och elektronikenheter för 18V LXT & 40V XGT-systemen.',
    features: ['Garantireparationer med direktregistrering', 'Original kolborstar & batterielektronik', 'Snabba reservdelsleveranser (ofta inom 24 timmar)']
  },
  'Paslode': {
    title: 'Auktoriserad Paslode & Spit Service',
    badge: 'Specialistverkstad',
    description: 'Expertiserad service på gasdrivna spikpistoler (Impulse IM350+, IM90Ci, PPN50Ci) och Spit bultpistoler. Vi utför ultravattentvätt av brännkammare, o-ringsbyten, tändstiftskalibrering och täthetsprovning.',
    features: ['Rengöring & ultraljudstvätt av förbränningskammare', 'Byte av drivblad, kolvringar & o-ringar', 'Provskjutning & trycktestning']
  },
  'DeWalt': {
    title: 'DeWalt Maskinservice & Garanti',
    badge: 'Servicepartner',
    description: 'Vi reparerar DeWalt 18V XR, 54V FlexVolt och sladdanslutna elverktyg. Snabba reparationer på kombihammare, vinkelslipar, gersågar och skruvdragare med 100% originalkomponenter.',
    features: ['Auktoriserade felkodsdiagnoser', 'FlexVolt batteritestning & konditionering', 'Säkerhetstestning EN 62841']
  },
  'Milwaukee': {
    title: 'Milwaukee Heavy Duty Verktygsservice',
    badge: 'Servicepartner',
    description: 'Service och reparation av Milwaukee M12, M18 och MX FUEL-utrustning. Vi har testutrustning för digitala momentinställningar, kolborstfria motorer (POWERSTATE) och elektronikstyrenheter.',
    features: ['Service på M18 Fuel mutterdragare & hammare', 'Kalibrering av momentverktyg', 'Originaltillbehör & elektronikkort']
  },
  'Bosch': {
    title: 'Bosch Professional Verkstadsservice',
    badge: 'Auktoriserad Service',
    description: 'Fullständig garanti- och eftergarantiservice för Bosch Blå (Professional) elverktyg och mätteknik. Vi kalibrerar även linjelasrar och avståndsmätare.',
    features: ['Garanti & utbytesenheter', 'Vibrationsdämpningskontroll på bilningshammare', 'Laserkalibrering']
  },
  'Festool': {
    title: 'Festool Premium Service & Reparation',
    badge: 'Kvalitetsverkstad',
    description: 'Service på Festool sänksågar (TS 55), dammsugare (CLEANTEC), överfräsar och slipmaskiner. Vi ser till att dina snickeriverktyg behåller sin millimeterprecision.',
    features: ['Fullständig genomgång av sågbord & lager', 'Kolborstbyte & motorfilter', 'Elsäkerhetscertifikat']
  }
};

function initBrandModals() {
  const brandCards = document.querySelectorAll('.brand-card');
  const modal = document.getElementById('brand-modal');
  const closeBtn = document.getElementById('brand-modal-close');

  if (!modal) return;

  brandCards.forEach(card => {
    card.addEventListener('click', () => {
      const brandKey = card.dataset.brand;
      const data = brandInfoData[brandKey] || {
        title: `${brandKey} Verktygsservice Jönköping`,
        badge: 'Service & Reparation',
        description: `Vi utför professionell service och reparation på alla elverktyg och maskiner från ${brandKey}. Originalreservdelar och elsäkerhetstest ingår alltid på Industrigatan 10.`,
        features: ['Snabb felsökning & kostnadsförslag', 'Originalreservdelar', 'Garanti på utfört arbete']
      };

      document.getElementById('brand-modal-title').textContent = data.title;
      document.getElementById('brand-modal-badge').textContent = data.badge;
      document.getElementById('brand-modal-desc').textContent = data.description;

      const listContainer = document.getElementById('brand-modal-features');
      listContainer.innerHTML = data.features.map(f => `<li style="margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem; color:var(--text-main);"><span style="color:var(--amber-primary)">✓</span> ${f}</li>`).join('');

      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }
}

/* ==========================================================================
   7. Tabbed Social Feed Switcher
   ========================================================================== */
function initSocialTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const fbGrid = document.getElementById('fb-feed');
  const igGrid = document.getElementById('ig-feed');

  if (!tabBtns.length || !fbGrid || !igGrid) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.dataset.tab;
      if (target === 'facebook') {
        fbGrid.style.display = 'grid';
        igGrid.style.display = 'none';
      } else {
        fbGrid.style.display = 'none';
        igGrid.style.display = 'grid';
      }
    });
  });
}

/* ==========================================================================
   8. Smooth Scroll & Toast Helper
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
  toast.innerHTML = `
    <div style="font-weight: 700; color: ${type === 'success' ? 'var(--success)' : 'var(--amber-primary)'}">
      ${type === 'success' ? '✓' : 'ℹ'}
    </div>
    <div style="font-size: 0.9rem;">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}
