import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-300 mb-4">
        Welcome to AECS Integration Credit Points System
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
        Track your achievements and stay on top with our integrated credit system.
      </p>
      <div className="flex gap-6">
        <Link to="/user-dashboard" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-lg">
          User Login
        </Link>
        <Link to="/admin-dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-lg">
          Admin Login
        </Link>
      </div>
    </div>
  );
}
