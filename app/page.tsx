import Footer from "@/components/footer";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div
        className="min-h-screen bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      >
        <div
          className={`flex items-center justify-center min-h-screen bg-opacity-50 `}
        >
          <h1 className="text-white text-6xl">Santino Giordano</h1>
        </div>
        <Footer/>
      </div>
    </>
  );
}
