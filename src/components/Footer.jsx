// import { Github, Linkedin, Instagram } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-auto py-4 border-t dark:border-gray-700">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
//         <p className="text-sm">&copy; {new Date().getFullYear()} AECS Integration Credit Points System</p>
//         <div className="flex gap-4 mt-2 sm:mt-0">
//           <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
//             <Github className="h-5 w-5 hover:text-black dark:hover:text-white" />
//           </a>
//           <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
//             <Linkedin className="h-5 w-5 hover:text-blue-700 dark:hover:text-blue-400" />
//           </a>
//           <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
//             <Instagram className="h-5 w-5 hover:text-pink-500 dark:hover:text-pink-400" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import React from 'react';
// import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 dark:bg-gray-900 text-center text-sm p-4 text-gray-700 dark:text-gray-300 mt-auto">
//       <div className="flex justify-center gap-4 mb-2">
//         <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={20} /></a>
//         <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
//         <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
//       </div>
//       <p>&copy; 2025 AECS Credit System</p>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-300 dark:bg-gray-700 p-4 text-center mt-10">
      <p>&copy; 2025 AECS-Integration. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2 text-xl">
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
      </div>
    </footer>
  );
}
