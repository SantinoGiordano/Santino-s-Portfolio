import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-25 fixed top-0 left-0 z-50 backdrop-blur-md bg-white/10">
      <div className="max-w-7xl h-full mx-auto px-4 flex justify-center items-center">
        <ul className="flex gap-8 text-white text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
