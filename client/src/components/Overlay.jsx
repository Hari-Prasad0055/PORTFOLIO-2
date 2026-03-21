import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Opacities for different texts based on scroll progress
  // 0% - 10%: First text
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // 30% - 40%: Second text
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // 60% - 70%: Third text
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.5, 0.8], [-100, 100]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 font-sans">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center p-8 overflow-hidden">

        {/* Intro Text */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute w-full px-6 top-1/2 -translate-y-1/2 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white text-glow mb-4">
            Hi, I'm <span className="text-zinc-400">Hari Prasad</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 tracking-wide font-light">
            AI/ML & Full Stack Developer.
          </p>
        </motion.div>

        {/* Second Text (Left aligned roughly) */}
        <motion.div
          style={{ opacity: opacity2, x: x2 }}
          className="absolute w-full px-6 md:px-0 md:left-[10%] top-1/2 -translate-y-1/2 max-w-xl text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Designing Code. <span className="text-zinc-400 italic"> Engineering Intelligence.</span> <br />
          </h2>
        </motion.div>

        {/* Third Text (Right aligned roughly) */}
        <motion.div
          style={{ opacity: opacity3, x: x3 }}
          className="absolute w-full px-6 md:px-0 md:right-[10%] top-1/2 -translate-y-1/2 max-w-xl text-center md:text-right"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Bridging <span className="text-blue-400">design</span>, <br />
            performance, and <br />
            <span className="text-purple-400">engineering</span>.
          </h2>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-sm uppercase tracking-widest font-light">Scroll Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
