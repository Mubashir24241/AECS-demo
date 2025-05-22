import teamImage from "../assets/team.jpeg";

export default function About() {
  return (
    <div className="min-h-screen px-6 py-12 flex flex-col items-center text-center bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 animate-pulse">About Us</h2>
      <p className="max-w-2xl text-gray-700 dark:text-gray-300 mb-6">
        The AECS Integration Credit System is designed to help users and admins track training credits,
        certifications, and performance in a transparent and organized manner.
      </p>
      <img
        src={teamImage}
        alt="Our Team"
        className="rounded-2xl shadow-xl w-full max-w-lg transform transition hover:scale-105 duration-300"
      />
    </div>
  );
}
