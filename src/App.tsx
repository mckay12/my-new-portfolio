import React from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import GridBackground from './components/GridBackground';

function App() {
  return (
    <ReactLenis root>
      <main className="w-full min-h-screen overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
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
