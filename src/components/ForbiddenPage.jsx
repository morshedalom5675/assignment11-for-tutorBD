import React from "react";
import { Link } from "react-router";
import { FaArrowLeft, FaShieldAlt, FaHome } from "react-icons/fa";
import { MdBlock } from "react-icons/md";

const ForbiddenPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border border-gray-100">
        {/* Animated Warning Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Pulsing Red Background */}
            <div className="absolute inset-0 animate-ping rounded-full bg-error opacity-20"></div>
            <div className="relative bg-error text-white p-6 rounded-full shadow-lg">
              <MdBlock size={60} />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-black text-gray-800 mb-2">403</h1>
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          Access Forbidden!
        </h2>
        <p className="text-gray-500 mb-8 px-4">
          Sorry! You don't have permission to access this page. Please contact
          the administrator if you think this is a mistake.
        </p>

        {/* Security Info Box */}
        <div className="bg-red-50 rounded-2xl p-4 mb-8 flex items-center justify-center gap-3 border border-red-100">
          <FaShieldAlt className="text-error text-xl" />
          <span className="text-sm font-semibold text-error uppercase tracking-wider">
            Restricted Area
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="btn btn-error btn-lg rounded-2xl shadow-lg shadow-error/30 flex items-center justify-center gap-2 group text-white"
          >
            <FaHome />
            Back to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-ghost text-gray-500 font-bold flex items-center justify-center gap-2"
          >
            <FaArrowLeft size={14} />
            Go Previous Page
          </button>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-xs text-gray-400">
          Your IP and attempt have been logged for security purposes.
        </p>
      </div>
    </div>
  );
};

export default ForbiddenPage;
