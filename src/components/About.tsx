import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="relative w-full py-20 lg:py-32 flex flex-col items-center border-t border-white/10" id="about">
       <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col items-center gap-12 relative">
          
          <div className="w-full max-w-[800px] flex justify-between items-center -ml-20">
             <h2 className="font-handwriting text-4xl -rotate-6 text-indigo-100">about me!</h2>
          </div>

          <div className="bg-indigo-500/50 border border-indigo-400/30 text-indigo-100 rounded-full px-8 py-4 shadow-sm relative -rotate-2 -ml-20">
             <h4 className="font-sans text-3xl font-black italic tracking-tighter">what's up</h4>
          </div>

          {/* Polaroids */}
          <motion.div 
             initial={{ opacity: 0, x: -50, rotate: -5 }}
             whileInView={{ opacity: 1, x: 0, rotate: 12 }}
             whileHover={{ scale: 1.1, rotate: 4, zIndex: 30 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
             className="absolute top-[10%] left-[0%] xl:left-[10%] w-48 hidden lg:block z-20 cursor-pointer"
          >
             <div className="bg-white p-4 shadow-2xl rounded-[28px] border-4 border-indigo-200 text-[#312E81] pb-10">
               <img src="https://framerusercontent.com/images/tEtevi8JenLoBT4YdyPpWydOJg.png?width=256" className="w-full h-auto rounded-2xl" />
               <p className="font-handwriting text-2xl text-center mt-4">2026</p>
             </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 50, rotate: 5 }}
             whileInView={{ opacity: 1, x: 0, rotate: -12 }}
             whileHover={{ scale: 1.1, rotate: -4, zIndex: 30 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
             className="absolute top-[10%] right-[0%] xl:right-[10%] w-48 hidden lg:block z-20 cursor-pointer"
          >
             <div className="bg-white p-4 shadow-2xl rounded-[28px] border-4 border-indigo-200 text-[#312E81] pb-10">
               <img src="https://framerusercontent.com/images/jaipCY5FvgftEDz3qtilGNnLVk.png?width=512" className="w-full h-auto aspect-[3/4] object-cover rounded-2xl" />
               <p className="font-handwriting text-2xl text-center mt-4">my workspace</p>
             </div>
          </motion.div>

          <div className="max-w-[850px] text-center mt-10 relative z-10">
             <h3 className="font-sans font-medium text-4xl md:text-[68px] leading-[1.1] tracking-tight text-white">
               I'm Micheal a product designer in Chicago who gets excited about making complicated things simple.
             </h3>
          </div>

          <div className="w-full max-w-[800px] flex flex-wrap justify-center gap-4 mt-16 relative z-10">
             {/* Interaction Design */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center"
             >
                <div className="bg-indigo-600/80 font-sans font-black italic text-2xl md:text-[40px] tracking-tight px-6 py-3 border-2 border-indigo-400 mr-[-2px] border-r-0 text-white rounded-l-2xl shadow-lg backdrop-blur-sm">
                   Interaction Design
                </div>
                <div className="bg-indigo-600/80 w-20 h-[76px] border-2 border-indigo-400 border-dashed rounded-r-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                    {/* SVG / Icon placeholder */}
                    <div className="w-10 h-10 border-[3px] border-white/50 rounded-full relative">
                        <div className="absolute w-[3px] h-[3px] bg-white -right-[6px] top-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
             </motion.div>

             {/* Prototyping */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center"
             >
                <div className="bg-[#34D399] font-sans font-black italic text-2xl md:text-[40px] tracking-tight px-6 py-3 border-2 border-[#10B981] mr-[-2px] border-r-0 text-[#064E3B] rounded-l-2xl shadow-lg">
                   Prototyping
                </div>
                <div className="bg-white/10 backdrop-blur-md w-20 h-[76px] border-2 border-white/30 rounded-r-2xl flex items-center justify-center -ml-[2px] relative z-10 shadow-lg">
                    <div className="w-10 h-10 border-2 border-white/50 border-dashed rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-brand-pink rounded-full"></div>
                    </div>
                </div>
             </motion.div>

             {/* User Research */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center"
             >
                <div className="bg-brand-pink font-sans font-black italic text-2xl md:text-[40px] tracking-tight px-6 py-3 border-2 border-pink-400 mr-[-2px] border-r-0 text-white rounded-l-2xl shadow-lg">
                   User Research
                </div>
                <div className="bg-brand-pink w-20 h-[76px] border-2 border-pink-400 border-dashed rounded-r-2xl flex items-center justify-center -ml-[2px] relative z-10 shadow-lg">
                   <div className="text-white text-3xl font-black">*</div>
                </div>
             </motion.div>

             {/* Motion Design */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center"
             >
                <div className="bg-brand-yellow font-sans font-black italic text-2xl md:text-[40px] tracking-tight px-6 py-3 border-2 border-yellow-400 mr-[-2px] border-r-0 text-indigo-900 rounded-l-2xl shadow-lg">
                   Motion Design
                </div>
                <div className="bg-brand-yellow w-20 h-[76px] border-2 border-yellow-400 border-dashed rounded-r-2xl flex items-center justify-center -ml-[2px] relative z-10 shadow-lg">
                   <div className="flex gap-1">
                      <div className="w-2 h-4 bg-[#312E81] rounded-full"></div>
                      <div className="w-2 h-6 bg-[#312E81] rounded-full"></div>
                      <div className="w-2 h-8 bg-[#312E81] rounded-full"></div>
                   </div>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
}
