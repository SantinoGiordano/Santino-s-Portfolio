import Data from "@/data/page";

export default function About() {
  return (
    <div className="p-10 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-3xl p-6 sm:p-10 bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl border border-gray-200">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center">
          About Me
        </h1>
        <div className="h-1 w-20 bg-black mx-auto mb-8 rounded-full"></div>

        {/* Bio */}
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed tracking-wide text-center">
          I am a motivated Web Developer with a double major in Computer Science
          and Graphic Design, uniquely blending technical expertise with
          creative vision. Proficient in a wide range of programming languages,
          frameworks, and Adobe Creative Suite tools, I thrive at the
          intersection of design and development. With a passion for clean
          design, intuitive user experiences, and functional, efficient code, I
          enjoy building and deploying responsive, high-performance websites and
          web applications.
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed tracking-wide text-center mt-4">
          I bring a high level of organization, attention to detail, and
          problem-solving ability to every project, always striving to deliver
          polished, user-focused solutions. Whether collaborating on a team or
          leading a project, I’m driven by curiosity, continuous learning, and a
          commitment to excellence.
        </p>

        {/* Projects Section */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-6 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Data.map((item) => (
            <div
              key={item.id}
              className="group bg-gradient-to-tr from-gray-100 to-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-gray-200 p-5"
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

