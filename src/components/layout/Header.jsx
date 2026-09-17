import React, { useState, useEffect } from 'react';
import { Wrench, Menu } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Header({ theme, toggleTheme, onOpenMobileMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 glass-panel border-b transition-all duration-300 ${
        scrolled
          ? 'shadow-2xl bg-[var(--bg-darker)]/95 border-[var(--border-glass)] py-2'
          : 'bg-[var(--bg-glass)] border-[var(--border-glass)] py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition shrink-0">
            <Wrench className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="font-heading font-black text-sm sm:text-base md:text-lg tracking-tight text-[var(--text-main)] leading-none truncate">
              ELVERKTYGS<span className="text-amber-500">SERVICE</span>
            </div>
            <div className="hidden sm:block text-[9px] sm:text-[10px] font-bold tracking-widest text-[var(--text-subtle)] uppercase mt-0.5 truncate">
              Jönköping • Auktoriserad Verkstad
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {[
            { label: 'Våra Tjänster', href: '#tjanster' },
            { label: 'Varumärken', href: '#varumarken' },
            { label: 'Sök Orderstatus', href: '#status' },
            { label: 'Boka Service', href: '#inlamning' },
            { label: 'Kontakt & Hitta Hit', href: '#kontakt' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13.5px] font-semibold text-[var(--text-muted)] hover:text-[var(--text-main)] transition relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 hover:after:w-full after:transition-all whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Desktop Only CTAs */}
          <a
            href="#status"
            className="hidden lg:inline-flex items-center justify-center text-xs font-bold py-1.5 px-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-0.5 transition shadow-sm whitespace-nowrap"
          >
            Sök Status
          </a>

          <a
            href="#inlamning"
            className="hidden lg:inline-flex items-center justify-center text-xs font-bold py-1.5 px-3.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 hover:-translate-y-0.5 transition whitespace-nowrap"
          >
            Boka Reparation
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-main)] hover:bg-[var(--bg-card-hover)] hover:border-amber-500/50 transition shrink-0"
            aria-label="Öppna meny"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
