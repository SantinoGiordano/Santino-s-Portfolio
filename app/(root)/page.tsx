"use client";

import { useEffect, useState } from "react";

const words = [
  "DEVELOPER",
  "DESIGNER",
  "LEARNER",
  "PROBLEM SOLVER",
  "CREATOR"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="text-center">
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