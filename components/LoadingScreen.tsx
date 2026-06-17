'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#060505]"
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <div className="text-center">
        <motion.div
          className="mx-auto mb-6 h-20 w-20 rounded-full border border-[#ddb97a]/25 border-t-[#ddb97a]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
        />
        <motion.p
          className="font-display text-4xl tracking-[0.3em] text-[#f5e8cd]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Interior Designer
        </motion.p>
        <p className="mt-4 text-xs uppercase tracking-[0.5em] text-white/50">
          Preparing the studio
        </p>
      </div>
    </motion.div>
  );
}
