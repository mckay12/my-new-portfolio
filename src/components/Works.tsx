import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    color: "bg-brand-blue",
    textColor: "text-brand-ink",
    borderColor: "border-brand-ink",
    date: "Mar 19, 2026",
    title: "Meridian Health",
    tags: ["Healthcare", "Workflow Design"],
    image: "https://framerusercontent.com/images/veyOMFLFvf4bfZJKXrpyPNzQWiw.jpg",
    link: "#meridian-health"
  },
  {
    id: "02",
    color: "bg-[#fea125]",
    textColor: "text-white",
    borderColor: "border-brand-ink",
    date: "Jan 2, 2025",
    title: "Homestead",
    tags: ["Proptech", "0 -> 1", "Transformation"],
    image: "https://framerusercontent.com/images/Hp4sdb6mgJqCAExV0ytS7gljgkA.jpg",
    link: "#homestead"
  },
  {
    id: "03",
    color: "bg-brand-yellow",
    textColor: "text-white",
    borderColor: "border-brand-ink",
    date: "Mar 19, 2026",
    title: "North Light",
    tags: ["SaaS", "Transformation", "Enterprise"],
    image: "https://framerusercontent.com/images/lRamgmULf2QHd5nO7cNT2LpLR5M.jpg",
    link: "#north-light"
  },
  {
    id: "04",
    color: "bg-brand-pink",
    textColor: "text-white",
    borderColor: "border-brand-ink",
    date: "Mar 19, 2026",
    title: "Project 04",
    tags: ["Strategy", "Enterprise"],
    image: "https://framerusercontent.com/images/77vnsoqQ0X6oMVSzYgh7nMkdh0.jpg",
    link: "#project-4"
  }
];

export default function Works() {
  return (
    <section className="relative w-full py-20 lg:py-32 flex flex-col items-center border-t border-white/10" id="case-study">
       <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-24 flex flex-col gap-12 relative">
          
          <div className="flex justify-center w-full mb-8">
             <div className="flex flex-col items-center">
                <h2 className="font-handwriting text-4xl mb-4 self-center tracking-tighter w-full text-center text-indigo-100">explore my work!</h2>
                <h1 className="text-[60px] md:text-[120px] font-black leading-[0.8] tracking-tighter uppercase font-sans text-center text-white">
                   FEATURED<br/>WORKS
                </h1>
                
                <div className="mt-12 max-w-xs -rotate-3 bg-[#FACC15] p-4 text-[#312E81] font-medium font-sans rounded-2xl shadow-xl">
                   This is a showcase of what happens when curiosity drives the process.
                </div>
             </div>
          </div>

          <div className="w-full relative">
             {projects.map((p, idx) => (
                <div key={p.id} className="sticky top-0 w-full min-h-screen pt-20 pb-8 flex flex-col">
                   {/* Number Header */}
                   <div className="flex mb-4">
                      {/* Empty spacer for stairs effect */}
                      <div className="hidden lg:block transition-all duration-300 ease-in-out" style={{ width: `${idx * 15}%` }}></div>
                      
                      <div className={`flex items-center gap-2 ${p.color} px-6 py-2 rounded-full border-0 shadow-lg`}>
                         <div className={`font-mono text-lg uppercase font-bold ${idx === 0 ? 'text-indigo-900' : 'text-white'}`}>
                            Project {p.id}
                         </div>
                      </div>
                   </div>

                   {/* Project Content */}
                   <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`group w-full flex-1 ${p.color} rounded-[40px] border-4 border-white/20 p-6 lg:p-12 flex flex-col lg:flex-row shadow-2xl relative overflow-hidden backdrop-blur-md`}
                   >
                      
                      {/* Left: Text */}
                      <div className={`flex-1 flex flex-col justify-between ${idx === 0 ? 'text-indigo-900' : 'text-white'} mb-8 lg:mb-0 lg:pr-12 relative z-10`}>
                         <div>
                            <div className="flex items-center gap-3 mb-4">
                               <div className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-indigo-900' : 'bg-white'}`}></div>
                               <span className="font-mono text-sm tracking-wider uppercase font-bold">{p.date}</span>
                            </div>
                            
                            <h2 className="text-[48px] lg:text-[68px] font-black uppercase tracking-tighter leading-[1.1] mb-6">
                               {p.title}
                            </h2>

                            <a href={p.link} className={`inline-flex items-center gap-2 px-6 py-4 rounded-2xl border-2 font-mono uppercase tracking-wider text-xs font-bold transition-all mb-12 ${idx === 0 ? 'border-indigo-900/30 text-indigo-900 hover:bg-white/20' : 'border-white/30 text-white hover:bg-white/10'}`}>
                              <ArrowDownRight className="w-5 h-5 -rotate-45" />
                              View Project
                            </a>
                         </div>

                         {/* Tags row */}
                         <div className="flex flex-wrap gap-4 mt-auto">
                            {p.tags.map((tag, tIdx) => (
                               <div key={tIdx} className="flex gap-1 items-center">
                                  <div className={`px-4 py-2 rounded-full shadow-md ${idx === 0 ? 'bg-white/50 text-indigo-900' : 'bg-white/20 text-white backdrop-blur-md'} font-mono text-xs uppercase font-bold`}>
                                     {tag}
                                  </div>
                               </div>
                            ))}
                         </div>
                      </div>

                      {/* Right: Image */}
                      <motion.div className="flex-1 flex flex-col justify-end relative z-10">
                         <div className={`w-full h-full min-h-[400px] rounded-[28px] border-4 border-white/20 p-2 ${idx === 0 ? 'bg-white/20' : 'bg-black/10 backdrop-blur-sm'} relative overflow-hidden`}>
                            <img src={p.image} className="w-full h-full object-cover relative rounded-[20px] transition-transform duration-700 ease-out group-hover:scale-110" alt={p.title} />
                            
                            <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md p-2 px-4 rounded-full border border-white/20 shadow-xl flex-row w-auto">
                               <div className="w-4 h-4 rounded border border-white/40 flex items-center justify-center">
                                  <div className="w-1.5 h-px bg-white"></div>
                               </div>
                               <span className="font-mono text-xs uppercase text-white font-bold tracking-wider relative bottom-0 right-0 p-0 block w-auto">Image.jpg</span>
                            </div>
                         </div>
                      </motion.div>

                   </motion.div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
