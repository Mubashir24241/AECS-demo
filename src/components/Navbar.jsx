// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react";

// export default function Navbar({ darkMode, setDarkMode, isLoggedIn, handleLogout }) {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full top-0 z-50 transition duration-300 ${scrolling ? "bg-white/80 shadow-md dark:bg-gray-900/80" : "bg-transparent"} backdrop-blur-lg`}>
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <Link to="/" className="text-lg font-bold text-blue-600 dark:text-blue-400">
//           AECS Credit System
//         </Link>
//         <div className="flex gap-4 items-center">
//           <Link to="/about" className="hover:underline text-sm font-medium">About</Link>
//           <Link to="/contact" className="hover:underline text-sm font-medium">Contact</Link>
//           {isLoggedIn && (
//             <button
//               onClick={handleLogout}
//               className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
//             >
//               Logout
//             </button>
//           )}
//           <button onClick={() => setDarkMode(!darkMode)} className="ml-2 text-gray-600 dark:text-gray-300">
//             {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }






import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600 dark:text-blue-300">
          AECS-Integration
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full border border-gray-400 dark:border-white"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;