export default function SkillsShowcase({ isVisible }) {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Spring Boot", "ASP.NET Core"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "SQLite", "PostgreSQL"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mobile & Other",
      skills: ["Android", "Java", "C++", "Git"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section
      id="skills"
      className={`relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden transition-all duration-1000 ${
        isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Skills</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Technologies I work with to bring ideas to life
        </p>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map(({ title, skills, color }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${color} rounded-full mb-6`}></div>
              <h3 className="text-xl font-bold text-gray-800 mb-5">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-700 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
