import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    period: '2026 - Present',
    role: 'Senior Frontend Developer',
    company: 'NOBLEX',
    description: 'Noblex is a community-driven platform designed for NIT Warangal alumni to connect, share experiences, opportunities, and insights related to college life, careers, and beyond. It acts as a centralized hub for collaboration, networking, and knowledge exchange.',
  },
  {
    period: '2023 - Present',
    role: 'B.Tech (CGPA - 7.65)',
    company: 'NIT Warangal',
    description: 'A third-year B.Tech student at the National Institute of Technology Warangal, passionate about web development, React, and problem-solving using data structures and algorithms.',
  },
  {
    period: '2021 - 2023',
    role: 'Intermediate ( percentage - 96.3%)',
    company: 'Resonance Junior College',
    description: 'Secured a seat in NITW Among the top 4% of candidates to crack JEE Mains',
  },
];

export default function Experience() {
  return (
    <section className="relative w-full min-h-screen bg-zinc-950 flex flex-col items-center py-24 z-20" id="experience">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Experience & <span className="text-zinc-500 italic">Education</span>.
          </h2>
        </motion.div>

        <div className="relative border-l border-zinc-800 ml-4 md:mx-auto md:border-l-0 md:before:absolute md:before:inset-y-0 md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-px md:before:bg-zinc-800 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-zinc-600 group-hover:bg-white group-hover:shadow-[0_0_10px_#fff] transition-all duration-300 z-10" />

              {/* Content Card */}
              <div className="ml-8 md:ml-0 md:w-5/12 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group-hover:bg-white/[0.05] transition-colors">
                <span className="text-zinc-500 text-sm font-medium tracking-wide mb-2 block">{exp.period}</span>
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-zinc-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
