import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Cpu, Globe } from 'lucide-react';

const skills = [
  { name: 'MERN Stack', icon: <Layout className="w-5 h-5" />, color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  { name: 'Python , NumPy  , Pandas, JavaScript', icon: <Code2 className="w-5 h-5" />, color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
  { name: 'ML & Deep Learning (CNN, NLP)', icon: <Server className="w-5 h-5" />, color: 'bg-green-500/10 text-green-400 border-green-500/20' },
  { name: 'MongoDB , MYSQL', icon: <Database className="w-5 h-5" />, color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  { name: 'Java & DSA', icon: <Cpu className="w-5 h-5" />, color: 'bg-red-500/10 text-red-400 border-red-500/20' },
  { name: 'AI / Machine Learning', icon: <Globe className="w-5 h-5" />, color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' }
];

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-zinc-950 flex items-center py-24 z-20" id="about">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">
              About Me.<br />
              <span className="text-zinc-500"></span>
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                Full Stack Developer with a strong interest in AI/ML, focused on building intelligent, scalable, and high-performance web applications. I enjoy combining clean design with efficient engineering to create seamless digital experiences.
              </p>
              <p>
                With a solid foundation in Computer Science from NIT Warangal, I specialize in data structures, algorithms, and modern web technologies. I’m passionate about solving real-world problems and integrating AI into practical applications that deliver impact.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl text-white mb-6 font-medium">Core Stack & Technologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className={`flex items-center gap-4 p-4 rounded-xl border border-white/5 backdrop-blur-sm bg-white/[0.02] cursor-default transition-colors`}
                >
                  <div className={`p-2 rounded-lg border ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <span className="text-zinc-200 font-medium text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
