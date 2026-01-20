import { Code, Zap, Heart, Award } from "lucide-react";

export default function AboutSection({ isVisible }) {
  const highlights = [
    { icon: Code, label: "Full-Stack Developer", color: "from-blue-400 to-cyan-400" },
    { icon: Zap, label: "React & Spring Boot", color: "from-purple-400 to-pink-400" },
    { icon: Heart, label: "Clean Code Enthusiast", color: "from-red-400 to-orange-400" },
    { icon: Award, label: "Problem Solver", color: "from-green-400 to-emerald-400" }
  ];

  return (
    <section
      id="about"
      className={`relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden transition-all duration-1000 ${
        isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-100 to-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Me</span>
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg md:text-xl text-center mb-12">
          I'm a passionate software developer with expertise in modern web and
          mobile application development. I enjoy building elegant, performant,
          and user-friendly digital experiences using cutting-edge technologies.
          My goal is to create solutions that make a real impact.
        </p>

        {/* Highlight Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
  {highlights.map(({ icon: Icon, label, color }, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Icon */}
      <div
        className={`p-4 rounded-full bg-gradient-to-br ${color} mb-4 transition-transform duration-300 hover:scale-110`}
      >
        <Icon className="text-white text-2xl" />
      </div>

      {/* Label */}
      <p className="text-gray-700 font-medium text-sm text-center">
        {label}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
