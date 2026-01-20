export default function About({ isVisible }) {
  return (
    <section
      id="about"
      className={`relative py-20 bg-white overflow-hidden text-center transition-all duration-1000 ${
        isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Subtle background glow */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          About Me
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-lg">
          I'm a passionate software developer with expertise in modern web and
          mobile application development. I enjoy building elegant, performant,
          and user-friendly digital experiences using the latest technologies.
        </p>

        {/* Optional highlight badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            Full-Stack Developer
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            React & Spring Boot
          </span>
          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            Clean Code Enthusiast
          </span>
        </div>
      </div>
    </section>
  );
}
