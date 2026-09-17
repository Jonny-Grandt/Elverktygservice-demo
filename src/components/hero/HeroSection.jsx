import React from 'react';
import { Award, ArrowRight, Search, ShieldCheck } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Auktoriserad Verktygsservice i Jönköping</span>
          </div>

          {/* Title */}
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[var(--text-main)] tracking-tight leading-[1.15]">
            Vi ger dina elverktyg och maskiner <span className="text-amber-500 underline decoration-amber-500/30 decoration-wavy decoration-2">nytt liv.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
            Snabba garantireparationer, certifierad elsäkerhetstestning och originalreservdelar för hantverkare, byggföretag och privatpersoner på Industrigatan 10 i Jönköping.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
            <a
              href="#inlamning"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-heading font-bold text-base shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 hover:-translate-y-0.5 transition"
            >
              <span>Boka Service / Reparation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#status"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-main)] font-heading font-bold text-base hover:bg-[var(--bg-card-hover)] hover:-translate-y-0.5 transition shadow-sm"
            >
              <Search className="w-4 h-4 text-amber-500" />
              <span>Sök Reparationsstatus</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-[var(--border-glass)] w-full max-w-lg">
            <div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-[var(--text-main)]">
                25+ <span className="text-sm font-semibold text-amber-500">År</span>
              </div>
              <div className="text-xs text-[var(--text-subtle)] mt-0.5">Erfarenhet i Jönköping</div>
            </div>
            <div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-[var(--text-main)]">
                10+ <span className="text-sm font-semibold text-amber-500">Märken</span>
              </div>
              <div className="text-xs text-[var(--text-subtle)] mt-0.5">Auktoriserade märken</div>
            </div>
            <div>
              <div className="font-heading font-black text-2xl sm:text-3xl text-[var(--text-main)]">
                48t <span className="text-sm font-semibold text-amber-500">Snitt</span>
              </div>
              <div className="text-xs text-[var(--text-subtle)] mt-0.5">Genomströmningstid</div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual image & floating badge */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-[var(--border-glass)] shadow-2xl bg-[var(--bg-card)] group">
            <img
              src="/assets/hero_workshop.png"
              alt="Elverktygsservice Jönköping Verkstad"
              className="w-full h-auto object-cover transform group-hover:scale-102 transition duration-700"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Floating Glass Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 glass-panel rounded-xl p-3.5 flex items-center gap-3 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs sm:text-sm text-[var(--text-main)] leading-snug">
                  Direkt Garanti-Registrering
                </h4>
                <p className="text-[11px] text-[var(--text-muted)]">
                  Makita, Paslode, DeWalt, Milwaukee & Bosch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
