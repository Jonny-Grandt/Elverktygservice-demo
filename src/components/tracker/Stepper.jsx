import React from 'react';
import { Check } from 'lucide-react';

export function Stepper({ steps, currentStep }) {
  return (
    <div className="relative mt-8">
      {/* Stepper container */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
        {steps.map((step) => {
          const isDone = step.num < currentStep;
          const isCurrent = step.num === currentStep;

          return (
            <div
              key={step.num}
              className={`flex md:flex-col items-center md:items-center gap-3 md:gap-2 text-left md:text-center p-3 rounded-xl transition ${
                isCurrent
                  ? 'bg-amber-500/10 border border-amber-500/30'
                  : 'bg-[var(--bg-darker)]/40 border border-[var(--border-glass)]'
              }`}
            >
              {/* Step Circle */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-heading font-black text-sm shrink-0 transition-all ${
                  isDone
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : isCurrent
                    ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-500/20 shadow-md shadow-amber-500/30'
                    : 'bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-subtle)]'
                }`}
              >
                {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : step.num}
              </div>

              {/* Step Info */}
              <div className="flex flex-col md:items-center">
                <div
                  className={`text-xs font-bold font-heading ${
                    isCurrent ? 'text-amber-500' : isDone ? 'text-emerald-400' : 'text-[var(--text-main)]'
                  }`}
                >
                  {step.title}
                </div>
                <div className="text-[11px] text-[var(--text-muted)] line-clamp-1">{step.desc}</div>
                <div className="text-[10px] text-[var(--text-subtle)] font-mono mt-0.5">{step.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
