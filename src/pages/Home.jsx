import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
  className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900"
  style={{ minHeight: '82vh' }}
>
  <h1 className="text-4xl font-bold mb-4">Welcome to AECS Integration Credit Points System</h1>
      <p className="mb-6 text-lg">Track your achievements and stay ahead with our points system.</p>
      <div className="flex justify-center space-x-6">
        <Link to="/login" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Login as User/Admin</Link>
      </div>
    </div>
  );
};

export default Home;

