'use client'

import Link from "next/link";
import React, { useState } from "react";
import ContactButton from "./contact";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 fixed top-0 left-0 z-50 backdrop-blur-md bg-white/10">
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo or Brand name */}
        <div className="text-white font-semibold text-xl">Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-lg">
          <li><Link className="hover:text-gray-400 transition" href="/">Home</Link></li>
          <li><Link className="hover:text-gray-400 transition" href="/about">About</Link></li>
          <li><Link className="hover:text-gray-400 transition" href="https://github.com/SantinoGiordano">GitHub</Link></li>
          <li><Link className="hover:text-gray-400 transition" href="/Resume.pdf">Resume</Link></li>
          <li><Link className="hover:text-gray-400 transition" href="/collection">Collection</Link></li>
          <li><ContactButton /></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black bg-opacity-80 text-white flex flex-col items-center gap-6 py-6 z-40">
          <Link onClick={() => setIsOpen(false)} className="hover:text-gray-400" href="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} className="hover:text-gray-400" href="/about">About</Link>
          <Link onClick={() => setIsOpen(false)} className="hover:text-gray-400" href="https://github.com/SantinoGiordano">GitHub</Link>
          <Link onClick={() => setIsOpen(false)} className="hover:text-gray-400" href="/Resume.pdf">Resume</Link>
          <Link onClick={() => setIsOpen(false)} className="hover:text-gray-400" href="/collection">Collection</Link>
          <ContactButton />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
