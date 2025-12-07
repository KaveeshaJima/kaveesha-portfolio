export default function Projects({ isVisible }) {
  const projects = [
    { title: "FitZone Fitness App", description: "Web app for fitness center management with dashboards." },
    { title: "LuxeVista Resort App", description: "Android app for luxury resort bookings and services." },
    { title: "Gadget Hub", description: "SOA-based app for gadget sales and distributor integration." }
  ];

  return (
    <section
      id="projects"
      className={`py-20 bg-gray-50 text-center transition-all duration-1000 ${
        isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
