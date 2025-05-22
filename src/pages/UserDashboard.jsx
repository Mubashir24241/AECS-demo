import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">User Dashboard</h2>
      <p className="mb-4">🎯 Credit Points Scored: <span className="font-semibold">250</span></p>
      <p className="mb-4">📜 Trainings & Certifications Completed: <span className="font-semibold">5</span></p>

      <h3 className="text-xl font-bold mt-8 mb-2">🏆 Leaderboard</h3>
      <ul className="list-disc ml-6">
        <li>1. Alice - 300 pts</li>
        <li>2. Bob - 280 pts</li>
        <li>3. You - 250 pts</li>
      </ul>

      <button onClick={handleLogout} className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
        Logout
      </button>
    </div>
  );
}
