import ContactForm from "@/components/MailForm";
import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";

type MailPayload = {
  email: string;
  message: string;
  subject?: string;
  name?: string;
  phone?: string;
};

const sendMail = async ({
  email,
  message,
  subject,
  name,
  phone,
}: MailPayload) => {
  "use server";

  console.log({
    name,
    email,
    phone,
    subject,
    message,
  });

  // Placeholder response
  return {
    success: true,
    error: null,
  };
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-gray-950 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Left Side */}
        <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-gray-900 to-black text-white">
          <h1 className="text-4xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-400 mb-8">
            Have questions or need assistance? Fill out the form and we’ll
            get back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-full">
                <FaUser className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Name</p>
                <p className="font-medium">Your Company</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-full">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-full">
                <FaPhoneAlt className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-10 bg-black">
          <ContactForm sendMail={sendMail} />
        </div>
      </div>
    </div>
  );
}