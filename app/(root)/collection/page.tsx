"use client";
import { useState } from "react";
import Image from "next/image";
import { Art } from "@/app/types";



const myData: Art[] = [
  { id: 1, name: "Bibliophobia ", url: "/bookFear.png" },
  { id: 2, name: "Chronomentrophobia", url: "/clockFearSmaller.PNG" },
  { id: 3, name: "Automatonophobia", url: "/puppetFear.png" },
  { id: 4, name: "Technology", url: "/teckFear.png" },
  { id: 5, name: "Dysmorphia", url: "/hands fear.png" },
  { id: 6, name: "Masklophobia", url: "/maskFear.png" },
  { id: 7, name: "Trypanophobia", url: "/needleFear.png" },
  { id: 8, name: "Scopophobia ", url: "/watchingFearSmaller.PNG" },
  { id: 9, name: "thanatophobia", url: "/death fear.png" },
  { id: 10, name: "Vanguard Pests", url: "/giordnaos vanguard 3-26-24.png" },
  { id: 11, name: "Paragon Packaging", url: "/paragon Packageing (1).png" },
  {
    id: 12,
    name: "Needle Antiques",
    url: "/giordanos needle hey 3-21-24 (3).png",
  },
  {
    id: 13,
    name: "Alchemy Pharmacy",
    url: "/giordanos pharmacy 3-26-24 revamped.png",
  },
  {
    id: 14,
    name: "Timberjacks Lumber",
    url: "/giordanos timberjacks 3-21-24 (1).png",
  },
  {
    id: 15,
    name: "Logic Knots Puzzles",
    url: "/giordanos logic knots 3-26-24 (2).png",
  },
  { id: 16, name: "Xtra Life Batteries", url: "/extraLife.png" },
  {
    id: 17,
    name: "Compass Flights",
    url: "/giordanos compass flights 3-26-24 (1).png",
  },
  { id: 18, name: "Alternate Solutions", url: "/AS.png" },
];

export default function Collection() {
  const [selectedArt, setSelectedArt] = useState<Art | null>(null);

  return (
    <div className="bg-black text-white min-h-screen pt-30 py-12 px-6 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {myData.map((item: Art) => (
          <div
            key={item.id}
            className="bg-gray-900 rounded-2xl p-4 hover:scale-105 transition-transform shadow-lg cursor-pointer"
            onClick={() => setSelectedArt(item)}
          >
            <Image
              src={item.url}
              alt={item.name}
              width={300}
              height={300}
              className="rounded-xl w-full h-auto object-cover"
            />
            <p className="text-center mt-4 text-lg font-semibold">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {selectedArt && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedArt.url}
              alt={selectedArt.name}
              width={900}
              height={900}
              className="rounded-xl w-full h-auto object-contain"
            />
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2 hover:bg-red-600 hover:text-white transition"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* <div className="relative w-[75%] h-[1500px] items-center justify-center">
  <Image
    src="/nytBlackAndWhite.png"
    alt=""
    fill
    className="object-cover"
    priority
  />
</div> */
}
