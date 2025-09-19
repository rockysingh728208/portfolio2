
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
// import resume from "../assets/fullresume2.pdf";
import resume from "../assets/Deepa Resume.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 shadow-lg z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-white animate-pulse">
            <Link to="/">Deepa Kumari</Link>
          </div>
          <div className="hidden md:flex space-x-8 text-white font-medium items-center">
            {/* {["Home", "About", "Projects", "Contact"].map((item) => ( */}
            {["Home", "About", "Posts", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "")}`}
                className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
              >
                {item}
              </Link>
            ))}

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
            >
              Resume
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-full hover:bg-purple-700 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-purple-700 shadow-lg">
          <div className="px-4 py-4 space-y-3 flex flex-col items-center">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "")}`}
                className="block text-white text-lg font-medium hover:text-yellow-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-yellow-400 text-black text-center px-6 py-2 rounded-full hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
