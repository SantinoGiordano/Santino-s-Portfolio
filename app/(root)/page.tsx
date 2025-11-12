
"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevents SSR mismatch

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="text-center">
        <h1 className="text-white text-7xl font-bold mb-4">Santino Giordano</h1>
        <div className="text-5xl text-white">
          <span className="text-rotate">
            <span>DEVELOPER</span>
            <span>DESIGNER</span>
            <span>CREATOR</span>
            <span>LEARNER</span>
          </span>
        </div>
      </div>
    </div>
  );
}
