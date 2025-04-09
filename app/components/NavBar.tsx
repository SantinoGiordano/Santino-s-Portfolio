import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center">
        <ul className="flex gap-6 text-white text-lg">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
