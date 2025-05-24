
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ toggleTheme, theme }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('role');
    setRole(null);
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">AECS Credit Points System</div>
      <ul className="flex items-center space-x-6">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
        <li>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </li>
        {role ? (
          <li>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
