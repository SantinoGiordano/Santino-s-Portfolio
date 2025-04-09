import NavBar from "./components/NavBar";

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
        <div className="flex items-center justify-center min-h-screen bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Welcome</h1>
        </div>
      </div>
    </>
  );
}
