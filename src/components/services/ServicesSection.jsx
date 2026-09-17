import React from 'react';
import {
  Wrench,
  Zap,
  ShieldCheck,
  BatteryCharging,
  Layers,
  Truck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Auktoriserad Garantireparation',
    desc: 'Snabb handläggning av garantireparationer för våra avtalsmärken. Vi sköter all kontakt med tillverkaren så att du får din maskin lagad utan krångel.',
    features: [
      'Direktregistrering mot fabriksgaranti',
      'Endast tillverkarens originaldelar',
      'Fri reservmaskin vid längre handläggning'
    ],
    btnText: 'Boka Garantiservice',
    btnHref: '#inlamning'
  },
  {
    icon: Zap,
    title: 'Gas- & Spikpistolsservice',
    desc: 'Paslode, Spit och Tjep spikpistoler kräver regelbunden service. Vår ultraljudstvätt rengör brännkammaren på djupet för maximal skjutkraft.',
    features: [
      'Ultraljudstvätt av förbränningskammare',
      'Byte av drivblad, kolvringar & tändstift',
      'Provskjutning & kalibrering'
    ],
    btnText: 'Lämna Spikpistol',
    btnHref: '#inlamning'
  },
  {
    icon: ShieldCheck,
    title: 'Elsäkerhetskontroll (EN 62841)',
    desc: 'Undvik olyckor och uppfyll Arbetsmiljöverkets krav. Vi provbelastar och isolationstestar 230V & 400V maskiner enligt gällande standard.',
    features: [
      'Isolationstest & skyddsledarmätning',
      'Besiktningsprotokoll med godkänd märkning',
      'Kabelbyten & kabelförskruvningar'
    ],
    btnText: 'Beställ Besiktning',
    btnHref: '#inlamning'
  },
  {
    icon: BatteryCharging,
    title: 'Batteridiagnostik & Test',
    desc: 'Har ditt 18V eller 40V batteri tappat orken? Vi testar och konditionerar litiumjonbatterier för att säkerställa full drifttid på arbetsplatsen.',
    features: [
      'Mätning av intern cellbalans',
      'Laddarprovning & mjukvaruuppdatering',
      'Återvinning & utbytesbatterier'
    ],
    btnText: 'Testa Batteri',
    btnHref: '#inlamning'
  },
  {
    icon: Layers,
    title: 'Originalreservdelar & Tillbehör',
    desc: 'Stort lager av kolborstar, växelhus, rotorer, strömbrytare och sågklingor i vår butik på Industrigatan 10 i Jönköping. Hämtning över disk.',
    features: [
      'Över 15 000 artiklar i databasen',
      'Hjälp med sprängskisser & reservdelsnummer',
      'Direktförsäljning till hantverkare'
    ],
    btnText: 'Ring om Reservdel',
    btnHref: 'tel:036187080'
  },
  {
    icon: Truck,
    title: 'Hämtning & Turbil för Företag',
    desc: 'Har byggföretaget ett flertal maskiner som behöver service? Vår turbil hämtar upp trasiga verktyg direkt ute på bygget i Jönköping/Huskvarna.',
    features: [
      'Fast turbilsschema för avtalskunder',
      'Samlad fakturering & maskinhistorik',
      'Tidsbesparande för dina hantverkare'
    ],
    btnText: 'Boka Turbilshämtning',
    btnHref: '#inlamning'
  }
];

export function ServicesSection() {
  return (
    <section id="tjanster" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-amber-500/[0.015] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-500 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Kvalitet i Varje Moment</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[var(--text-main)] tracking-tight">
            Våra Tjänster & Verkstadsservice
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-3">
            Från akut felsökning till planerat underhåll och elsäkerhetsbesiktningar – vi håller ditt byggprojekt igång.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="card-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl transition duration-300"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition duration-300">
                    <Icon className="w-6 h-6 stroke-2" />
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[var(--text-main)] mb-2.5">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {srv.desc}
                  </p>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-2 mb-6">
                    {srv.features.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={srv.btnHref}
                  className="w-full py-2.5 px-4 rounded-xl border border-[var(--border-glass)] bg-[var(--bg-darker)] text-[var(--text-main)] text-xs font-heading font-bold text-center flex items-center justify-center gap-2 group-hover:border-amber-500 group-hover:text-amber-500 transition"
                >
                  <span>{srv.btnText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
