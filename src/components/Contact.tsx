import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative w-full py-20 lg:py-40 flex flex-col items-center border-t border-white/10" id="contact">
       <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col items-center gap-20 relative">
          
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
             <div className="flex flex-col relative w-full lg:w-1/2">
                <div className="absolute -left-12 lg:-left-20 top-[60%] -translate-y-1/2 opacity-30 select-none">
                    <img src="https://framerusercontent.com/images/15tDC3W56wHALGPkamhrMtnrjjw.svg" alt="" className="w-32 h-32 md:w-48 md:h-48" />
                </div>
                <h2 className="text-[80px] md:text-[120px] font-black leading-[0.8] tracking-tighter uppercase font-sans z-10 relative text-white italic">
                   Let's<br/>Talk
                </h2>
             </div>
             <div className="w-full lg:w-1/2 max-w-lg z-10 relative">
                <p className="font-sans font-medium text-lg leading-relaxed text-indigo-100">
                   I'm most energized by projects where I can dig into complex problems, collaborate with smart people, and ship things that genuinely improve someone's day.
                </p>
             </div>
          </div>

          <div className="w-full h-[600px] md:h-[800px] bg-indigo-700/50 border border-white/10 backdrop-blur-sm rounded-[40px] relative overflow-hidden flex items-center justify-center shadow-2xl">
             {/* Swiggly Line SVG background */}
             <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60">
                 <motion.svg 
                    viewBox="0 0 1000 600" 
                    className="w-[150%] h-[150%] md:w-full md:h-full stroke-[#FACC15] stroke-[12] fill-none" 
                    style={{ vectorEffect: 'non-scaling-stroke' }}
                 >
                     <motion.path 
                        d="M-100,500 C200,100 400,900 600,300 C800,-300 1200,600 1500,200"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                     />
                 </motion.svg>
             </div>

             {/* Centered CTA contents */}
             <div className="relative z-10 flex flex-col items-center">
                <motion.a 
                   href="mailto:hello@example.com"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="inline-flex items-center gap-4 px-10 py-5 bg-white text-indigo-600 rounded-full font-black shadow-xl transition-all uppercase tracking-widest text-sm"
                >
                   <div className="w-12 h-12 rounded-full border-0 bg-indigo-100 flex items-center justify-center relative flex-shrink-0">
                      <div className="absolute inset-0 bg-[#F472B6] rounded-full blur-[2px] opacity-20"></div>
                      <div className="w-6 h-6 border-0 bg-[#FACC15] rounded-sm z-10 rotate-45"></div>
                   </div>
                   
                   <span className="text-xl">Contact</span>
                </motion.a>
             </div>

             {/* Floating comment card */}
             <motion.div 
                initial={{ y: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 md:top-24 md:left-24 bg-white rounded-[28px] p-6 w-80 shadow-2xl z-20 border-4 border-indigo-200"
             >
                <p className="font-sans font-black text-xs text-[#312E81] mb-4 uppercase tracking-widest">Comment</p>
                <div className="h-px w-full bg-gray-100 mb-4"></div>
                <div className="flex gap-4 items-start">
                   <img src="https://framerusercontent.com/images/SBgwLvjPh3zDCCDeWbOTgfZMdg.jpg?width=432&height=487" alt="Profile" className="w-12 h-12 rounded-full object-cover border border-gray-200" />
                   <div className="flex-1">
                      <h4 className="font-bold text-[#312E81] font-sans mb-1">Bejaman</h4>
                      <p className="font-sans text-sm text-[#312E81] leading-relaxed mb-4 font-medium">
                         Open to contract work, full-time roles, and interesting conversations about hard design problems.
                      </p>
                      
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FACC15] border-0 rounded-full">
                         <div className="w-2.5 h-2.5 bg-[#312E81] rounded-full"></div>
                         <span className="font-mono text-xs font-bold text-[#312E81]">1</span>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
       </div>
    </section>
  );
}
