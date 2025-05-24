// import React from 'react';

// const UserDashboard = ({ sharedData = [] }) => {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
//       <table className="w-full table-auto border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Points</th>
//             <th className="border p-2">Training</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sharedData.length > 0 ? (
//             sharedData.map((item, index) => (
//               <tr key={index} className="text-center">
//                 <td className="border p-2">{item.name}</td>
//                 <td className="border p-2">{item.points}</td>
//                 <td className="border p-2">{item.training}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" className="border p-2 text-center text-gray-500">
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserDashboard;



// UserDashboard.jsx
import React from 'react';

const UserDashboard = ({ sharedData = [] }) => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Training Records</h2>
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="border p-2 dark:border-gray-600">Name</th>
            <th className="border p-2 dark:border-gray-600">Points</th>
            <th className="border p-2 dark:border-gray-600">Training</th>
          </tr>
        </thead>
        <tbody>
          {sharedData.length > 0 ? (
            sharedData.map((item, index) => (
              <tr key={index} className="text-center hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border p-2 dark:border-gray-600">{item.name}</td>
                <td className="border p-2 dark:border-gray-600">{item.points}</td>
                <td className="border p-2 dark:border-gray-600">{item.training}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border p-6 text-center text-gray-500 italic dark:border-gray-600">
                No training records available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;