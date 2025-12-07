import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-md text-white shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          Kaveesha
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {["about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`hover:text-indigo-400 transition-colors duration-300 capitalize font-medium ${
                  activeSection === section ? "text-indigo-400" : ""
                }`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col space-y-2 p-4">
            {["about", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left hover:text-indigo-400 transition-colors duration-300 capitalize font-medium py-2"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
