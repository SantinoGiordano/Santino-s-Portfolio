'use client'
import { useState } from "react";
import Image from "next/image";

interface Art {
  id: number;
  name: string;
  url: string;
}

const myData: Art[] = [
  { id: 1, name: "Item 1", url: "/bookFear.png" },
  { id: 2, name: "Item 2", url: "/clockFearSmaller.PNG" },
  { id: 3, name: "Item 3", url: "/puppetFear.png" },
  { id: 4, name: "Item 4", url: "/teckFear.png" },
  { id: 5, name: "Item 5", url: "/hands fear.png" },
  { id: 6, name: "Item 6", url: "/maskFear.png" },
  { id: 7, name: "Item 7", url: "/needleFear.png" },
  { id: 8, name: "Item 8", url: "/watchingFearSmaller.PNG" },
  { id: 9, name: "Item 9", url: "/death fear.png" },
  { id: 10, name: "Item 15", url: "/giordnaos vanguard 3-26-24.png" },
  { id: 11, name: "Item 11", url: "/paragon Packageing (1).png" },
  { id: 12, name: "Item 12", url: "/giordanos needle hey 3-21-24 (3).png" },
  { id: 13, name: "Item 13", url: "/giordanos pharmacy 3-26-24 revamped.png" },
  { id: 14, name: "Item 14", url: "/giordanos timberjacks 3-21-24 (1).png" },
  { id: 15, name: "Item 10", url: "/giordanos logic knots 3-26-24 (2).png" },
  { id: 16, name: "Item 16", url: "/extraLife.png" },
  {
    id: 17,
    name: "Item 17",
    url: "/giordanos compass flights 3-26-24 (1).png",
  },
  { id: 18, name: "Item 18", url: "/AS.png" },
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
