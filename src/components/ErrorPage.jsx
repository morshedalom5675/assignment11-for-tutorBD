import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100 px-4 text-center overflow-hidden">
      {/* Animated Icon */}
      <div className="text-7xl mb-6 animate-bounce">❌</div>

      {/* 404 */}
      <h1 className="text-7xl sm:text-8xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Divider */}
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full my-6" />

      {/* Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-lg shadow-purple-300 hover:bg-purple-700 transition duration-300"
      >
        <FaHome /> Back to Home
      </Link>

      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300/30 rounded-full blur-2xl animate-ping" />
      <div className="absolute bottom-16 right-16 w-24 h-24 bg-indigo-300/30 rounded-full blur-2xl animate-ping delay-200" />
    </div>
  );
};

export default ErrorPage;
