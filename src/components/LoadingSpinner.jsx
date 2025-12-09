import React from "react";
import { FaSpinner } from "react-icons/fa";
// Or: import { ImSpinner9 } from 'react-icons/im';
// Or: import { AiOutlineLoading3Quarters } from 'react-icons/ai';
// You can use any React Icon of your choice.

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-gray-50 bg-opacity-80 backdrop-blur-sm">
      {/* Spinner Container */}
      <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-2xl">
        <FaSpinner className="text-5xl text-primary animate-spin mb-4" />

        <p className="text-lg font-bold text-gray-700 mt-2">Please wait...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
