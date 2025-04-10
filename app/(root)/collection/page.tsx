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
  { id: 10, name: "Item 10", url: "/giordanos logic knots 3-26-24 (2).png" },
  { id: 11, name: "Item 11", url: "/paragon Packageing (1).png" },
  { id: 12, name: "Item 12", url: "/giordanos needle hey 3-21-24 (3).png" },
  { id: 13, name: "Item 13", url: "/giordanos pharmacy 3-26-24 revamped.png" },
  { id: 14, name: "Item 14", url: "/giordanos timberjacks 3-21-24 (1).png" },
  { id: 15, name: "Item 15", url: "/giordnaos vanguard 3-26-24.png" },
  { id: 16, name: "Item 16", url: "/extraLife.png" },
  { id: 17, name: "Item 17", url: "/giordanos compass flights 3-26-24 (1).png" },
  { id: 18, name: "Item 18", url: "/AS.png" },
];

export default function Collection() {
  return (
    <div className="bg-black text-white min-h-screen py-12 pt-30 px-6">
      <h1 className="text-3xl font-bold mb-10 text-center">Art Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {myData.map((item: Art) => (
          <div
            key={item.id}
            className="bg-gray-900 rounded-2xl p-4 hover:scale-105 transition-transform shadow-lg"
          >
            <Image
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
    </div>
  );
}
