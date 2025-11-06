import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.85))]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_20px_rgba(232,121,249,0.8)]" />
          Allan Sumagui
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-balance font-semibold tracking-tight text-white"
          style={{ fontSize: 'clamp(2rem, 4vw + 1rem, 3.5rem)' }}
        >
          Digital Marketing & Data Analytics Leader | AI-Driven Growth Strategist
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg"
        >
          14+ years optimizing full-funnel performance with $250M+ in managed ad spend. Expert in AI-driven media, analytics engineering, and lifecycle automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-[1.02]"
          >
            <span className="relative z-10">Let’s Build Data-Driven Growth</span>
            <span className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
          </a>
          <a
            href="#case-studies"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:bg-white/10"
          >
            View Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
