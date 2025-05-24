import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto w-full">
      <div className="flex justify-between items-center px-6">
        <p>&copy; 2025 AECS Credit System</p>
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

