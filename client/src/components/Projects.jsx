import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Chatbot Platform (GENAI)',
    description: 'Built with the MERN stack (MongoDB, Express.js, React, Node.js), integrating the OpenAI API to process user prompts and generate high-quality, real-time responses similar to ChatGPT',
    tech: ['MERN Stack', 'React.js', 'Google OAuth 2.0', 'Open-API', 'MongoDB'],
    github: 'https://github.com/Hari-Prasad0055/',
    live: 'https://genai-blush-one.vercel.app/',
  },
  {
    title: 'WandurLust',
    description: 'Developed a full-stack web application where users can register, login, create, browse, and review campgrounds, simulating a real-world travel review platform.',
    tech: ['MERN Stack', 'RESTful APIs', 'Passport.js', 'Node.js', 'MONGODB'],
    github: 'https://github.com/Hari-Prasad0055/',
    live: 'https://project1-janw.onrender.com/',
  },
  {
    title: 'Harbor IQ — DP World Hackathon 2026',
    description: 'Built a smart berth allocation system using MERN stack.Integrated AIS APIs to predict vessel arrivals in real time. Improved decision efficiency by simulating real-world port constraints.',
    tech: ['Vite', 'React', 'AIS API', 'Weather API Integration', 'REST APIs'],
    github: 'https://github.com/Hari-Prasad0055/',
    live: 'https://harbor-iq.vercel.app/',
  }
];

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen bg-zinc-950 flex flex-col items-center py-24 z-20" id="projects">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Built <span className="text-zinc-500 italic"> with purpose</span>.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl font-light">
            A showcase of my recent projects, balancing aesthetics with solid engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group rounded-3xl p-8 flex flex-col justify-between 
                         bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl
                         overflow-hidden transition-all duration-300
                         hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              {/* Subtle ambient glow inside card */}
              <div className="absolute -inset-2 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10" />

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                <a href={project.github} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <Github size={18} /> Source
                </a>
                <a href={project.live} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium ml-auto">
                  <ExternalLink size={18} /> Live Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
