'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false });

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div className="absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-[#ddb97a]/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.55em] text-[#ddb97a]">
            Interior Designer
          </p>
          <h1 className="font-display text-6xl leading-[0.9] text-[#f8ecd5] md:text-8xl">
            Designing spaces that feel elegant, functional, and timeless
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/70 md:text-lg">
            A luxury interior design portfolio crafted like an international studio website, combining
            spatial storytelling, material depth, and cinematic 3D presentation.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[#f3d8a4] px-7 py-4 text-sm font-semibold text-[#15100d] transition duration-300 hover:translate-y-[-2px] hover:bg-[#ffe2ab]"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#ddb97a]/35 bg-white/5 px-7 py-4 text-sm font-semibold text-white/90 transition duration-300 hover:border-[#f3d8a4]/70 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 text-xs uppercase tracking-[0.35em] text-white/45">
            <div className="glass rounded-2xl px-4 py-5">
              12+ years
              <div className="mt-2 tracking-normal text-white/72">Design experience</div>
            </div>
            <div className="glass rounded-2xl px-4 py-5">
              Global
              <div className="mt-2 tracking-normal text-white/72">Studio standard</div>
            </div>
            <div className="glass rounded-2xl px-4 py-5">
              3D-first
              <div className="mt-2 tracking-normal text-white/72">Concept delivery</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[32rem] md:h-[40rem]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/5 shadow-luxe backdrop-blur-3xl">
            <HeroScene />
          </div>
          <div className="absolute -bottom-8 left-6 glass w-[85%] rounded-3xl p-5 md:w-[72%]">
            <p className="text-xs uppercase tracking-[0.35em] text-[#ddb97a]">Signature aesthetic</p>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Dark, tactile, and warm. Every space is layered to feel calm, precise, and deeply lived in.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
