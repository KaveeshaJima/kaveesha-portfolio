export default function Skills({ isVisible }) {
  const skills = ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "MySQL", "Android", "Java", "C++"];

  return (
    <section
      id="skills"
      className={`py-20 bg-white text-center transition-all duration-1000 ${
        isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium shadow hover:shadow-md transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
