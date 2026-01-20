export default function Skills({ isVisible }) {
  const skills = [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Android",
    "Java",
    "C++",
  ];

  return (
    <section
      id="skills"
      className={`relative py-20 bg-gray-50 overflow-hidden text-center transition-all duration-1000 ${
        isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2.5 bg-white text-gray-700 rounded-full text-sm font-medium shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
