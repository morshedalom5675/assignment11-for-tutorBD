import axios from "axios";
import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router"; 
import {
  FaCheckCircle,
  FaArrowRight,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { MdOutlineDoneAll } from "react-icons/md";

const SuccessPayment = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      axios.post(`${import.meta.env.VITE_API_URL}/payment-success`, {
        sessionId,
      });
    }
  }, [sessionId]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border border-gray-100">
        {/* Animated Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-success opacity-20"></div>
            <div className="relative bg-success text-white p-6 rounded-full shadow-lg">
              <MdOutlineDoneAll size={60} />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-black text-gray-800 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-500 mb-8 px-4">
          Thank you for your payment. Your transaction has been completed
          successfully and the tutor is now officially appointed.
        </p>

        {/* Info Box */}
        <div className="bg-blue-50 rounded-2xl p-4 mb-8 flex items-center justify-center gap-3 border border-blue-100">
          <FaFileInvoiceDollar className="text-primary text-xl" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Session ID: {sessionId?.slice(0, 15)}...
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            to="/dashboard/student/payments"
            className="btn btn-primary btn-lg rounded-2xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group"
          >
            Go to Payment History
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link to="/" className="btn btn-ghost text-gray-500 font-bold">
            Back to Home
          </Link>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-xs text-gray-400">
          A confirmation email has been sent to your registered address.
        </p>
      </div>
    </div>
  );
};

export default SuccessPayment;
