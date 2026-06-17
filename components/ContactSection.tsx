'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-24 pb-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="glass rounded-[2rem] p-8 md:p-10"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.55em] text-[#ddb97a]">Contact</p>
            <h2 className="font-display text-4xl text-[#f6e7c6] md:text-6xl">
              Let's design something extraordinary
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/68 md:text-base">
              For residential, commercial, and creative studio projects, reach out with your brief and
              timelines. This portfolio is ready to be deployed on Vercel with no backend required.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#25d366] px-5 py-3 text-sm font-semibold text-[#06120a] transition hover:scale-[1.02]"
              >
                WhatsApp
              </a>
              <a
                href="mailto:hello@interiordesignstudio.com"
                className="rounded-full border border-[#ddb97a]/30 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-[#ddb97a]/60"
              >
                Email
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/70 transition hover:bg-white/5"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/70 transition hover:bg-white/5"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            className="glass rounded-[2rem] p-8 md:p-10"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-white/70">
                Name
                <input
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 outline-none transition placeholder:text-white/30 focus:border-[#ddb97a]/60"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm text-white/70">
                Email
                <input
                  type="email"
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 outline-none transition placeholder:text-white/30 focus:border-[#ddb97a]/60"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm text-white/70">
              Project details
              <textarea
                rows={6}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 outline-none transition placeholder:text-white/30 focus:border-[#ddb97a]/60"
                placeholder="Tell me about your space, goals, and timeline."
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-[#f3d8a4] px-6 py-4 text-sm font-semibold text-[#17110d] transition hover:bg-[#ffe2ab]"
            >
              Send Enquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
