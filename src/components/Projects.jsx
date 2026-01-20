import fitzoneImg from "../assets/projects/fitzone.png";
import luxevistaImg from "../assets/projects/luxevista.png";
import gadgethubImg from "../assets/projects/gadgethub.png";
import localfixImg from "../assets/projects/localfix.png";

export default function Projects({ isVisible }) {
  const projects = [
    {
      title: "FitZone Fitness App",
      description:
        "Web app for fitness center management with dashboards and role-based access.",
      image: fitzoneImg,
      tech: ["PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/yourusername/fitzone",
      demo: "",
    },
    {
      title: "LuxeVista Resort App",
      description:
        "Native Android app for room bookings, services, and reservations.",
      image: luxevistaImg,
      tech: ["Android", "Java", "SQLite"],
      github: "https://github.com/yourusername/luxevista",
      demo: "",
    },
    {
      title: "Gadget Hub",
      description:
        "SOA-based system for gadget price comparison and distributor integration.",
      image: gadgethubImg,
      tech: ["React", "ASP.NET Core", "Microservices"],
      github: "https://github.com/KaveeshaJIma/gadget-hub",
      demo: "",
    },
    {
      title: "LocalFix – Service Booking Platform",
      description:
        "Full-stack platform connecting users with trusted local service providers.",
      image: localfixImg,
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/yourusername/localfix",
      demo: "",
    },
  ];

  return (
    <section
      id="projects"
      className={`relative py-20 bg-gray-50 overflow-hidden transition-all duration-1000 ${
        isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                  >
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

