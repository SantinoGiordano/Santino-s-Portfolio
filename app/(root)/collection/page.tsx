import Image from "next/image";

 interface Art{
    id:number;
    name:string;
    url:string;
 }
 
const myData = [
    { id: 1, name: "Item 1", url: "/AS.png" },
    { id: 2, name: "Item 2", url: "/bookFear.png" },
    { id: 3, name: "Item 3", url: "/clockFearSmaller.PNG" },
    { id: 4, name: "Item 1", url: "/death fear.png" },
    { id: 5, name: "Item 2", url: "/extraLife.png" },
    { id: 6, name: "Item 3", url: "/giordanos compass flights 3-26-24 (1).png" },
    { id: 7, name: "Item 1", url: "/giordanos logic knots 3-26-24 (2).png" },
    { id: 8, name: "Item 2", url: "/giordanos needle hey 3-21-24 (3).png" },
    { id: 9, name: "Item 3", url: "/giordanos pharmacy 3-26-24 revamped.png" },
    { id: 10, name: "Item 1", url: "/giordanos timberjacks 3-21-24 (1).png" },
    { id: 11, name: "Item 2", url: "/giordnaos vanguard 3-26-24.png" },
    { id: 12, name: "Item 3", url: "/hands fear.png" },
    { id: 13, name: "Item 1", url: "/maskFear.png" },
    { id: 14, name: "Item 2", url: "/needleFear.png" },
    { id: 15, name: "Item 3", url: "/paragon Packageing (1).png" },
    { id: 16, name: "Item 3", url: "/puppetFear.png" },
    { id: 17, name: "Item 3", url: "/teckFear.png" },
    { id: 18, name: "Item 3", url: "/watchingFearSmaller.PNG" },
  ];


  export default function Collection() {
    return (
      <div className="bg-black text-white pt-30">
        {myData.map((item: Art) => (
          <div key={item.id} className="mb-6">
            <Image 
            src={item.url} 
            alt={item.name}
            width={250} 
            height={250}
            className="w-64 h-auto mt-2" />
          </div>
        ))}
      </div>
    );
  }