import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Command, Cpu, ArrowUpRight } from 'lucide-react';

const sections = [
  { id: 'about', label: 'ABOUT', num: '01' },
  { id: 'skills', label: 'SKILLS', num: '02' },
  { id: 'projects', label: 'PROJECTS', num: '03' },
  { id: 'experience', label: 'EXPERIENCE', num: '04' },
  { id: 'achievements', label: 'ACHIEVEMENTS', num: '05' },
  { id: 'contact', label: 'CONTACT', num: '06' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 250;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Floating Glass Command Bar */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-5xl transition-all duration-300">
        <div
          className={`flex items-center justify-between px-6 py-3.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-white/85 backdrop-blur-xl border-slate-300/80 shadow-lg shadow-slate-900/5'
              : 'bg-white/70 backdrop-blur-md border-slate-200/80 shadow-xs'
          }`}
        >
          {/* Logo / Title */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="p-1.5 rounded-xl bg-slate-900 text-white group-hover:bg-blue-600 transition-colors">
              <Command size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 font-mono tracking-wider">HARI PRASAD</span>
              <span className="text-[10px] text-blue-600 font-mono font-medium tracking-tight">AI COMMAND CENTER</span>
            </div>
          </a>

          {/* Desktop Nav Shortcuts */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-semibold">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`transition-colors py-1 relative ${
                    isActive ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="text-slate-400 font-normal mr-1">{sec.num}</span>
                  {sec.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <a
            href="/HARI PRASAD_CV.pdf"
            download="Hari Prasad CV.pdf"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-blue-600 transition-all cursor-pointer shadow-xs"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      {/* Fixed Side SYSTEM MAP Widget (Desktop Only) */}
      <aside className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 pointer-events-auto">
        <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-md flex flex-col gap-2.5">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 px-1">
            <Layers size={14} className="text-blue-600" />
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-slate-500">
              SYSTEM MAP
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`flex items-center gap-3 px-2.5 py-1.5 rounded-xl text-[11px] font-mono transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200/60 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-blue-600 animate-pulse' : 'bg-slate-300'}`} />
                  <span>{sec.num} / {sec.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
