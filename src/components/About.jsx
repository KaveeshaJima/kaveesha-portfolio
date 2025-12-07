export default function About({ isVisible }) {
  return (
    <section
      id="about"
      className={`py-20 bg-gray-50 text-center transition-all duration-1000 ${
        isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
        I'm a passionate software developer with expertise in modern web and
        mobile application development. I enjoy building elegant, performant, and
        user-friendly digital experiences using the latest technologies.
      </p>
    </section>
  );
}
