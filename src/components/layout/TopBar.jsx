import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useOpeningHours } from '../../hooks/useOpeningHours';

export function TopBar() {
  const { isOpen, statusText } = useOpeningHours();

  return (
    <div className="bg-[#070b14] border-b border-white/5 py-1.5 text-[11px] sm:text-xs text-[var(--text-muted)] transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 flex items-center justify-between gap-2 overflow-hidden">
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          <div className="hidden md:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Industrigatan 10, 553 02 Jönköping</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <a href="tel:036187080" className="font-bold text-[var(--text-main)] hover:text-amber-400 transition">
              036-18 70 80
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <a href="mailto:info@elverktygsservice.se" className="hover:text-amber-400 transition">
              info@elverktygsservice.se
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 font-semibold text-[var(--text-main)] shrink truncate">
          <span
            className={`w-2 h-2 rounded-full pulse-dot shrink-0 ${
              isOpen ? 'bg-emerald-500' : 'bg-red-500'
            }`}
            style={{
              boxShadow: isOpen
                ? '0 0 0 0 rgba(16, 185, 129, 0.7)'
                : '0 0 0 0 rgba(239, 68, 68, 0.7)',
            }}
          />
          <span className="truncate">{statusText || 'Laddar öppettider...'}</span>
        </div>
      </div>
    </div>
  );
}
