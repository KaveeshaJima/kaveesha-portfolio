import { ChevronDown } from "lucide-react";

export default function Hero({ isVisible, scrollToSection }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div
        className={`relative z-10 transform transition-all duration-1000 ${
          isVisible.hero ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <span className="text-4xl font-bold text-white">KS</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Kaveesha Sulakshana
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Software Developer | Full-Stack | Mobile & Web Enthusiast 🚀
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl font-medium shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white rounded-xl font-medium transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-indigo-400" />
      </div>
    </section>
  );
}
