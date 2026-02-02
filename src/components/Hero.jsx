import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection({ isVisible, scrollToSection }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white px-6 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 transform transition-all duration-1000 ${
          isVisible.hero ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Profile Image/Avatar */}
        <div className="w-36 h-36 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-500 border-4 border-white/20">
          <span className="text-5xl font-bold text-white">KS</span>
        </div>

        {/* Greeting Text */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient">
            Kaveesha Sulakshana
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Software Developer | Full-Stack Engineer | Mobile & Web Enthusiast 
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-2xl font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/50"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-10 py-4 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/KaveeshaJIma"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/kaveesha-sulakshana"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:kaveeshajima2004@gmail.com"
            className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-indigo-400" />
      </div>
    </section>
  );
}