import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface BeamsBackgroundProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
  children?: React.ReactNode;
}

export function BeamsBackground({
  className,
  intensity = "subtle",
  children,
}: BeamsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.005;
      
      // Update canvas size
      canvas.width = windowSize.width;
      canvas.height = windowSize.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      ctx.filter = "blur(25px)";

      // Determine beam parameters based on intensity
      const beamCount = intensity === "subtle" ? 3 : intensity === "medium" ? 5 : 8;

      for (let i = 0; i < beamCount; i++) {
        const iOffset = i * 100;
        const x = Math.sin(time + iOffset) * canvas.width * 0.4 + canvas.width * 0.5;
        const y = Math.cos(time * 0.8 + iOffset) * canvas.height * 0.4 + canvas.height * 0.5;
        
        // Define beam dimensions
        const radiusA = canvas.width * 0.4;
        const radiusB = canvas.width * 0.1;
        
        const gradient = ctx.createRadialGradient(x, y, radiusB, x, y, radiusA);
        
        const hue = 28; // consistent orange
        const opacityBase = intensity === "subtle" ? 0.18 : intensity === "medium" ? 0.25 : 0.4;
        const opacity = opacityBase + Math.sin(time * 2 + i) * 0.22;

        gradient.addColorStop(0, `hsla(${hue}, 100%, 70%, 0)`);
        gradient.addColorStop(0.2, `hsla(${hue}, 100%, 65%, ${Math.max(0, opacity * 0.6)})`);
        gradient.addColorStop(0.5, `hsla(${hue}, 100%, 60%, ${Math.max(0, opacity)})`);
        gradient.addColorStop(0.8, `hsla(${hue}, 100%, 65%, ${Math.max(0, opacity * 0.6)})`);
        gradient.addColorStop(1, `hsla(${hue}, 100%, 70%, 0)`);

        ctx.fillStyle = gradient;
        
        ctx.beginPath();
        // Draw ellipse to simulate a beam
        ctx.ellipse(x, y, radiusA, radiusA * 0.4, time * 0.5 + i, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [windowSize, intensity]);

  return (
    <div className={cn("relative min-h-screen w-full bg-white overflow-hidden", className)}>
      <div className="absolute inset-0 z-0 pointer-events-none bg-orange-50/20" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply"
        style={{ filter: "blur(12px)" }}
      />
      <div className="relative z-10 min-h-screen w-full pt-32 pb-20 text-center flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
