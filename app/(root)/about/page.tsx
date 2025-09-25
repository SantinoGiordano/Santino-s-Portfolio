

export default function About() {
  return (
    <div className="p-10 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-3xl p-6 sm:p-10 bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl border border-gray-200">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center">
          About Me
        </h1>
        <div className="h-1 w-20 bg-black mx-auto mb-8 rounded-full"></div>

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
      </div>
    </div>
  );
}
