import React, { useState } from 'react';
import { Search, Sparkles, AlertCircle } from 'lucide-react';
import { trackerMockData } from '../../data/trackerData';
import { Stepper } from './Stepper';

export function RepairTracker({ onToast }) {
  const [searchCode, setSearchCode] = useState('');
  const [activeOrder, setActiveOrder] = useState(trackerMockData['EV-94821']);
  const [error, setError] = useState('');

  const handleSearch = (codeToSearch) => {
    const code = (codeToSearch || searchCode).trim().toUpperCase();
    if (!code) return;

    if (trackerMockData[code]) {
      setActiveOrder(trackerMockData[code]);
      setError('');
      if (onToast) onToast(`Order ${code} hämtades!`);
    } else {
      setError(`Hittade ingen order med nummer "${code}". Testa ett av exempelnumren nedan.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchCode);
  };

  const handleSampleClick = (code) => {
    setSearchCode(code);
    handleSearch(code);
  };

  return (
    <section id="status" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-sky-500/[0.02] to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Box */}
        <div className="card-panel rounded-2xl p-6 sm:p-10 shadow-2xl">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-Time Spårning</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[var(--text-main)] tracking-tight">
              Sök Status på din Reparation
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-2">
              Mata in ditt ordernummer (t.ex. EV-94821) för att följa maskinens väg genom verkstaden i realtid.
            </p>
          </div>

          {/* Search form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
            <div className="relative w-full">
              <input
                type="text"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                placeholder="Mata in Ordernummer (t.ex. EV-94821)"
                className="w-full py-3 px-4 pl-10 rounded-xl bg-[var(--bg-darker)] border border-[var(--border-glass)] text-sm text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-amber-500 transition font-mono uppercase"
              />
              <Search className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-heading font-bold text-sm shadow-md hover:from-amber-400 hover:to-amber-500 transition shrink-0"
            >
              Sök Order
            </button>
          </form>

          {/* Sample tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-[var(--text-subtle)]">
            <span>Testa exempel:</span>
            {['EV-94821', 'EV-94822', 'EV-94823', 'EV-94824'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => handleSampleClick(code)}
                className="px-2.5 py-1 rounded-md bg-[var(--bg-darker)] border border-[var(--border-glass)] font-mono text-[var(--text-muted)] hover:border-amber-500 hover:text-amber-500 transition"
              >
                {code}
              </button>
            ))}
          </div>

          {/* Error notice if not found */}
          {error && (
            <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Live status result card */}
          {activeOrder && (
            <div className="mt-8 pt-8 border-t border-[var(--border-glass)] animate-slide-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[var(--border-glass)]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Aktiv Order hittad
                  </span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[var(--text-main)] mt-1.5">
                    {activeOrder.tool}
                  </h3>
                </div>
                <div className="font-mono font-bold text-xl text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/25 self-start sm:self-center">
                  {searchCode || 'EV-94821'}
                </div>
              </div>

              {/* Order Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-xs">
                <div>
                  <span className="text-[var(--text-subtle)] block">Kund:</span>
                  <strong className="text-[var(--text-main)] text-sm font-semibold">{activeOrder.customer}</strong>
                </div>
                <div>
                  <span className="text-[var(--text-subtle)] block">Beskrivning av fel:</span>
                  <strong className="text-[var(--text-main)] text-sm font-semibold">{activeOrder.issue}</strong>
                </div>
                <div>
                  <span className="text-[var(--text-subtle)] block">Tekniker:</span>
                  <strong className="text-[var(--text-main)] text-sm font-semibold">{activeOrder.tech}</strong>
                </div>
                <div>
                  <span className="text-[var(--text-subtle)] block">Beräknat klart:</span>
                  <strong className="text-amber-500 text-sm font-semibold">{activeOrder.est}</strong>
                </div>
              </div>

              {/* Stepper */}
              <Stepper steps={activeOrder.steps} currentStep={activeOrder.currentStep} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
