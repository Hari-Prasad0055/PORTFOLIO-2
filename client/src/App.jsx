import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ScrollyCanvas from './components/ScrollyCanvas';
import Overlay from './components/Overlay';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
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
    <div className="bg-zinc-950 text-white min-h-screen font-sans selection:bg-white/30 cursor-none">
      <CustomCursor />
      {/* Floating Header Navbar */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex gap-8 items-center text-sm font-medium shadow-2xl">
        <a href="#about" className="text-zinc-300 hover:text-white transition-colors">About</a>
        <a href="#projects" className="text-zinc-300 hover:text-white transition-colors">Projects</a>
        <a href="#experience" className="text-zinc-300 hover:text-white transition-colors">Experience</a>
        <a href="#contact" className="text-zinc-300 hover:text-white transition-colors">Contact</a>
      </header>

      <main>
        {/* Scrollytelling Hero Section */}
        <section className="relative">
          <ScrollyCanvas totalFrames={120} />
          <Overlay />
        </section>

        {/* Content Sections */}
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
