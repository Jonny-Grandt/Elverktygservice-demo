import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export function ConfirmationModal({ isOpen, onClose, data }) {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-md rounded-2xl bg-[var(--bg-card)] border border-[var(--border-glass)] p-6 sm:p-8 shadow-2xl z-10 animate-slide-in text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-[var(--bg-darker)] border border-[var(--border-glass)] text-[var(--text-muted)] hover:text-[var(--text-main)] transition"
          aria-label="Stäng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="font-heading font-black text-xl sm:text-2xl text-[var(--text-main)] mb-2">
          Serviceförfrågan Registrerad!
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6">
          Tack <strong className="text-[var(--text-main)]">{data.name}</strong>! Din föranmälan har mottagits i vårt system.
        </p>

        {/* Order code box */}
        <div className="p-5 rounded-xl bg-[var(--bg-darker)] border-2 border-dashed border-amber-500/50 mb-6">
          <span className="text-[11px] font-bold text-[var(--text-subtle)] uppercase tracking-wider block">
            Ditt Order- & Spårningsnummer
          </span>
          <div className="font-mono font-black text-2xl sm:text-3xl text-amber-500 my-1">
            {data.orderCode}
          </div>
          <span className="text-xs text-[var(--text-muted)]">
            Verktyg: <strong className="text-[var(--text-main)]">{data.brand} {data.model}</strong>
          </span>
        </div>

        <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6 text-left">
          En bekräftelse har skickats till din e-post. Du kan när som helst använda spårningsnumret ovan längst upp på vår hemsida för att följa din reparation i verkstaden på Industrigatan 10.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-heading font-bold text-sm shadow-md hover:from-amber-400 hover:to-amber-500 transition"
        >
          Stäng och Gå Tillbaka
        </button>
      </div>
    </div>
  );
}
