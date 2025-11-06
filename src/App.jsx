import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Gallery from './components/Gallery';
import AwardsContact from './components/AwardsContact';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="text-sm font-semibold tracking-tight">Allan Sumagui</a>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#case-studies" className="hover:text-white">Case Studies</a>
            <a href="#gallery" className="hover:text-white">Dashboards</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Gallery />
        <AwardsContact />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950/80 py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Allan Sumagui. Built with a data-inspired aesthetic.
      </footer>
    </div>
  );
}

export default App;
