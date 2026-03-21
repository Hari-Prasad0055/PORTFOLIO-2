import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if(!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:uhari0055@gmail.com?subject=New Portfolio Contact from ${name}&body=${body}`;
  };
  return (
    <section className="relative w-full min-h-[70vh] bg-zinc-950 flex flex-col items-center justify-center py-24 z-20 border-t border-white/5" id="contact">
      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Let's create something <br />
            <span className="text-zinc-500 italic">extraordinary.</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-20">
            <a href="mailto:uhari0055@gmail.com" className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform">
              <Mail size={20} />
              Say Hello
            </a>

            <a href="/HARI PRASAD CV.pdf" download="Hari Prasad CV.pdf" className="group flex items-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 hover:scale-105 transition-all">
              <Download size={20} />
              Resume
            </a>
          </div>

          {/* Contact Form */}
          <form className="max-w-md mx-auto w-full flex flex-col gap-4 mb-20 text-left" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-400 font-medium px-2">Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors" 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-400 font-medium px-2">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors" 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-400 font-medium px-2">Message</label>
              <textarea 
                rows="4" 
                placeholder="How can I help you?" 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
              ></textarea>
            </div>
            <button type="submit" className="w-full mt-4 bg-white text-black font-semibold rounded-2xl px-5 py-4 hover:bg-zinc-200 transition-colors">
              Send Message
            </button>
          </form>

          <div className="flex items-center justify-center gap-8">
            <a href="https://github.com/Hari-Prasad0055" className="text-zinc-500 hover:text-white transition-colors duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/hari0055/" className="text-zinc-500 hover:text-white transition-colors duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 text-zinc-600 text-sm font-light">
        © {new Date().getFullYear()} Hari Prasad. All rights reserved.
      </div>
    </section>
  );
}
