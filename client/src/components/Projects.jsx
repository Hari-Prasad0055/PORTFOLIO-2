import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, Cpu, Sparkles, Layers, Activity, ShieldCheck } from 'lucide-react';

const projectLabData = [
  {
    id: 'talent-scout',
    title: 'AI Talent Scout Agent',
    subtitle: 'Multi-Agent LLM Recruitment System',
    badge: 'SYSTEM LAB 01',
    description: 'Developed a multi-agent AI recruitment system using Agno and Groq LLM (Llama 3.3 70B) to automate resume parsing, JD analysis, candidate matching, outreach simulation, and candidate ranking. Designed specialized JD Parser, Candidate Matcher, Outreach Simulator, and Ranker agents to extract requirements, identify skill gaps, calculate match scores, and generate ranked candidate recommendations.',
    tech: ['Agno', 'Groq LLM', 'Llama 3.3 70B', 'Multi-Agent AI', 'Python', 'LLM'],
    github: 'https://github.com/Hari-Prasad0055/',
    live: 'https://talent-scout-frontend-five.vercel.app/',
    accentColor: 'from-blue-600 to-indigo-600',
    borderColor: 'hover:border-blue-400',
    visualNodes: ['Agno Multi-Agent', 'Llama 3.3 70B', 'JD Parser', 'Candidate Ranker'],
  },
  {
    id: 'presence-ai',
    title: 'PresenceAI',
    subtitle: 'Facial Biometrics & Voice Signature Attendance',
    badge: 'SYSTEM LAB 04',
    description: 'Advanced neural networks recognize every student’s face from a single class photo, making attendance instant and accurate. Leveraging FaceRecognition and Dlib for high-fidelity facial biometrics. Utilizing Resemblyzer and Librosa for unique student voice signatures.',
    tech: ['FLASK', 'SUPABASE', 'FaceRecognition', 'Dlib', 'Resemblyzer', 'Librosa'],
    github: 'https://github.com/Hari-Prasad0055/',
    live: 'https://presenceai-virid.vercel.app/',
    accentColor: 'from-emerald-600 to-teal-600',
    borderColor: 'hover:border-emerald-400',
    visualNodes: ['FaceRecognition', 'Dlib Biometrics', 'Resemblyzer Voice', 'Flask API'],
  },
  {
    id: 'genai-chatbot',
    title: 'AI Chatbot Platform (GENAI)',
    subtitle: 'Full-Stack Intelligent Chat Architecture',
    badge: 'SYSTEM LAB 02',
    description: 'Built with the MERN stack (MongoDB, Express.js, React, Node.js), integrating the OpenAI API to process user prompts and generate high-quality, real-time responses similar to ChatGPT.',
    tech: ['MERN Stack', 'React.js', 'Google OAuth 2.0', 'Open-API', 'MongoDB'],
    github: 'https://github.com/Hari-Prasad0055/',
    live: 'https://genai-blush-one.vercel.app/',
    accentColor: 'from-violet-600 to-purple-600',
    borderColor: 'hover:border-violet-400',
    visualNodes: ['MERN Stack', 'OpenAI API', 'OAuth 2.0', 'Express Stream'],
  },
  {
    id: 'wandurlust',
    title: 'WandurLust',
    subtitle: 'Full-Stack Travel & Review Platform',
    badge: 'SYSTEM LAB 03',
    description: 'Developed a full-stack web application where users can register, login, create, browse, and review campgrounds, simulating a real-world travel review platform.',
    tech: ['MERN Stack', 'RESTful APIs', 'Passport.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Hari-Prasad0055/',
    live: 'https://project1-janw.onrender.com/',
    accentColor: 'from-cyan-600 to-teal-600',
    borderColor: 'hover:border-cyan-400',
    visualNodes: ['Node.js Backend', 'Passport Auth', 'MongoDB Atlas', 'REST APIs'],
  },
];

export default function Projects() {
  return (
    <section className="relative w-full py-28 bg-[#faf9f5] border-t border-slate-200/60" id="projects">
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Terminal size={14} /> 03 / SYSTEM DEPLOYMENTS
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            PROJECT <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">LAB</span>
          </h2>
          <p className="text-slate-600 text-lg font-normal max-w-2xl mt-3">
            Interactive software systems, multi-agent AI architectures, and full-stack applications.
          </p>
        </motion.div>

        {/* Project Lab Stacked Horizontal Cards */}
        <div className="space-y-8">
          {projectLabData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group rounded-3xl p-8 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm transition-all duration-300 ${project.borderColor} hover:shadow-xl hover:shadow-slate-900/5`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Left Side: System Details */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                        {project.badge}
                      </span>
                      <span className="text-xs text-blue-600 font-mono font-semibold">
                        {project.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 font-normal leading-relaxed text-sm md:text-base mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono font-semibold px-3 py-1 rounded-xl bg-slate-100 text-slate-700 border border-slate-200/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links & CTA Bar */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 hover:text-slate-900 transition-colors"
                    >
                      <Github size={16} /> Source Repository
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-mono font-bold hover:bg-blue-600 transition-all ml-auto shadow-xs"
                      >
                        <ExternalLink size={14} /> Live Deployment
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Side: Abstract System Architecture Visualizer */}
                <div className="lg:col-span-4 rounded-2xl p-5 bg-slate-50 border border-slate-200/60 flex flex-col justify-between h-full min-h-[200px]">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-500 flex items-center gap-1.5">
                      <Activity size={12} className="text-blue-600" /> SYSTEM NODES
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {/* Visual Abstract Flow Nodes */}
                  <div className="space-y-2 py-4">
                    {project.visualNodes.map((nodeLabel, nIdx) => (
                      <div key={nIdx} className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200/70 text-xs font-mono text-slate-700 shadow-2xs">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          <span>{nodeLabel}</span>
                        </div>
                        <span className="text-[9px] text-slate-400 font-bold">NODE 0{nIdx + 1}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-200/60">
                    <span>ARCHITECTURE: STABLE</span>
                    <ShieldCheck size={14} className="text-emerald-500" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
