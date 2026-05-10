import React from 'react';
import { motion } from 'framer-motion';

export default function GridBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="fixed inset-0 pointer-events-none z-0 mix-blend-overlay"
    >
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <pattern id="grid-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <line x1="0" y1="100" x2="100" y2="100" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1"></line>
            <line x1="100" y1="0" x2="100" y2="100" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1"></line>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
      </svg>
      {/* Decorative gradient glowing spheres */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#FACC15] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] bg-[#EC4899] rounded-full opacity-20 blur-3xl"></div>
    </motion.div>
  );
}
