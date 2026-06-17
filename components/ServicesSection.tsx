'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/lib/content';

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Comprehensive design services for refined living and working"
          description="From planning to execution support, the studio creates cohesive environments across residential and commercial briefs."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service}
              className="glass group rounded-[1.6rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ddb97a]/35"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
            >
              <div className="mb-10 h-10 w-10 rounded-full border border-[#ddb97a]/25 bg-white/5 text-center text-sm leading-10 text-[#f3d8a4]">
                0{index + 1}
              </div>
              <h3 className="font-display text-2xl text-[#f4e2bc]">{service}</h3>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-[#ddb97a]/80 to-transparent" />
              <p className="mt-4 text-sm leading-7 text-white/65">
                Premium spatial strategies tailored to the function, identity, and mood of each project.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
