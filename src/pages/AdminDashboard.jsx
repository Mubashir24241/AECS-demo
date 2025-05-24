
import React, { useState, useEffect } from 'react';
import { demoData } from '../data/data';

const AdminDashboard = ({ updateSharedData, sharedData }) => {
  const [data, setData] = useState(sharedData);
  const [formData, setFormData] = useState({ name: '', points: '', training: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState('name');

  // Pagination
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Sync local data with parent component's sharedData
  useEffect(() => {
    setData(sharedData);
  }, [sharedData]);

  // Update parent when data changes
  useEffect(() => {
    updateSharedData(data);
  }, [data, updateSharedData]);

  const handleAddOrUpdate = () => {
    if (!formData.name || !formData.points || !formData.training) {
      setError('All fields are required.');
      return;
    }

    setError('');

    if (editingIndex !== null) {
      const updated = [...data];
      updated[editingIndex] = formData;
      setData(updated);
      setEditingIndex(null);
    } else {
      const newData = [...data, { ...formData, id: Date.now() }];
      setData(newData);
    }

    setFormData({ name: '', points: '', training: '' });
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditingIndex(index);
    setError('');
  };

  const handleResetSearch = () => {
    setSearchQuery('');
    setSearchBy('name');
  };

  const handleExportCSV = () => {
    const headers = ['Name', 'Points', 'Training'];
    const rows = data.map((item) => [item.name, item.points, item.training]);
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers, ...rows].map((e) => e.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'admin_dashboard_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredData = data.filter((item) =>
    item[searchBy].toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Admin Dashboard</h2>

      {/* Form */}
      <div className="mb-4 space-x-2 flex flex-wrap justify-center items-center">
        <input
          className="border px-3 py-2 rounded focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          className="border px-3 py-2 rounded focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Points"
          value={formData.points}
          onChange={(e) => setFormData({ ...formData, points: e.target.value })}
        />
        <input
          className="border px-3 py-2 rounded focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Training"
          value={formData.training}
          onChange={(e) => setFormData({ ...formData, training: e.target.value })}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-800 transition duration-200"
          onClick={handleAddOrUpdate}
        >
          {editingIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      {/* Error */}
      {error && <div className="text-red-500 text-center mb-4 dark:text-red-400">{error}</div>}

      {/* Search & Controls */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
        <select
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
          className="border px-3 py-2 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="name">Search by Name</option>
          <option value="training">Search by Course</option>
        </select>
        <input
          type="text"
          placeholder={`Search ${searchBy}`}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="border px-3 py-2 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button
          onClick={handleResetSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800 transition duration-200"
        >
          Reset
        </button>
        <button
          onClick={handleExportCSV}
          className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-indigo-800 transition duration-200"
        >
          Export CSV
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 text-center dark:bg-gray-700">
            <th className="border p-2 dark:border-gray-600">Name</th>
            <th className="border p-2 dark:border-gray-600">Points</th>
            <th className="border p-2 dark:border-gray-600">Training</th>
            <th className="border p-2 dark:border-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item, index) => (
              <tr key={item.id} className="text-center hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border p-2 dark:border-gray-600">{item.name}</td>
                <td className="border p-2 dark:border-gray-600">{item.points}</td>
                <td className="border p-2 dark:border-gray-600">{item.training}</td>
                <td className="border p-2 space-x-2 dark:border-gray-600">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-yellow-700 transition duration-200"
                    onClick={() => handleEdit(data.findIndex(d => d.id === item.id))}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-700 transition duration-200"
                    onClick={() => handleDelete(data.findIndex(d => d.id === item.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="border p-6 text-center text-gray-500 italic dark:border-gray-600">
                {data.length === 0
                  ? 'No records available. Please add some records.'
                  : 'No matching results found for your search.'}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center space-x-2">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page + 1)}
              className={`px-4 py-2 rounded transition duration-200 hover:opacity-80 ${
                currentPage === page + 1
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
              }`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;