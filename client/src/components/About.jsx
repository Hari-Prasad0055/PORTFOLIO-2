import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, GraduationCap, Target, Cpu, Terminal, Compass } from 'lucide-react';

export default function About() {
  return (
    <section className="relative w-full py-28 bg-[#faf9f5] border-t border-slate-200/60" id="about">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Terminal size={14} /> 01 / SYSTEM IDENTITY
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            ENGINEER <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">PROFILE</span>
          </h2>
          <p className="text-slate-600 text-lg font-normal max-w-2xl mt-3">
            Structured metadata overview of education, engineering focus, and core competencies.
          </p>
        </motion.div>

        {/* Main Engineer Profile Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Panel: Primary Bio & Strategic Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl p-8 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
                <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                  <UserCheck size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-mono">EXECUTIVE SUMMARY</h3>
                  <span className="text-xs text-slate-500 font-mono">Candidate ID: Hari Prasad • NIT Warangal</span>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed font-normal text-base md:text-lg">
                <p>
                  Full Stack Developer with a strong interest in <strong className="text-slate-900 font-semibold">AI/ML</strong>, focused on building intelligent, scalable, and high-performance web applications. I enjoy combining clean design with efficient engineering to create seamless digital experiences.
                </p>
                <p>
                  With a solid foundation in Computer Science from <strong className="text-slate-900 font-semibold">NIT Warangal</strong>, I specialize in data structures, algorithms, and modern web technologies. I’m passionate about solving real-world problems and integrating AI into practical applications that deliver impact.
                </p>
              </div>
            </div>

            {/* Bottom Status Tickers */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <Compass className="text-blue-600" size={20} />
                <div>
                  <span className="text-xs text-slate-400 font-mono uppercase block">CURRENT LOCATION</span>
                  <span className="text-sm font-semibold text-slate-800">Warangal, India</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="text-violet-600" size={20} />
                <div>
                  <span className="text-xs text-slate-400 font-mono uppercase block">STATUS</span>
                  <span className="text-sm font-semibold text-emerald-600">Open for Opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Structured Academic & Technical Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            {/* Education Card */}
            <div className="rounded-3xl p-6 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-violet-50 text-violet-600 border border-violet-100">
                  <GraduationCap size={20} />
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-mono tracking-wider uppercase">ACADEMIC BACKGROUND</h4>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-slate-900">NIT Warangal</span>
                    <span className="text-xs font-mono font-bold text-blue-600 px-2 py-0.5 rounded bg-blue-50 border border-blue-100">CGPA 7.65</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">B.Tech Student (3rd Year)</p>
                  <p className="text-xs text-slate-400 font-mono mt-1">2023 – Present</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-slate-900">Resonance Junior College</span>
                    <span className="text-xs font-mono font-bold text-emerald-600 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-100">96.3%</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">Intermediate Education (JEE Mains Top 4%)</p>
                  <p className="text-xs text-slate-400 font-mono mt-1">2021 – 2023</p>
                </div>
              </div>
            </div>

            {/* Core Domain Card */}
            <div className="rounded-3xl p-6 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <Cpu size={20} />
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-mono tracking-wider uppercase">CORE COMPETENCIES</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  'Full Stack Web Dev',
                  'AI Agentic Systems',
                  'Machine Learning',
                  'Deep Learning (CNN, NLP)',
                  'Data Structures & Algorithms',
                  'Facial & Voice Biometrics',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
