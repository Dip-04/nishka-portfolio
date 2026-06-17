'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { featuredProjects } from '@/lib/content';

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="A portfolio of immersive, high-trust interiors"
          description="Each project is presented with concept, challenge, solution, and visual storytelling to mirror the experience of a premium design studio."
        />

        <div className="mt-14 space-y-10">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass overflow-hidden rounded-[2rem]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.45em] text-[#ddb97a]">
                    Project 0{index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-4xl text-[#f6e7c6] md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/45">
                    {project.type}
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/8 bg-white/5 p-6">
                      <p className="text-xs uppercase tracking-[0.4em] text-[#ddb97a]">Concept</p>
                      <p className="mt-4 text-sm leading-7 text-white/70">{project.concept}</p>
                    </div>
                    <div className="rounded-3xl border border-white/8 bg-white/5 p-6">
                      <p className="text-xs uppercase tracking-[0.4em] text-[#ddb97a]">Challenge</p>
                      <p className="mt-4 text-sm leading-7 text-white/70">{project.challenge}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-3xl border border-white/8 bg-white/5 p-6">
                    <p className="text-xs uppercase tracking-[0.4em] text-[#ddb97a]">Solution</p>
                    <p className="mt-4 text-sm leading-7 text-white/70">{project.solution}</p>
                  </div>
                </div>

                <div className="grid gap-4 p-6 md:p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="overflow-hidden rounded-[1.6rem]">
                      <Image
                        src={project.beforeImage}
                        alt={`${project.title} before`}
                        width={1200}
                        height={900}
                        className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden rounded-[1.6rem]">
                      <Image
                        src={project.afterImage}
                        alt={`${project.title} after`}
                        width={1200}
                        height={900}
                        className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                    {project.gallery.map((image) => (
                      <div key={image} className="overflow-hidden rounded-[1.2rem]">
                        <Image
                          src={image}
                          alt={`${project.title} gallery`}
                          width={1200}
                          height={900}
                          className="h-40 w-full object-cover transition duration-500 hover:scale-105 sm:h-36"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
