import { ExternalLink, Github } from "lucide-react";
import fitzoneImg from "../assets/projects/fitzone.png";
import luxevistaImg from "../assets/projects/luxevista.png";
import gadgethubImg from "../assets/projects/gadgethub.png";
import localfixImg from "../assets/projects/localfix.png";

export default function ProjectGallery({ isVisible }) {
  const projects = [
    {
      title: "FitZone Fitness App",
      description: "Web app for fitness center management with dashboards and role-based access.",
      image: fitzoneImg,
      tech: ["PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/yourusername/fitzone",
      demo: "",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "LuxeVista Resort App",
      description: "Native Android app for room bookings, services, and reservations.",
      image: luxevistaImg,
      tech: ["Android", "Java", "SQLite"],
      github: "https://github.com/yourusername/luxevista",
      demo: "",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Gadget Hub",
      description: "SOA-based system for gadget price comparison and distributor integration.",
      image: gadgethubImg,
      tech: ["React", "ASP.NET Core", "Microservices"],
      github: "https://github.com/KaveeshaJIma/gadget-hub",
      demo: "",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "LocalFix",
      description: "Full-stack platform connecting users with trusted local service providers.",
      image: localfixImg,
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/yourusername/localfix",
      demo: "",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section
  id="projects"
  className={`relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden transition-all duration-1000 ${
    isVisible.projects 
      ? "opacity-100 translate-y-0" 
      : "opacity-100 translate-y-0 md:opacity-0 md:translate-y-10"
  }`}
>
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-100 to-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          A showcase of my recent work and side projects
        </p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-base mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-1.5 text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white rounded-full shadow-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold border-2 border-gray-300 text-gray-700 rounded-xl hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300"
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      <ExternalLink size={18} />
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