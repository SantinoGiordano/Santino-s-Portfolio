import Link from "next/link";
import React from "react";
import ContactButton from "./contact";

const NavBar = () => {
  return (
    <nav className="w-full h-25 fixed top-0 left-0 z-50 backdrop-blur-md bg-white/10">
      <div className="max-w-7xl h-full mx-auto px-4 flex justify-center items-center">
        <ul className="flex gap-8 text-white text-lg">
          <li>
            <Link className="hover:text-gray-400 transition" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-400 transition" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/SantinoGiordano"
              className="hover:text-gray-400 transition"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="./Resume.pdf"
              className="hover:text-gray-400 transition"
            >
              Resume
            </Link>
            <Link
              href="/collection"
              className="hover:text-gray-400 transition"
            >
              Resume
            </Link>
          </li>
          <li>
            <ContactButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
