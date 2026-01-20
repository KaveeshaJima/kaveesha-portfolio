import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavigationBar({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="fixed w-full bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 backdrop-blur-lg text-white shadow-2xl z-50 border-b border-indigo-500/20">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300 cursor-pointer">
          Kaveesha.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`relative px-4 py-2 font-semibold transition-all duration-300 ${
                  activeSection === id
                    ? "text-indigo-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-indigo-400 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-800 to-gray-900 border-t border-indigo-500/30 shadow-xl">
          <ul className="flex flex-col space-y-1 p-4">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    scrollToSection(id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === id
                      ? "bg-indigo-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}