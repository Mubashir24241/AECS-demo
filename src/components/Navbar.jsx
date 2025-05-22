import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode, isLoggedIn, handleLogout }) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition duration-300 ${scrolling ? "bg-white/80 shadow-md dark:bg-gray-900/80" : "bg-transparent"} backdrop-blur-lg`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-blue-600 dark:text-blue-400">
          AECS Credit System
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/about" className="hover:underline text-sm font-medium">About</Link>
          <Link to="/contact" className="hover:underline text-sm font-medium">Contact</Link>
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
          <button onClick={() => setDarkMode(!darkMode)} className="ml-2 text-gray-600 dark:text-gray-300">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
