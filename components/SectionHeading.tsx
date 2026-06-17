'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <p className="mb-4 text-xs uppercase tracking-[0.5em] text-[#66f7ff]">{eyebrow}</p>
      <h2 className="max-w-4xl font-display text-3xl leading-[0.95] text-[#f4f7ff] sm:text-4xl md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 md:text-base">{description}</p>
    </motion.div>
  );
}
