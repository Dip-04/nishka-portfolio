'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-8"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="glass mx-auto rounded-2xl px-4 py-4 md:rounded-full md:px-5">
        <div className="flex items-center justify-between">
          <a href="#top" className="font-display text-base tracking-[0.28em] text-[#f4f7ff] md:text-lg md:tracking-[0.35em]">
            NISHKA
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">{open ? 'Close' : 'Menu'}</span>
          </button>
          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.35em] text-white/65 md:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-[#66f7ff]">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div
          className={`mt-4 overflow-hidden transition-all duration-300 md:hidden ${
            open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="grid gap-2 border-t border-white/8 pt-4 text-sm uppercase tracking-[0.28em] text-white/68">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-xl px-3 py-3 transition hover:bg-white/5 hover:text-[#66f7ff]"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
