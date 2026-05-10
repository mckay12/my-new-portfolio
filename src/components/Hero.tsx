import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const fn = () => setTime(new Date().toLocaleTimeString());
    fn();
    const interval = setInterval(fn, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-start pt-24 pb-10 overflow-hidden" id="home">
      <div className="w-full h-full max-w-[1800px] mx-auto flex relative px-4 lg:px-8">
        <div className="flex-1 flex flex-col relative">
          
          {/* Time floating element */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 bg-indigo-500/50 border border-indigo-400/30 rounded-full py-2 px-6 hidden md:block z-20 shadow-md"
          >
            <div className="font-mono font-bold text-sm text-indigo-100">{time}</div>
          </motion.div>

          <div className="flex-1 flex flex-col items-center justify-start relative mt-24 md:mt-40">
            <h2 className="font-handwriting text-3xl sm:text-5xl mb-3 self-center tracking-tighter w-full max-w-2xl text-center text-indigo-100 opacity-80">my name is</h2>
            
            {/* Name card */}
            <div className="relative bg-white rounded-[28px] sm:rounded-[40px] shadow-2xl border-4 border-indigo-200 p-5 py-8 sm:p-8 sm:py-12 md:py-16 md:px-12 w-fit mx-auto select-none mt-2 rotate-1 text-[#312E81]">
              
              {/* Tags - hide on very small screens */}
              <div className="absolute -top-12 left-0 md:-left-8 rotate-[14deg] bg-[#F472B6] text-white shadow-xl rounded-2xl px-3 py-2 sm:px-4 sm:py-3 hidden sm:block">
                <p className="font-bold text-xs sm:text-sm whitespace-nowrap">Currently at Meridian Health</p>
              </div>
              <div className="absolute -top-10 right-0 md:-right-10 -rotate-[8deg] bg-[#FACC15] text-[#312E81] shadow-xl rounded-2xl px-3 py-2 sm:px-4 sm:py-3 hidden sm:block">
                <p className="font-bold text-xs sm:text-sm whitespace-nowrap">Previously at Searchless AI</p>
              </div>

              <h1 className="text-[60px] sm:text-[100px] md:text-[150px] font-black leading-[0.8] tracking-tighter uppercase font-sans">
                MICHEAL
              </h1>
            </div>

            {/* Available badge */}
            <div className="mt-6 flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-brand-yellow"></div>
               <span className="font-mono text-xs sm:text-sm uppercase tracking-tighter text-indigo-100 font-bold">Available for thoughtful projects</span>
            </div>

            {/* CTA */}
            <div className="mt-10 sm:mt-20 max-w-sm text-center relative z-10 px-4">
              <p className="font-bold text-2xl sm:text-4xl leading-[1.1] tracking-tight mb-6 sm:mb-8 text-white italic">
                I design outstanding digital products.
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-4 bg-[#FACC15] text-[#312E81] shadow-[0_8px_0_rgb(202,138,4)] rounded-2xl font-black active:translate-y-1 active:shadow-none border-0 transition-all uppercase tracking-wider text-sm">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-indigo-600 mr-2 shadow-sm">
                   <ArrowDownRight className="w-4 h-4 stroke-[3]" />
                </div>
                Contact Me
              </a>
            </div>
            
            {/* Floating tags - desktop only */}
            <motion.div 
               animate={{ x: [0, 150, 0], y: [0, -150, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
               whileHover={{ scale: 1.05 }}
               drag dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
               className="absolute top-[60%] left-[5%] xl:left-[10%] bg-brand-yellow text-[#312E81] font-mono text-sm uppercase px-6 py-4 rounded-full border-0 cursor-grab active:cursor-grabbing rotate-6 hidden lg:flex items-center shadow-lg z-20 font-bold"
            >
              <div className="w-6 h-6 mr-3 border-2 border-indigo-900/20 rounded-full flex items-center justify-center -rotate-[15deg]">
                 <div className="w-1.5 h-1.5 bg-[#312E81] rounded-full"></div>
              </div>
              Product Designer
            </motion.div>
            
            <motion.div 
               animate={{ x: [0, -150, 0], y: [0, -150, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
               whileHover={{ scale: 1.05 }}
               drag dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
               className="absolute top-[80%] right-[5%] xl:right-[15%] bg-brand-pink font-mono text-white text-sm uppercase px-6 py-4 rounded-full border-0 cursor-grab active:cursor-grabbing -rotate-6 hidden lg:flex items-center shadow-lg z-20 font-bold"
            >
              Chicago, IL
            </motion.div>

            {/* Floating avatars - desktop only */}
            <motion.div 
               drag dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
               className="group absolute top-[20%] left-[20%] h-16 rounded-full border-[3px] border-white/40 shadow-xl cursor-grab active:cursor-grabbing hidden lg:flex items-center bg-indigo-300 overflow-hidden w-16 hover:w-[190px] transition-all duration-300 ease-in-out z-20"
            >
              <img src="https://framerusercontent.com/images/tEtevi8JenLoBT4YdyPpWydOJg.png?width=256" className="w-[58px] h-[58px] shrink-0 p-1.5 rounded-full object-cover" />
              <span className="font-bold text-sm text-[#312E81] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-5 ml-1">have a nice day!</span>
            </motion.div>
            
            <motion.div 
               drag dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
               className="group absolute top-[40%] right-[20%] h-16 rounded-full border-[3px] border-white/40 shadow-xl cursor-grab active:cursor-grabbing hidden lg:flex items-center bg-indigo-300 overflow-hidden w-16 hover:w-[190px] transition-all duration-300 ease-in-out z-20"
            >
              <img src="https://framerusercontent.com/images/tEtevi8JenLoBT4YdyPpWydOJg.png?width=256" className="w-[58px] h-[58px] shrink-0 p-1.5 rounded-full object-cover" />
              <span className="font-bold text-sm text-[#312E81] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-5 ml-1">have a nice day!</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
