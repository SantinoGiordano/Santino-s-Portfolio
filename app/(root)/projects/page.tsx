"use client";
import { useState } from "react";
import Data from "@/data/page";

export default function DisclaimerBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <div className=" p-10 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex flex-col items-center justify-start pt-20 px-4">
      {/* Disclaimer Banner */}
      {visible && (
        <div className="mt-10 w-full max-w-4xl mb-8 bg-yellow-100 text-yellow-800 text-sm p-4 flex justify-between items-center rounded-lg shadow-md">
          <span>
            Disclaimer: Some sites use free backend hosting on render and take 50 seconds for an inital request.
          </span>
          <button
            onClick={() => setVisible(false)}
            className="ml-4 text-yellow-700 hover:underline font-medium"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="w-full max-w-5xl p-6 sm:p-10 bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl border border-gray-200">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center">
          Projects
        </h2>
        <div className="h-1 w-20 bg-black mx-auto mb-10 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Data.map((item) => (
            <div
              key={item.id}
              className="group bg-gradient-to-tr from-gray-100 to-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {item.name}
              </h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 font-medium hover:underline group-hover:text-blue-700 transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
