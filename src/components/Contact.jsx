import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function ContactSection({ isVisible }) {
  return (
    <section
      id="contact"
      className={`relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden transition-all duration-1000 ${
        isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Connect</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Interested in collaborating or want to discuss a project? 
          I'd love to hear from you. Drop me a message and let's create something amazing together!
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
          <a
            href="mailto:kaveeshajima2004@gmail.com"
            className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
          >
            <Mail className="w-12 h-12 text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-300 text-sm">kaveeshajima2004@gmail.com</p>
          </a>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-300 text-sm">Sri Lanka</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://github.com/KaveeshaJIma"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://linkedin.com/in/kaveesha-sulakshana"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <Linkedin className="w-7 h-7" />
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:kaveeshajima2004@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-2xl font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/50"
        >
          <Send size={20} />
          Send Message
        </a>
      </div>
    </section>
  );
}
