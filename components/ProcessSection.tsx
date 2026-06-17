'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { processSteps } from '@/lib/content';

export default function ProcessSection() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="A clear journey from vision to final styling"
          description="The workflow is designed to reduce uncertainty, keep decisions collaborative, and deliver a polished result with confidence."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          {processSteps.map((step, index) => (
            <motion.div
              key={step}
              className="glass rounded-[1.5rem] p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="mb-6 text-xs uppercase tracking-[0.45em] text-[#ddb97a]">0{index + 1}</div>
              <h3 className="font-display text-2xl text-[#f6e7c6]">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
