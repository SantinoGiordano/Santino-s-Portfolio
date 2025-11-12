'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Trigger animation after hydration
    const timeout = setTimeout(() => setReady(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  if (!ready) return null; // avoid SSR mismatch

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="text-center">
        <h1 className="text-white text-7xl font-bold mb-4">Santino Giordano</h1>
        <span className="text-rotate text-5xl text-white">
          <span>DEVELOPER</span>
          <span>DESIGNER</span>
          <span>CREATOR</span>
          <span>INNOVATOR</span>
          <span>LEARNER</span>
        </span>
      </div>
    </div>
  );
}
