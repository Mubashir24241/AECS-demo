// import { useNavigate } from "react-router-dom";

// export default function AdminDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
//       <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

//       <section className="mb-8">
//         <h3 className="text-xl font-semibold mb-2">📋 All Employees Credit Points</h3>
//         <ul className="list-disc ml-6">
//           <li>Alice - 300 pts</li>
//           <li>Bob - 280 pts</li>
//           <li>Charlie - 240 pts</li>
//         </ul>
//       </section>

//       <section className="mb-8">
//         <h3 className="text-xl font-semibold mb-2">📥 Upload Weekly Training Data</h3>
//         <input type="file" className="mb-4 block dark:text-white" />
//         <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
//           Upload
//         </button>
//       </section>

//       <button onClick={handleLogout} className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
//         Logout
//       </button>
//     </div>
//   );
// }





import React, { useState } from 'react';
import { userData } from '../data/data';


const AdminDashboard = () => {
  const [data, setData] = useState(userData);
  const [newUser, setNewUser] = useState({ name: '', training: '', certification: '', points: '' });

  const handleAdd = () => {
    setData([...data, { id: Date.now(), ...newUser }]);
    setNewUser({ name: '', training: '', certification: '', points: '' });
  };

  const handleDelete = (id) => setData(data.filter((u) => u.id !== id));

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input type="text" placeholder="Name" className="border px-2 py-1" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
        <input type="text" placeholder="Training" className="border px-2 py-1" value={newUser.training} onChange={(e) => setNewUser({ ...newUser, training: e.target.value })} />
        <input type="text" placeholder="Certification" className="border px-2 py-1" value={newUser.certification} onChange={(e) => setNewUser({ ...newUser, certification: e.target.value })} />
        <input type="number" placeholder="Points" className="border px-2 py-1" value={newUser.points} onChange={(e) => setNewUser({ ...newUser, points: +e.target.value })} />
        <button className="bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600" onClick={handleAdd}>Add</button>
      </div>

      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Training</th>
            <th className="px-4 py-2">Certification</th>
            <th className="px-4 py-2">Points</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((u) => (
            <tr key={u.id}>
              <td className="border px-4 py-2">{u.name}</td>
              <td className="border px-4 py-2">{u.training}</td>
              <td className="border px-4 py-2">{u.certification}</td>
              <td className="border px-4 py-2">{u.points}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleDelete(u.id)} className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
