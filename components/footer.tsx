import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black p-10 text-white flex justify-center gap-10">
        <Link
          href="https://github.com/SantinoGiordano"
          className="hover:text-gray-400 transition"
        >
          Github
        </Link>
        <Link href="/collection" className="hover:text-gray-400 transition">
          Art Collections
        </Link>
        <Link href="./Resume.pdf" className="hover:text-gray-400 transition">
          Resume
        </Link>
      </div>
    </>
  );
};

export default Footer;
