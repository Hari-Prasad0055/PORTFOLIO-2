import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Server, Terminal, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'aiml', label: 'AI & Machine Learning' },
  { id: 'databases', label: 'Databases & Cloud' },
];

const skillsMatrix = [
  { name: 'Python', category: 'languages', icon: Code2, desc: 'NumPy, Pandas, Data Analysis', level: 'Advanced', highlight: true },
  { name: 'JavaScript', category: 'languages', icon: Code2, desc: 'ES6+, Async Architecture', level: 'Advanced', highlight: true },
  { name: 'Java & DSA', category: 'languages', icon: Cpu, desc: 'Algorithms & Complex Logic', level: 'Advanced', highlight: true },
  
  { name: 'React.js', category: 'frontend', icon: Layers, desc: 'Hooks, State, Framer Motion', level: 'Expert', highlight: true },
  { name: 'MERN Stack', category: 'frontend', icon: Layers, desc: 'MongoDB, Express, React, Node', level: 'Expert', highlight: true },
  { name: 'Tailwind CSS / HTML5', category: 'frontend', icon: Layers, desc: 'Responsive Design & Glassmorphism', level: 'Advanced', highlight: false },

  { name: 'Node.js & Express.js', category: 'backend', icon: Server, desc: 'RESTful APIs, Authentication', level: 'Advanced', highlight: true },
  { name: 'Flask', category: 'backend', icon: Server, desc: 'Python Web Micro-framework', level: 'Intermediate', highlight: false },
  { name: 'RESTful APIs', category: 'backend', icon: Server, desc: 'JSON Schemas & Endpoints', level: 'Advanced', highlight: false },
  { name: 'Passport.js & OAuth 2.0', category: 'backend', icon: Server, desc: 'Secure Google Auth Systems', level: 'Intermediate', highlight: false },

  { name: 'ML & Deep Learning', category: 'aiml', icon: Sparkles, desc: 'CNN, NLP, Neural Nets', level: 'Advanced', highlight: true },
  { name: 'Multi-Agent LLMs (Agno)', category: 'aiml', icon: Sparkles, desc: 'Groq LLM, Llama 3.3 70B', level: 'Expert', highlight: true },
  { name: 'OpenAI API & Generative AI', category: 'aiml', icon: Sparkles, desc: 'Prompt Engineering & Agents', level: 'Advanced', highlight: true },
  { name: 'Facial Biometrics (Dlib)', category: 'aiml', icon: Sparkles, desc: 'FaceRecognition Biometrics', level: 'Intermediate', highlight: false },
  { name: 'Voice Signatures (Librosa)', category: 'aiml', icon: Sparkles, desc: 'Resemblyzer & Audio Analysis', level: 'Intermediate', highlight: false },

  { name: 'MongoDB', category: 'databases', icon: Database, desc: 'NoSQL Schemas & Aggregation', level: 'Advanced', highlight: true },
  { name: 'Supabase', category: 'databases', icon: Database, desc: 'PostgreSQL Backend-as-a-Service', level: 'Advanced', highlight: false },
  { name: 'MySQL', category: 'databases', icon: Database, desc: 'Relational Database Queries', level: 'Intermediate', highlight: false },
];

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsMatrix
    : skillsMatrix.filter(s => s.category === activeCategory);

  return (
    <section className="relative w-full py-28 bg-[#faf9f5] border-t border-slate-200/60" id="skills">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Terminal size={14} /> 02 / TECH MATRIX
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              TECH STACK <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">MATRIX</span>
            </h2>
            <p className="text-slate-600 text-lg font-normal max-w-xl mt-3">
              Interactive technology classification dashboard mapped across AI, Full-Stack, and Algorithms.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-mono text-slate-600">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>{filteredSkills.length} Technologies Indexed</span>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white/80 text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Matrix Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                className={`group rounded-3xl p-5 bg-white/80 backdrop-blur-md border transition-all duration-300 ${
                  skill.highlight
                    ? 'border-slate-200/90 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5'
                    : 'border-slate-200/60 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 text-slate-700 transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 uppercase border border-slate-200/60">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  {skill.desc}
                </p>

                <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                  <CheckCircle2 size={12} className="text-emerald-500" />
                  <span>VERIFIED IN PRODUCTION</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
