import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function Ruler() {
  const ticks = Array.from({ length: 50 }, (_, i) => i * 100);
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
      
    mouseX.set(window.innerWidth / 2);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX]);

  const maxW = typeof window !== 'undefined' ? window.innerWidth : 1920;
  
  // Direct follow: moving mouse left moves ruler left, right moves right
  const mapX = useTransform(mouseX, [0, maxW], [-100, 100]);
  const smoothX = useSpring(mapX, { stiffness: 50, damping: 20 });

  return (
    <div className="fixed top-20 left-0 w-full hidden lg:flex items-start opacity-70 pointer-events-none z-30 overflow-hidden bg-transparent border-b border-white/20 h-10">
      <motion.div 
        className="flex items-start translate-x-[40px]"
        style={{ x: smoothX }}
      >
        {ticks.map((tick, i) => (
          <React.Fragment key={tick}>
            <div className="relative w-px h-3 bg-white/40 mr-[49px] shrink-0">
              <div className="absolute top-[18px] left-1/2 -translate-x-1/2 text-[10px] text-white/60 font-mono whitespace-nowrap">
                {tick}
              </div>
            </div>
            {/* Mid tick */}
            <div className="relative w-px h-2 bg-white/30 mr-[49px] shrink-0"></div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
