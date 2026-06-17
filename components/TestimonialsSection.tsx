'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { testimonials } from '@/lib/content';

export default function TestimonialsSection() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Premium client experiences that feel calm and collaborative"
          description="Dummy testimonials are presented here to complete the portfolio narrative with a polished, globally inspired tone."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              className="glass rounded-[2rem] p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
            >
              <blockquote className="text-base leading-8 text-white/74">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-8">
                <div className="font-display text-2xl text-[#f4f7ff]">{testimonial.name}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.35em] text-[#66f7ff]">
                  {testimonial.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
