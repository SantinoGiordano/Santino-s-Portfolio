import { FaEnvelope, FaUser } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl bg-gray-950 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-gray-900 to-black text-white">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>

          <p className="text-gray-400 mb-8">
            Have questions? Reach out to me via email!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-full">
                <FaUser className="text-xl" />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Santino Giordano
                </p>
                <p className="font-medium">
                  Software Developer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-full">
                <FaEnvelope className="text-xl" />
              </div>

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium break-all">
                  Santinogiordano13@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}