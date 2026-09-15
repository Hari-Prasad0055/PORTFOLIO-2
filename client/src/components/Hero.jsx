import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, FileText, Mail, Cpu, Database, Brain, Sparkles, Layers, Activity } from 'lucide-react';

const systemNodes = [
  { id: 'input', label: 'INPUT', desc: 'Raw Signals & Prompts', icon: Sparkles, color: 'from-blue-500 to-cyan-500', glow: 'bg-blue-500/20' },
  { id: 'data', label: 'DATA', desc: 'Embeddings & Pipelines', icon: Database, color: 'from-cyan-500 to-teal-500', glow: 'bg-cyan-500/20' },
  { id: 'model', label: 'MODEL', desc: 'LLMs, CNNs & Agents', icon: Brain, color: 'from-violet-500 to-purple-500', glow: 'bg-violet-500/20' },
  { id: 'system', label: 'SYSTEM', desc: 'MERN & Scalable Architecture', icon: Cpu, color: 'from-indigo-500 to-blue-600', glow: 'bg-indigo-500/20' },
  { id: 'impact', label: 'IMPACT', desc: 'Real-time Intelligence', icon: Activity, color: 'from-emerald-500 to-teal-600', glow: 'bg-emerald-500/20' },
];

const liveBadges = [
  { tag: 'AI', label: 'Multi-Agent', status: 'ACTIVE' },
  { tag: 'ML', label: 'Deep Learning', status: 'TRAINED' },
  { tag: 'SOFTWARE', label: 'MERN Stack', status: 'DEPLOYED' },
  { tag: 'DATA', label: 'Biometrics & Voice', status: 'INDEXED' },
  { tag: 'DSA', label: '450+ Solved', status: 'OPTIMIZED' },
];

export default function Hero() {
  const [activeNode, setActiveNode] = useState(2); // Default selected Model

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 flex flex-col justify-center bg-[#faf9f5] bg-grid-pattern overflow-hidden" id="hero">
      {/* Background Radial Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content & Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Command Chip */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-xs mb-8 text-xs font-mono text-slate-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wider text-slate-900">HARI PRASAD</span>
              <span className="text-slate-300">|</span>
              <span className="text-blue-600 font-medium">AI COMMAND CENTER</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6">
              HARI <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">PRASAD</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 tracking-tight mb-4">
              AI/ML & Full Stack Developer
            </h2>

            {/* Value Proposition */}
            <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-10">
              Designing Code. <span className="text-slate-900 font-semibold italic">Engineering Intelligence.</span> <br />
              Bridging design, performance, and scalable AI systems.
            </p>

            {/* Live Interactive Navigation Badges */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {liveBadges.map((badge, idx) => (
                <div
                  key={badge.tag}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 border border-slate-200/80 text-xs font-mono shadow-xs hover:border-blue-400 transition-colors"
                >
                  <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 font-bold text-[10px]">
                    {badge.tag}
                  </span>
                  <span className="text-slate-700 font-medium">{badge.label}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowDownRight size={18} />
              </a>

              <a
                href="/HARI PRASAD_CV.pdf"
                download="Hari Prasad CV.pdf"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-800 font-semibold text-base hover:bg-slate-50 hover:border-slate-300 shadow-xs transition-all duration-300"
              >
                <FileText size={18} className="text-slate-500" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-900 text-white font-semibold text-base hover:bg-slate-800 transition-all duration-300"
              >
                <Mail size={18} />
                <span>Contact</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Interactive AI ENGINEERING SYSTEM Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* System Visualizer Card Container */}
            <div className="relative rounded-3xl p-6 md:p-8 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-xl overflow-hidden">
              
              {/* Header Status Bar */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                      AI ENGINEERING SYSTEM
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">Architecture Pipeline v2.4</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 text-[11px] font-mono font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ONLINE
                </span>
              </div>

              {/* Connected Pipeline Flow */}
              <div className="space-y-3 mb-6 relative">
                {/* Connecting Line Backdrop */}
                <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-400 via-violet-400 to-emerald-400 opacity-30 -z-0" />

                {systemNodes.map((node, index) => {
                  const Icon = node.icon;
                  const isActive = activeNode === index;
                  return (
                    <motion.div
                      key={node.id}
                      onClick={() => setActiveNode(index)}
                      whileHover={{ x: 4 }}
                      className={`relative z-10 cursor-pointer p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                        isActive
                          ? 'bg-white border-blue-400 shadow-md ring-2 ring-blue-500/10'
                          : 'bg-slate-50/60 border-slate-200/70 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${node.color} text-white shadow-xs`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-slate-900">{node.label}</span>
                            {isActive && <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700">SELECTED</span>}
                          </div>
                          <span className="text-xs text-slate-500 font-normal">{node.desc}</span>
                        </div>
                      </div>

                      {/* Connection Pulse Signal */}
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-blue-600 animate-ping' : 'bg-slate-300'}`} />
                        <span className="text-[10px] font-mono text-slate-400">0{index + 1}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Dashboard Live Metrics Footer */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60 text-center">
                  <span className="text-xs text-slate-500 font-mono block">LeetCode</span>
                  <span className="text-sm font-bold text-slate-900 font-mono">450+ Solved</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60 text-center">
                  <span className="text-xs text-slate-500 font-mono block">Education</span>
                  <span className="text-sm font-bold text-blue-600 font-mono">NIT Warangal</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60 text-center">
                  <span className="text-xs text-slate-500 font-mono block">Experience</span>
                  <span className="text-sm font-bold text-violet-600 font-mono">Deccan AI</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
