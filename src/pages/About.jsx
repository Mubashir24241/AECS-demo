// import teamImage from "../assets/team.jpeg";

// export default function About() {
//   return (
//     <div className="min-h-screen px-6 py-12 flex flex-col items-center text-center bg-white dark:bg-gray-900">
//       <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 animate-pulse">About Us</h2>
//       <p className="max-w-2xl text-gray-700 dark:text-gray-300 mb-6">
//         The AECS Integration Credit System is designed to help users and admins track training credits,
//         certifications, and performance in a transparent and organized manner.
//       </p>
//       <img
//         src={teamImage}
//         alt="Our Team"
//         className="rounded-2xl shadow-xl w-full max-w-lg transform transition hover:scale-105 duration-300"
//       /> 
//     </div>
//   );
// }





import React from 'react';
import aboutImg from '../assets/team.jpeg';

const About = () => {
  return (
    <div className="px-8 py-12">
      <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
      <div className="flex flex-col md:flex-row items-center gap-8"> 
        <img src={aboutImg} alt="About" className="w-full md:w-1/2 rounded shadow-md cursor-pointer transform transition hover:scale-105 duration-300" />
        <p className="text-xl text-gray-700 dark:text-gray-300">
          AECS Integration Credit System is designed to help employees track their training,
          certifications, and score-based achievements. It promotes a culture of continuous
          learning and recognition.
        </p>
      </div>
    </div>
  );
};

export default About;
