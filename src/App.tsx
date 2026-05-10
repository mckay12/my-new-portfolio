import React, { useState, useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import GridBackground from './components/GridBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Basic loading state simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
         {/* Simple loading spinner matching cinematic feel */}
         <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <ReactLenis root>
      <main className="w-full min-h-screen bg-[#111111] overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
        <GridBackground />
        <Navbar />
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
    </ReactLenis>
  );
}

export default App;
