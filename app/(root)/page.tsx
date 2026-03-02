'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  if (!ready) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="text-center">
        <h1 className="text-white text-7xl font-bold mb-4">Santino Giordano</h1>
        <span className="text-rotate text-7xl">
          <span className="justify-items-center text-white ">
            <span> </span>
            <span>DEVELOP</span>
            <span>LEARN</span>
            <span>DESIGN</span>
            <span>DEPLOY</span>
            <span>MAINTAIN</span>
          </span>
        </span>
      </div>
    </div>
  );
}
