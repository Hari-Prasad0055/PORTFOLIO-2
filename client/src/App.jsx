import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import SkillsMatrix from './components/SkillsMatrix';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#faf9f5] text-slate-900 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 cursor-auto lg:cursor-none">
      <CustomCursor />
      <Navigation />

      <main>
        <Hero />
        <About />
        <SkillsMatrix />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
