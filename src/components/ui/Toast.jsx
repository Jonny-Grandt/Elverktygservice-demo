import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function ToastContainer({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none max-w-sm w-[calc(100%-2.5rem)]">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glass)] border-l-4 border-l-emerald-500 shadow-2xl text-[var(--text-main)] animate-slide-in"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-sm font-medium leading-snug">{toast.message}</div>
        </div>
      ))}
    </div>
  );
}
