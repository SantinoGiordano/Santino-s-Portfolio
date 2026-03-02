"use client";

import { useEffect, useState } from "react";

const words = [
  "DEVELOPER",
  "DESIGNER",
  "LEARNER",
  "PROBLEM SOLVER",
  "CREATOR"
];

const COLORS = [
  "bg-purple-700",
  "bg-blue-900", 
  "bg-red-800",
];

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  fadingIn: boolean;
  driftX: number;
  driftY: number;
  waitCount: number; // Add wait counter to ensure full disappearance
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const [orbs, setOrbs] = useState<Orb[]>([]);

  // Initialize orbs
  useEffect(() => {
    const initialOrbs: Orb[] = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 200 + 150, // 150-350px
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: Math.random() * 0.6,
      fadingIn: Math.random() > 0.5,
      driftX: (Math.random() - 0.5) * 0.05,
      driftY: (Math.random() - 0.5) * 0.05,
      waitCount: 0,
    }));

    setOrbs(initialOrbs);
  }, []);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs(prevOrbs => 
        prevOrbs.map(orb => {
          // Update opacity (fade in/out)
          let newOpacity = orb.opacity;
          let newFadingIn = orb.fadingIn;
          let newWaitCount = orb.waitCount;
          let newX = orb.x;
          let newY = orb.y;
          let newDriftX = orb.driftX;
          let newDriftY = orb.driftY;

          if (orb.fadingIn) {
            // Fade in faster (shorter lifespan)
            newOpacity = Math.min(orb.opacity + 0.02, 0.6);
            if (newOpacity >= 0.6) {
              newFadingIn = false; // Start fading out after reaching max
            }
            
            // Update position (drift) only when visible
            newX = orb.x + orb.driftX;
            newY = orb.y + orb.driftY;

            // Wrap around screen edges
            if (newX > 100) newX = 0;
            if (newX < 0) newX = 100;
            if (newY > 100) newY = 0;
            if (newY < 0) newY = 100;

            // Randomly change drift direction occasionally
            if (Math.random() < 0.01) {
              newDriftX = (Math.random() - 0.5) * 0.05;
              newDriftY = (Math.random() - 0.5) * 0.05;
            }
          } else {
            // Fade out faster
            newOpacity = Math.max(orb.opacity - 0.02, 0);
            
            if (newOpacity <= 0) {
              newWaitCount++;
              
              // Wait a few cycles at 0 opacity to ensure full disappearance
              if (newWaitCount > 3) { // Wait 3 animation cycles before relocating
                // Reset orb - fully disappeared, now relocate
                newFadingIn = true;
                newOpacity = 0.01; // Start fading in
                newX = Math.random() * 100;
                newY = Math.random() * 100;
                newWaitCount = 0;
                
                // Change color occasionally
                if (Math.random() < 0.3) {
                  orb.color = COLORS[Math.floor(Math.random() * COLORS.length)];
                }
                
                // New drift direction
                newDriftX = (Math.random() - 0.5) * 0.05;
                newDriftY = (Math.random() - 0.5) * 0.05;
              }
            } else {
              // Still fading out, continue drifting
              newX = orb.x + orb.driftX;
              newY = orb.y + orb.driftY;

              // Wrap around screen edges
              if (newX > 100) newX = 0;
              if (newX < 0) newX = 100;
              if (newY > 100) newY = 0;
              if (newY < 0) newY = 100;
            }
          }

          return {
            ...orb,
            x: newX,
            y: newY,
            opacity: newOpacity,
            fadingIn: newFadingIn,
            driftX: newDriftX,
            driftY: newDriftY,
            waitCount: newWaitCount,
          };
        })
      );
    }, 100); // Update every 100ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4">
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className={`absolute ${orb.color} rounded-full blur-3xl`}
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              transform: 'translate(-50%, -50%)',
              opacity: orb.opacity,
              transition: 'opacity 0.3s ease-in-out', // Faster transition
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-7xl font-bold mb-4">
          Santino Giordano
        </h1>

        <div className="relative h-[90px] flex items-center justify-center">
          <span
            key={words[index]}
            className="text-4xl text-white transition-opacity duration-500 animate-fade"
          >
            {words[index]}
          </span>
        </div>
      </div>
    </div>
  );
}