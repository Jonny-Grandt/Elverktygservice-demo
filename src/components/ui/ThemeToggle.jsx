import React from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle({ theme, toggleTheme, isMobile = false }) {
  const isLight = theme === 'light';

  if (isMobile) {
    return (
      <button
        onClick={toggleTheme}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-main)] font-semibold transition hover:bg-[var(--bg-card-hover)]"
        aria-label="Växla tema"
      >
        {isLight ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-amber-400" />}
        <span>{isLight ? 'Ljust Tema' : 'Mörkt Tema'}</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-main)] transition-all hover:border-amber-500 hover:rotate-12 hover:shadow-amber-glow"
      aria-label="Växla tema"
    >
      <Sun
        className={`w-[18px] h-[18px] text-amber-500 absolute transition-all duration-300 ${
          isLight ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
        }`}
      />
      <Moon
        className={`w-[18px] h-[18px] text-amber-400 absolute transition-all duration-300 ${
          isLight ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
        }`}
      />
    </button>
  );
}
