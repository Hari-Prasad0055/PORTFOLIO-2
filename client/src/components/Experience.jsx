import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Terminal, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    period: '2026 - Present',
    role: 'AI Data Consultant',
    company: 'Deccan AI',
    type: 'Professional Experience',
    icon: Briefcase,
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    description: 'Worked on AI data annotation and quality assurance projects. Supported the creation of training datasets for LLMs. Analyzed text, audio, and/or image data to improve dataset accuracy and consistency.',
    tags: ['LLM Datasets', 'AI Data QA', 'Annotation Pipelines'],
  },
  {
    period: '2023 - Present',
    role: 'B.Tech Student (CGPA: 7.65)',
    company: 'National Institute of Technology Warangal',
    type: 'Higher Education',
    icon: GraduationCap,
    color: 'bg-violet-50 text-violet-600 border-violet-200',
    description: 'A third-year B.Tech student at the National Institute of Technology Warangal, passionate about web development, React, and problem-solving using data structures and algorithms.',
    tags: ['Computer Science', 'Data Structures & Algorithms', 'Full Stack Dev'],
  },
  {
    period: '2021 - 2023',
    role: 'Intermediate Education (96.3%)',
    company: 'Resonance Junior College',
    type: 'Academic Excellence',
    icon: Award,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    description: 'Secured a seat in NITW. Ranked among the top 4% of candidates nationwide in JEE Mains examination.',
    tags: ['JEE Mains Top 4%', 'Mathematics & Physics', 'NITW Selection'],
  },
];

export default function Experience() {
  return (
    <section className="relative w-full py-28 bg-[#faf9f5] border-t border-slate-200/60" id="experience">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Terminal size={14} /> 04 / CAREER & EDUCATION
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            ENGINEERING <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">TIMELINE</span>
          </h2>
          <p className="text-slate-600 text-lg font-normal max-w-2xl mx-auto mt-3">
            Chronological progression across AI consultancy, academic rigor at NIT Warangal, and competitive milestones.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Timeline Connector Point */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform shadow-xs" />

                {/* Left Date Label for Desktop */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                  <span className="text-xs font-mono font-bold text-slate-800 px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs">
                    {exp.period}
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="rounded-3xl p-6 md:p-8 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm group-hover:border-blue-300 group-hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl border ${exp.color}`}>
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-500 uppercase">
                        {exp.type}
                      </span>
                    </div>

                    <span className="md:hidden text-xs font-mono font-bold text-blue-600 px-2.5 py-0.5 rounded-md bg-blue-50">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm font-semibold text-slate-600 mb-4 flex items-center gap-1.5">
                    <span>{exp.company}</span>
                  </h4>

                  <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-3 py-1 rounded-xl bg-slate-100 text-slate-700 border border-slate-200/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
