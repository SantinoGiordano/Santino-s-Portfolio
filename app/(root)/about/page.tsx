export default function About() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-3xl p-4 sm:p-8 bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
          About Me
        </h1>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed tracking-wide max-w-prose">
          I am a motivated Web Developer with a double major in Computer Science
          and Graphic Design, uniquely blending technical expertise with
          creative vision. Proficient in a wide range of programming languages,
          frameworks, and Adobe Creative Suite tools, I thrive at the
          intersection of design and development. With a passion for clean
          design, intuitive user experiences, and functional, efficient code, I
          enjoy building and deploying responsive, high-performance websites and
          web applications. I bring a high level of organization, attention to
          detail, and problem-solving ability to every project, always striving
          to deliver polished, user-focused solutions. Whether collaborating on
          a team or leading a project, I’m driven by curiosity, continuous
          learning, and a commitment to excellence.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Projects
        </h2>
        <ul className="space-y-2">
          <li>
            <a
              href="https://www.atp-exphys.com/"
              className="text-blue-600 hover:underline break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              ATP Exphys Website
            </a>
          </li>
          <li>
            <a
              href="https://furniture-store-frontend-one.vercel.app/"
              className="text-blue-600 hover:underline break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              Furniture Store Website
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
