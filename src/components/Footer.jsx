export default function FooterSection() {
  return (
    <footer className="relative py-10 bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 text-gray-400 border-t border-indigo-500/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Kaveesha Sulakshana</span>. All Rights Reserved.
          </p>

          {/* Tech Stack Badge */}
          <p className="text-sm text-gray-500">
            Built with <span className="text-indigo-400 font-semibold">React</span> & <span className="text-purple-400 font-semibold">Tailwind CSS</span>
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com/KaveeshaJIma" className="hover:text-white transition-colors duration-300">
              GitHub
            </a>
            <span className="text-gray-600">•</span>
            <a href="https://linkedin.com/in/kaveesha-sulakshana" className="hover:text-white transition-colors duration-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}