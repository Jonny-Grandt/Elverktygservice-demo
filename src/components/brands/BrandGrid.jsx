import React, { useState } from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { brandsData } from '../../data/brandsData';
import { BrandModal } from './BrandModal';

export function BrandGrid() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <section id="varumarken" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-500 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Auktorisationer & Märken</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[var(--text-main)] tracking-tight">
            Varumärken vi servar & reparerar
          </h2>
          <h3 className="font-heading font-bold text-base sm:text-lg text-amber-500 mt-2">
            Auktoriserad service på Makita, Paslode, DeWalt, Milwaukee och Bosch i Jönköping
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-3">
            Som din lokala servicepartner i Jönköping erbjuder vi auktoriserad service på Makita, Paslode, DeWalt, Milwaukee och Bosch. Vi arbetar uteslutande med originalreservdelar direkt från tillverkarna för att garantera fullständig prestanda, personsäkerhet och bibehållen maskingaranti.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {brandsData.map((brand) => (
            <div
              key={brand.name}
              onClick={() => setSelectedBrand(brand)}
              className={`group cursor-pointer rounded-xl p-5 flex flex-col items-center justify-between text-center transition-all duration-300 card-panel hover:-translate-y-1 hover:shadow-xl ${
                brand.isAuthorised ? 'border-amber-500/30' : ''
              }`}
            >
              <div className="font-heading font-black text-lg sm:text-xl text-[var(--text-main)] tracking-wide my-3 group-hover:text-amber-500 transition">
                {brand.name}
              </div>

              <div
                className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                  brand.isAuthorised
                    ? 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
                    : 'bg-white/5 text-[var(--text-subtle)] border border-white/10'
                }`}
              >
                {brand.badge}
              </div>

              <div className="mt-3 flex items-center gap-1 text-[11px] text-amber-500 font-semibold opacity-0 group-hover:opacity-100 transition duration-200">
                <span>Läs mer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Detail Modal */}
      <BrandModal brand={selectedBrand} onClose={() => setSelectedBrand(null)} />
    </section>
  );
}
