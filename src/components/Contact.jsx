export default function Contact({ isVisible }) {
  return (
    <section
      id="contact"
      className={`py-20 bg-white text-center transition-all duration-1000 ${
        isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-6 text-gray-600">
        Interested in collaborating or want to connect? Drop me a message below.
      </p>
      <a
        href="mailto:kaveesha@example.com"
        className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-lg transition-all"
      >
        Email Me kaveeshajima2004@gmail.com 
      </a>
    </section>
  );
}
