'use client';

import { motion } from 'framer-motion';

const navItems = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact']
];

export default function Navbar() {
  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-8"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-4">
        <a href="#top" className="font-display text-lg tracking-[0.35em] text-[#f8edd5]">
          NISHKA
        </a>
        <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.35em] text-white/65 md:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-[#f2d9a0]">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
