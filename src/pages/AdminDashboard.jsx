import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">📋 All Employees Credit Points</h3>
        <ul className="list-disc ml-6">
          <li>Alice - 300 pts</li>
          <li>Bob - 280 pts</li>
          <li>Charlie - 240 pts</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">📥 Upload Weekly Training Data</h3>
        <input type="file" className="mb-4 block dark:text-white" />
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Upload
        </button>
      </section>

      <button onClick={handleLogout} className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
        Logout
      </button>
    </div>
  );
}
