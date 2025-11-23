import { useState } from 'react';

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-neutral-800 rounded-xl border border-neutral-800 bg-neutral-900/30">
      {items.map((it, idx) => (
        <div key={it.q}>
          <button
            className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-neutral-900/50"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <span className="font-medium">{it.q}</span>
            <span className="text-neutral-400">{open === idx ? '−' : '+'}</span>
          </button>
          {open === idx && (
            <div className="px-5 pb-5 text-neutral-300">{it.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}


