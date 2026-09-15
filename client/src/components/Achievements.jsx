import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Eye, X, Terminal, Code, Brain, CheckCircle, Flame } from 'lucide-react';

export default function Achievements() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const certificateSrc = '/certificates/AMAZON_HARI PRASAD.pdf';

  return (
    <section className="relative w-full py-28 bg-[#faf9f5] border-t border-slate-200/60" id="achievements">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Terminal size={14} /> 05 / MILESTONES & CREDENTIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            MISSION <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">LOG</span>
          </h2>
          <p className="text-slate-600 text-lg font-normal max-w-2xl mt-3">
            Specialized competitive programming statistics and verified artificial intelligence credentials.
          </p>
        </motion.div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* MISSION 001: Amazon ML Summer School */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="group rounded-3xl p-8 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Mission Badge & Status */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-mono font-bold tracking-wider uppercase">
                  MISSION 001
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono font-bold">
                  <CheckCircle size={14} /> STATUS: COMPLETED
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-amber-100/60 text-amber-700 border border-amber-200/80">
                  <Brain size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    Amazon ML Summer School 2026
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">Issued by Amazon</span>
                </div>
              </div>

              <p className="text-xs font-semibold tracking-wider uppercase text-amber-700 mb-4">
                Selected Participant • Amazon India
              </p>

              <p className="text-slate-600 font-normal leading-relaxed text-sm md:text-base mb-6">
                Selected participant; gained practical exposure to Machine Learning, Deep Learning, NLP, Generative AI, and Agentic AI.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Machine Learning', 'Deep Learning', 'NLP', 'Generative AI', 'Agentic AI'].map((tag) => (
                  <span key={tag} className="text-xs font-mono px-3 py-1 rounded-xl bg-slate-100 text-slate-700 border border-slate-200/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* View Certificate CTA */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 hover:shadow-lg transition-all cursor-pointer shadow-xs"
              >
                <Eye size={16} /> View Official Certificate
              </button>

              <span className="text-xs font-mono text-slate-400">PDF VERIFIED</span>
            </div>
          </motion.div>

          {/* MISSION 002: LeetCode Competitive Programming Module */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="group rounded-3xl p-8 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm hover:border-yellow-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Mission Badge & Status */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1 rounded-xl bg-yellow-50 text-yellow-800 border border-yellow-200 text-xs font-mono font-bold tracking-wider uppercase">
                  MISSION 002
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold">
                  <Flame size={14} /> STATUS: ACTIVE
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-yellow-100/60 text-yellow-700 border border-yellow-200/80">
                  <Code size={22} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                    LeetCode Problem Solving
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">Platform: LeetCode</span>
                </div>
              </div>

              <p className="text-xs font-semibold tracking-wider uppercase text-yellow-700 mb-4">
                Competitive Programming & Data Structures
              </p>

              <p className="text-slate-600 font-normal leading-relaxed text-sm md:text-base mb-6">
                Solved 450+ coding problems on LeetCode, strengthening Data Structures and Algorithms and complex problem-solving skills.
              </p>

              {/* Interactive DSA Module Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-center">
                  <span className="text-3xl font-black text-slate-900 font-mono block">450+</span>
                  <span className="text-xs text-slate-500 font-mono uppercase font-semibold mt-1 block">Problems Solved</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-center">
                  <span className="text-3xl font-black text-emerald-600 font-mono block">DSA</span>
                  <span className="text-xs text-slate-500 font-mono uppercase font-semibold mt-1 block">Core Mastery</span>
                </div>
              </div>
            </div>

            {/* Visit LeetCode Profile CTA */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <a
                href="https://leetcode.com/u/uhariprasad/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-yellow-500 hover:text-slate-950 hover:shadow-lg transition-all shadow-xs"
              >
                <ExternalLink size={16} /> Visit LeetCode Profile
              </a>

              <span className="text-xs font-mono text-slate-400">@uhariprasad</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Certificate Lightbox Viewer Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden flex flex-col items-center"
            >
              {/* Header */}
              <div className="w-full flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Amazon ML Summer School Certificate
                    </h3>
                    <p className="text-xs text-slate-500">Official Certificate of Completion (AMAZON_HARI PRASAD.pdf)</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* PDF Container */}
              <div className="w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-2 min-h-[500px] flex items-center justify-center">
                <iframe src={certificateSrc} className="w-full h-[600px] rounded-xl" title="Amazon ML Summer School Certificate" />
              </div>

              {/* Modal Footer Controls */}
              <div className="w-full flex items-center justify-end gap-4 mt-6 pt-4 border-t border-slate-100">
                <a
                  href={certificateSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Amazon_ML_Summer_School_Certificate.pdf"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-sm font-bold hover:bg-amber-400 transition-colors shadow-xs"
                >
                  <ExternalLink size={16} /> Open Full PDF / Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
