import React from 'react';
import { X, Phone, CalendarCheck } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export function MobileMenu({ isOpen, onClose, theme, toggleTheme }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[var(--bg-card)] border-l border-[var(--border-glass)] z-[101] p-6 flex flex-col justify-between shadow-2xl animate-slide-in">
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-[var(--border-glass)]">
            <div className="font-heading font-black text-base text-[var(--text-main)]">
              ELVERKTYGS<span className="text-amber-500">SERVICE</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[var(--bg-darker)] border border-[var(--border-glass)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition"
              aria-label="Stäng meny"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-3">
            {[
              { label: 'Våra Tjänster', href: '#tjanster' },
              { label: 'Varumärken', href: '#varumarken' },
              { label: 'Sök Orderstatus', href: '#status' },
              { label: 'Boka Service', href: '#inlamning' },
              { label: 'Kontakt & Öppettider', href: '#kontakt' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:text-amber-500 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-6 border-t border-[var(--border-glass)]">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} isMobile={true} />

          <a
            href="tel:036187080"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-md transition hover:from-amber-400 hover:to-amber-500"
          >
            <Phone className="w-4 h-4" />
            <span>Ring 036-18 70 80</span>
          </a>

          <a
            href="#inlamning"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[var(--bg-card-hover)] border border-[var(--border-glass)] text-[var(--text-main)] font-semibold text-sm transition hover:border-amber-500"
          >
            <CalendarCheck className="w-4 h-4 text-amber-500" />
            <span>Boka Service Online</span>
          </a>
        </div>
      </div>
    </>
  );
}
