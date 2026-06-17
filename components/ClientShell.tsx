'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';

export default function ClientShell({
  children
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400);
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const next = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(next);
    };
    const onMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);
    onScroll();
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading ? <LoadingScreen key="loading" /> : null}</AnimatePresence>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-1 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-[#66f7ff] via-[#ff5bd6] to-[#f7c96e]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div
        className="pointer-events-none fixed z-[70] hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(102,247,255,0.18)_0%,rgba(255,91,214,0.08)_35%,transparent_70%)] blur-3xl md:block"
        style={{ left: cursor.x, top: cursor.y }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </>
  );
}
