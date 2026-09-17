import React from 'react';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';

export function BrandModal({ brand, onClose }) {
  if (!brand) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-2xl bg-[var(--bg-card)] border border-[var(--border-glass)] p-6 sm:p-8 shadow-2xl z-10 animate-slide-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-[var(--bg-darker)] border border-[var(--border-glass)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition"
          aria-label="Stäng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-500 text-xs font-bold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{brand.badge}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-black text-xl sm:text-2xl text-[var(--text-main)] mb-3">
          {brand.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
          {brand.desc}
        </p>

        {/* Features List */}
        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[var(--text-main)] mb-3">
          Verkstadens Garanti & Tjänster:
        </h4>
        <ul className="flex flex-col gap-2.5 mb-8">
          {brand.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-muted)]">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action button */}
        <a
          href="#inlamning"
          onClick={onClose}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-heading font-bold text-sm text-center flex items-center justify-center shadow-md hover:from-amber-400 hover:to-amber-500 transition"
        >
          Föranmäl maskin för service
        </a>
      </div>
    </div>
  );
}
