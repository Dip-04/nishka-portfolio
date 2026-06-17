'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040611]"
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <div className="text-center">
        <motion.div
          className="mx-auto mb-6 h-20 w-20 rounded-full border border-[#66f7ff]/20 border-t-[#66f7ff]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
        />
        <motion.p
          className="font-display text-4xl tracking-[0.3em] text-[#f4f7ff]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          NISHKA
        </motion.p>
        <p className="mt-4 text-xs uppercase tracking-[0.5em] text-white/50">
          Charging the neon studio
        </p>
      </div>
    </motion.div>
  );
}
