'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false });

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 md:min-h-screen md:pt-28">
      <div className="absolute inset-0">
        <div className="absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-[#ddb97a]/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 md:px-8 lg:min-h-screen lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.55em] text-[#ddb97a]">
            Interior Designer
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-[0.92] text-[#f8ecd5] sm:text-5xl md:text-7xl lg:text-8xl">
            Designing spaces that feel elegant, functional, and timeless
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base md:mt-7 md:text-lg md:leading-8">
            A luxury interior design portfolio crafted like an international studio website, combining
            spatial storytelling, material depth, and cinematic 3D presentation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-10">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[#f3d8a4] px-6 py-3.5 text-sm font-semibold text-[#15100d] transition duration-300 hover:translate-y-[-2px] hover:bg-[#ffe2ab] sm:px-7 sm:py-4"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#ddb97a]/35 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/90 transition duration-300 hover:border-[#f3d8a4]/70 hover:bg-white/10 sm:px-7 sm:py-4"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 text-xs uppercase tracking-[0.35em] text-white/45 sm:grid-cols-3 md:mt-12">
            <div className="glass rounded-2xl px-4 py-4 sm:py-5">
              12+ years
              <div className="mt-2 tracking-normal text-white/72">Design experience</div>
            </div>
            <div className="glass rounded-2xl px-4 py-4 sm:py-5">
              Global
              <div className="mt-2 tracking-normal text-white/72">Studio standard</div>
            </div>
            <div className="glass rounded-2xl px-4 py-4 sm:py-5">
              3D-first
              <div className="mt-2 tracking-normal text-white/72">Concept delivery</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[22rem] sm:h-[28rem] md:h-[40rem]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-luxe backdrop-blur-3xl md:rounded-[2rem]">
            <HeroScene />
          </div>
          <div className="absolute -bottom-6 left-3 right-3 glass rounded-3xl p-4 sm:left-6 sm:right-auto sm:w-[85%] sm:p-5 md:-bottom-8 md:w-[72%]">
            <p className="text-xs uppercase tracking-[0.35em] text-[#ddb97a]">Signature aesthetic</p>
            <p className="mt-2 text-sm leading-6 text-white/75 sm:mt-3 sm:leading-7">
              Dark, tactile, and warm. Every space is layered to feel calm, precise, and deeply lived in.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
