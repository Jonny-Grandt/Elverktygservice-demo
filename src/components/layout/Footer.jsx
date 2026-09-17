import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const openPrivacy = (e) => {
    e.preventDefault();
    alert('Integritetspolicy: Vi samlar endast in personuppgifter i samband med din serviceförfrågan för att kunna utföra uppdraget enligt GDPR.');
  };

  const openTerms = (e) => {
    e.preventDefault();
    alert('Allmänna villkor: 6 månaders garanti på utförd reparation och utbytta originalreservdelar.');
  };

  return (
    <footer className="bg-[#05080e] border-t border-white/5 pt-14 pb-8 text-sm text-[var(--text-muted)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="font-heading font-black text-xl text-[var(--text-main)] leading-none">
              ELVERKTYGS<span className="text-amber-500">SERVICE</span>
            </div>
            <p className="text-xs leading-relaxed text-[var(--text-muted)]">
              Din auktoriserade verkstadspartner i Jönköping för reparation, service och förebyggande underhåll av professionella elverktyg och maskiner.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {['Jönköping', 'Huskvarna', 'Nässjö', 'Värnamo', 'Habo', 'Bankeryd'].map(city => (
                <span key={city} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[var(--text-main)] mb-4 uppercase tracking-wider">
              Snabbnavigering
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><a href="#tjanster" className="hover:text-amber-500 transition">Våra Tjänster</a></li>
              <li><a href="#varumarken" className="hover:text-amber-500 transition">Auktoriserade Varumärken</a></li>
              <li><a href="#status" className="hover:text-amber-500 transition">Sök Orderstatus (Spårning)</a></li>
              <li><a href="#inlamning" className="hover:text-amber-500 transition">Föranmäl Service</a></li>
              <li><a href="#kontakt" className="hover:text-amber-500 transition">Kontakt & Öppettider</a></li>
            </ul>
          </div>

          {/* Main Brands */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[var(--text-main)] mb-4 uppercase tracking-wider">
              Huvudvarumärken
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><a href="#varumarken" className="hover:text-amber-500 transition">Makita Service Jönköping</a></li>
              <li><a href="#varumarken" className="hover:text-amber-500 transition">Paslode / Spit Spikpistoler</a></li>
              <li><a href="#varumarken" className="hover:text-amber-500 transition">DeWalt Garanti & Reparation</a></li>
              <li><a href="#varumarken" className="hover:text-amber-500 transition">Milwaukee Heavy Duty</a></li>
              <li><a href="#varumarken" className="hover:text-amber-500 transition">Bosch Professional Service</a></li>
              <li><a href="#varumarken" className="hover:text-amber-500 transition">Festool Snickerimaskiner</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm text-[var(--text-main)] mb-4 uppercase tracking-wider">
              Direktkontakt
            </h4>
            <div className="flex flex-col gap-3 text-xs">
              <div>
                <span className="block text-[11px] text-[var(--text-subtle)]">Kundtjänst & Verkstad:</span>
                <a href="tel:036187080" className="font-mono text-base font-bold text-amber-500 hover:underline">
                  036-18 70 80
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-[var(--text-subtle)]">E-post:</span>
                <a href="mailto:info@elverktygsservice.se" className="text-[var(--text-main)] hover:text-amber-500 transition">
                  info@elverktygsservice.se
                </a>
              </div>
              <div className="flex items-start gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>Industrigatan 10, 553 02 Jönköping</span>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href="https://www.facebook.com/Elverktygsservice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[var(--bg-card)] border border-[var(--border-glass)] flex items-center justify-center text-[var(--text-main)] hover:border-amber-500 hover:text-amber-500 transition"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.25.19 2.25.19v2.47h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/elverktygsserviceijonkopingab?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[var(--bg-card)] border border-[var(--border-glass)] flex items-center justify-center text-[var(--text-main)] hover:border-amber-500 hover:text-amber-500 transition"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-subtle)] text-center sm:text-left">
          <div>© 2026 Elverktygsservice i Jönköping AB. Alla rättigheter förbehållna. Org.nr: 556123-4567.</div>
          <div className="flex items-center gap-4">
            <a href="#" onClick={openPrivacy} className="hover:text-[var(--text-main)] transition">
              Integritetspolicy
            </a>
            <a href="#" onClick={openTerms} className="hover:text-[var(--text-main)] transition">
              Servicevillkor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
