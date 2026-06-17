'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { skills } from '@/lib/content';

export default function SkillsSection() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A technical toolkit built for premium execution"
          description="The process blends design sensitivity with industry-standard drafting, 3D rendering, presentation, and coordination tools."
        />

        <div className="mt-14 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="glass rounded-full px-5 py-3 text-sm text-white/78"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              whileHover={{ y: -3, scale: 1.02 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
