'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import type { FeaturedProject } from '@/lib/content';

export default function ProjectModal({
  project,
  open,
  onClose
}: {
  project: FeaturedProject | null;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && project ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#040611]/75 px-4 py-6 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass neon-border relative max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-[1.75rem] border border-white/10"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-5 md:p-8">
                <p className="text-xs uppercase tracking-[0.5em] text-[#66f7ff]">Cinematic preview</p>
                <h3 className="mt-4 font-display text-4xl text-[#f4f7ff] md:text-6xl">{project.title}</h3>
                <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/50">{project.type}</p>
                <p className="mt-6 text-sm leading-7 text-white/72">{project.concept}</p>
                <p className="mt-5 text-sm leading-7 text-white/72">{project.challenge}</p>
                <p className="mt-5 text-sm leading-7 text-white/72">{project.solution}</p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 transition hover:bg-white/10"
                >
                  Close preview
                </button>
              </div>
              <div className="grid gap-4 p-5 md:p-8">
                <Image
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  width={1400}
                  height={1000}
                  className="h-64 w-full rounded-[1.35rem] object-cover md:h-80"
                />
                <Image
                  src={project.afterImage.src}
                  alt={project.afterImage.alt}
                  width={1400}
                  height={1000}
                  className="h-72 w-full rounded-[1.35rem] object-cover md:h-[26rem]"
                />
                <div className="grid grid-cols-3 gap-3">
                  {project.gallery.map((image) => (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={900}
                      className="h-28 w-full rounded-[1rem] object-cover md:h-36"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
