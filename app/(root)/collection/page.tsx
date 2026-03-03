"use client";
import { useState } from "react";
import Image from "next/image";
import { Art } from "@/app/types";

const phobias_art: Art[] = [
  { id: 1, name: "Bibliophobia", url: "/bookFear.png" },
  { id: 2, name: "Chronomentrophobia", url: "/clockFearSmaller.PNG" },
  { id: 3, name: "Automatonophobia", url: "/puppetFear.png" },
  { id: 4, name: "Technophobia", url: "/teckFear.png" },
  { id: 5, name: "Dysmorphia", url: "/hands fear.png" },
  { id: 6, name: "Masklophobia", url: "/maskFear.png" },
  { id: 7, name: "Trypanophobia", url: "/needleFear.png" },
  { id: 8, name: "Scopophobia", url: "/watchingFearSmaller.PNG" },
  { id: 9, name: "Thanatophobia", url: "/death fear.png" },
];

const companies_art: Art[] = [
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

  const renderGrid = (data: Art[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-gray-900 rounded-2xl p-4 hover:scale-105 transition-transform shadow-lg cursor-pointer"
          onClick={() => setSelectedArt(item)}
        >
          <Image
            draggable={false}
            src={item.url}
            alt={item.name}
            width={300}
            height={300}
            className="rounded-xl w-full h-auto object-cover"
          />
          <p className="text-center mt-4 text-lg font-semibold">{item.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen pt-30 py-12 px-6">
      {/* ================= NEW YORK TIMES SECTION ================= */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4 text-center">
          New York Times Piece
        </h2>
        <hr className="max-w-3xl mx-auto border-t border-white/30 mb-8" />
        <div className="max-w-3xl mx-auto mb-10 bg-gray-900 p-6 rounded-xl shadow-lg">
          <p className="text-gray-300 text-center">
            This project is a meticulous recreation of a New York Times
            newspaper page, designed entirely in Adobe InDesign. Every margin,
            font, letterform, column width, and line spacing was carefully
            replicated to match the original publication with complete accuracy.
            The layout was reconstructed through precise measurement using a
            physical ruler, combined with detailed research of typographic
            standards and formatting from the official New York Times website.
            The goal of this piece was to demonstrate technical precision,
            typographic discipline, and a deep understanding of editorial layout
            systems. Every element was intentionally placed to mirror the
            authentic newspaper structure, resulting in a recreation that is
            visually indistinguishable from the original print.
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="/nytBlackAndWhite.png"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 py-4 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition"
          >
            View Piece
          </a>
        </div>
      </section>

      {/* ================= COMPANY DESIGN SECTION ================= */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Company Design</h2>
        <hr className="max-w-3xl mx-auto border-t border-white/30 mb-8" />
        <div className="max-w-3xl mx-auto mb-10 bg-gray-900 p-6 rounded-xl shadow-lg">
          <p className="text-gray-300 text-center">
            This branding collection was developed entirely in Adobe Illustrator
            as a conceptual exploration of identity design for fictional
            companies. Each piece represents a fully imagined brand, complete
            with logo systems, typography choices, and curated color palettes.
            While some of the concepts incorporate subtle humor, the primary
            goal of this project was to present each brand as if it were being
            pitched to a real client. Every design decision was intentional and
            strategic — from the development of cohesive color palettes that
            would translate seamlessly across digital platforms, to the careful
            selection of typefaces that maintain clarity, hierarchy, and brand
            consistency.
          </p>
        </div>

        {renderGrid(companies_art)}
      </section>

      {/* ================= FEARS DESIGN SECTION ================= */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Fears Design</h2>
        <hr className="max-w-3xl mx-auto border-t border-white/30 mb-8" />
        <div className="max-w-3xl mx-auto mb-10 bg-gray-900 p-6 rounded-xl shadow-lg">
          <p className="text-gray-300 text-center">
            The Phobia Design project was created entirely in Adobe Photoshop as
            both a creative exploration and a technical growth experience.
            Centered around the theme of fear, each piece contributes to a
            cohesive visual narrative that is further expanded upon in my artist
            statement. The works collectively tell a unified story through
            symbolism, atmosphere, and emotional tension. This project played a
            significant role in strengthening my technical abilities in
            Photoshop. It deepened my understanding of lighting, shadow,
            perspective, and compositional balance. More importantly, it
            challenged me to use those technical tools intentionally — not just
            to create visually compelling images, but to evoke emotion and
            psychological response.
          </p>
        </div>

        {renderGrid(phobias_art)}
      </section>

      {selectedArt && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              draggable={false}
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
