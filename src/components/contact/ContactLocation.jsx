import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useOpeningHours } from '../../hooks/useOpeningHours';

const hoursSchedule = [
  { day: 'Måndag', hours: '07:30 – 16:30' },
  { day: 'Tisdag', hours: '07:30 – 16:30' },
  { day: 'Onsdag', hours: '07:30 – 16:30' },
  { day: 'Torsdag', hours: '07:30 – 16:30' },
  { day: 'Fredag', hours: '07:30 – 13:00' },
  { day: 'Lördag', hours: 'Stängt', isClosed: true },
  { day: 'Söndag / Helgdag', hours: 'Stängt', isClosed: true }
];

export function ContactLocation() {
  const { currentDayIndex } = useOpeningHours();

  return (
    <section id="kontakt" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info & Hours Table */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-500 text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Välkommen till verkstan</span>
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[var(--text-main)] tracking-tight">
                Kontakt & Öppettider
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
                Du hittar vår moderna verkstad och reservdelsbutik på Industrigatan 10 i Jönköping (goda parkeringsmöjligheter för hantverkarbilar och släp).
              </p>
            </div>

            {/* Address & Phone Cards */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)]">
                <div className="w-10 h-10 rounded-full bg-amber-500/15 text-amber-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-sm text-[var(--text-main)] font-bold">Besöksadress:</strong>
                  <span className="text-xs text-[var(--text-muted)]">
                    Elverktygsservice i Jönköping AB<br />Industrigatan 10, 553 02 Jönköping
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)]">
                <div className="w-10 h-10 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-sm text-[var(--text-main)] font-bold">Telefon & E-post:</strong>
                  <a href="tel:036187080" className="font-mono text-sm font-bold text-amber-500 hover:underline">
                    036-18 70 80
                  </a>
                  <br />
                  <a href="mailto:info@elverktygsservice.se" className="text-xs text-[var(--text-muted)] hover:text-amber-500 transition">
                    info@elverktygsservice.se
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Table */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-amber-500" />
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[var(--text-main)]">
                  Ordinarie Öppettider Verkstad & Butik
                </h3>
              </div>

              <div className="rounded-xl overflow-hidden border border-[var(--border-glass)] bg-[var(--bg-card)]">
                <table className="w-full text-xs">
                  <tbody>
                    {hoursSchedule.map((row, idx) => {
                      const isToday = idx === currentDayIndex;
                      return (
                        <tr
                          key={row.day}
                          className={`border-b border-[var(--border-glass)] last:border-b-0 transition ${
                            isToday ? 'bg-amber-500/10 font-bold text-amber-500' : 'text-[var(--text-muted)]'
                          }`}
                        >
                          <td className="py-2.5 px-4 flex items-center gap-2">
                            <span>{row.day}</span>
                            {isToday && (
                              <span className="text-[10px] bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded font-black">
                                IDAG
                              </span>
                            )}
                          </td>
                          <td
                            className={`py-2.5 px-4 text-right font-mono ${
                              row.isClosed ? 'text-[var(--text-subtle)]' : ''
                            }`}
                          >
                            {row.hours}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-6 h-full min-h-[380px] rounded-2xl overflow-hidden border border-[var(--border-glass)] shadow-2xl bg-[var(--bg-card)]">
            <iframe
              className="w-full h-full min-h-[380px] border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2134.428410291946!2d14.1539113!3d57.7718001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465a6de9e0e5a555%3A0x8e8a8b8b8b8b8b8b!2sIndustrigatan%2010%2C%20553%2002%20J%C3%B6nk%C3%B6ping!5e0!3m2!1ssv!2sse!4v1700000000000!5m2!1ssv!2sse"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karta till Elverktygsservice Jönköping"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
