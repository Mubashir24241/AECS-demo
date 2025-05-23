// import { useNavigate } from "react-router-dom";

// export default function UserDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
//       <h2 className="text-3xl font-bold mb-6">User Dashboard</h2>
//       <p className="mb-4">🎯 Credit Points Scored: <span className="font-semibold">250</span></p>
//       <p className="mb-4">📜 Trainings & Certifications Completed: <span className="font-semibold">5</span></p>

//       <h3 className="text-xl font-bold mt-8 mb-2">🏆 Leaderboard</h3>
//       <ul className="list-disc ml-6">
//         <li>1. Alice - 300 pts</li>
//         <li>2. Bob - 280 pts</li>
//         <li>3. You - 250 pts</li>
//       </ul>

//       <button onClick={handleLogout} className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
//         Logout
//       </button>
//     </div>
//   );
// }





import React from 'react';
import { userData } from '../data/data';

const UserDashboard = () => {
  const topThree = [...userData].sort((a, b) => b.points - a.points).slice(0, 3);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Credit Points</h2>
      <table className="w-full table-auto border border-gray-300 shadow-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Training</th>
            <th className="px-4 py-2">Certifications</th>
            <th className="px-4 py-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((u) => (
            <tr key={u.id} className="text-center">
              <td className="border px-4 py-2">{u.training}</td>
              <td className="border px-4 py-2">{u.certification}</td>
              <td className="border px-4 py-2">{u.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mt-10 mb-2">Leaderboard</h2>
      <ul className="list-disc pl-6">
        {topThree.map((u) => (
          <li key={u.id}>{u.name} - {u.points} pts</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
