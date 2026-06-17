'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A design practice shaped by atmosphere, clarity, and proportion"
          description="The studio approaches interior design as an elegant orchestration of space, light, and material. Each project begins with the client's story and ends with a room that feels intentional, practical, and quietly luxurious."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="glass overflow-hidden rounded-[2rem]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://picsum.photos/seed/about-interior/1200/1200"
              alt="Elegant interior detail"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              className="glass rounded-[2rem] p-8 md:p-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="gold-line font-display text-3xl text-[#f4f7ff] md:text-4xl">
                Professional Introduction
              </p>
              <p className="mt-8 text-sm leading-8 text-white/70 md:text-base">
                I design interiors for clients who value precision, atmosphere, and long-term usability.
                My work spans homes, offices, studios, and hospitality-inspired spaces where every detail
                contributes to a calm and memorable experience.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                className="glass rounded-[2rem] p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <h3 className="font-display text-2xl text-[#f4f7ff]">Journey</h3>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  From technical drafting to immersive 3D storytelling, the journey has been about
                  translating vision into environments that are both beautiful and functional.
                </p>
              </motion.div>
              <motion.div
                className="glass rounded-[2rem] p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <h3 className="font-display text-2xl text-[#f4f7ff]">Philosophy</h3>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  Luxury is not excess. It is restraint, comfort, material honesty, and an unwavering
                  attention to how a space makes people feel.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
