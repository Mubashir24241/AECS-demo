// import { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     window.location.href = `mailto:mbshrmr@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
//       <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-lg">
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Contact Us</h2>
//         <input
//           type="text"
//           placeholder="Name"
//           required
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           className="w-full p-3 mb-4 rounded border dark:bg-gray-700 dark:text-white"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           className="w-full p-3 mb-4 rounded border dark:bg-gray-700 dark:text-white"
//         />
//         <textarea
//           placeholder="Message"
//           required
//           rows="5"
//           value={formData.message}
//           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//           className="w-full p-3 mb-4 rounded border dark:bg-gray-700 dark:text-white"
//         />
//         <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }





import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent to mbshrmr@gmail.com:\n${JSON.stringify(form, null, 2)}`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="px-6 py-12 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-2 border rounded"
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
