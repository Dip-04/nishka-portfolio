'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { featuredProjects } from '@/lib/content';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ProjectModal from '@/components/ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof featuredProjects)[number] | null>(null);

  return (
    <section id="projects" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="A portfolio of immersive, high-trust interiors"
          description="Each project is presented with concept, challenge, solution, and visual storytelling to mirror the experience of a premium design studio."
        />

        <div className="mt-14">
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/45">
            Scroll horizontally to explore the portfolio
          </p>
          <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:gap-6 md:px-0">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass neon-border min-w-[88vw] snap-start overflow-hidden rounded-[2rem] md:min-w-[46rem] lg:min-w-[52rem]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
              whileHover={{ y: -10, rotate: -0.4, scale: 1.01 }}
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.45em] text-[#66f7ff]">
                    Project 0{index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-3xl text-[#f4f7ff] md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/45">
                    {project.type}
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/8 bg-white/5 p-6">
                      <p className="text-xs uppercase tracking-[0.4em] text-[#ff5bd6]">Concept</p>
                      <p className="mt-4 text-sm leading-7 text-white/70">{project.concept}</p>
                    </div>
                    <div className="rounded-3xl border border-white/8 bg-white/5 p-6">
                      <p className="text-xs uppercase tracking-[0.4em] text-[#f7c96e]">Challenge</p>
                      <p className="mt-4 text-sm leading-7 text-white/70">{project.challenge}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-3xl border border-white/8 bg-white/5 p-6">
                    <p className="text-xs uppercase tracking-[0.4em] text-[#66f7ff]">Solution</p>
                    <p className="mt-4 text-sm leading-7 text-white/70">{project.solution}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="mt-5 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/84 transition hover:border-[#66f7ff]/50 hover:bg-white/10"
                  >
                    Open cinematic preview
                  </button>
                </div>

                <div className="grid gap-4 p-6 md:p-8">
                  <BeforeAfterSlider
                    before={project.beforeImage}
                    after={project.afterImage}
                    altBefore={`${project.title} before`}
                    altAfter={`${project.title} after`}
                  />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
      </div>

      <ProjectModal
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
