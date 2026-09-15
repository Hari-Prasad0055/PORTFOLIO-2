import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download, Terminal, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:uhari0055@gmail.com?subject=New Portfolio Contact from ${name}&body=${body}`;
  };

  return (
    <section className="relative w-full py-28 bg-[#faf9f5] border-t border-slate-200/60" id="contact">
      <div className="max-w-5xl mx-auto px-6 w-full text-center">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Terminal size={14} /> 06 / TRANSMISSION TERMINAL
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            LET'S BUILD SOMETHING <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">INTELLIGENT.</span>
          </h2>

          <p className="text-slate-600 text-lg md:text-xl font-normal max-w-2xl mx-auto mb-10">
            Currently open for new opportunities. Whether you have a project idea, question, or just want to connect, my inbox is always ready.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="mailto:uhari0055@gmail.com"
              className="flex items-center gap-2.5 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              <Mail size={18} />
              Say Hello
            </a>

            <a
              href="/HARI PRASAD_CV.pdf"
              download="Hari Prasad CV.pdf"
              className="flex items-center gap-2.5 px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-xs"
            >
              <Download size={18} className="text-slate-500" />
              Download Resume
            </a>
          </div>

          {/* Contact Terminal Form */}
          <div className="max-w-xl mx-auto w-full rounded-3xl p-8 bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-sm text-left mb-16">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase flex items-center gap-2">
                <Terminal size={14} className="text-blue-600" /> DIRECT MESSAGE DISPATCH
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-bold text-slate-700">YOUR NAME</label>
                <input
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-bold text-slate-700">YOUR EMAIL</label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono font-bold text-slate-700">MESSAGE</label>
                <textarea
                  rows="4"
                  placeholder="Describe your project, inquiry, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-slate-900 text-white font-bold rounded-2xl px-5 py-4 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

          {/* Social Icons Bar */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <a
              href="https://github.com/Hari-Prasad0055"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:scale-110 transition-all shadow-2xs"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/hari0055/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-slate-300 hover:scale-110 transition-all shadow-2xs"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="https://leetcode.com/u/uhariprasad/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode (450+ Solved)"
              className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-yellow-600 hover:border-slate-300 hover:scale-110 transition-all shadow-2xs"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 5.79a1.374 1.374 0 0 0-.416.974c0 .376.156.717.416.974l5.352 5.352c.257.257.598.416.974.416.376 0 .717-.159.974-.416l5.352-5.352a1.374 1.374 0 0 0 .416-.974 1.374 1.374 0 0 0-.416-.974L14.453.438A1.374 1.374 0 0 0 13.483 0zm-6.07 9.878a1.374 1.374 0 0 0-.974.416L1.087 15.646a1.374 1.374 0 0 0 0 1.948l5.352 5.352c.257.257.598.416.974.416.376 0 .717-.159.974-.416l5.352-5.352a1.374 1.374 0 0 0 0-1.948L8.387 10.294a1.374 1.374 0 0 0-.974-.416z"/>
              </svg>
            </a>
          </div>

          <div className="text-slate-400 text-xs font-mono">
            © {new Date().getFullYear()} Hari Prasad • AI Command Center Portfolio.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
