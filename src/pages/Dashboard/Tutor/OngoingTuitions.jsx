import React from "react";
import {
  FaChalkboardTeacher,
  FaPhoneAlt,
  FaEnvelope,
  FaIdBadge,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  MdOutlineAttachMoney,
  MdOutlineCastForEducation,
} from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Link } from "react-router";

const OngoingTuitions = () => {
    const { user } = useAuth();
    
    const { data: ongoingApplications = [], isLoading } = useQuery({
        queryKey: ["ongoingApplications"],
        queryFn: async () => {
          const res = await axios(`${import.meta.env.VITE_API_URL}/applications?email=${user.email}`);
          return res.data;
        },
      });
      if (isLoading) return <LoadingSpinner />;

 const approvedApplications = ongoingApplications.filter(approved => approved.status === 'approved')

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            <FaChalkboardTeacher className="inline-block mr-3 text-primary" />
            Ongoing Tuitions
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            List of tuitions where you are currently appointed.
          </p>
        </div>
        <div className="badge badge-success gap-2 text-white p-4 mt-2 md:mt-0 font-bold">
          Active Jobs: {ongoingApplications.length}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {approvedApplications.map((app) => (
          <div
            key={app._id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            {/* Top Bar - Visual Accent */}
            <div className="h-2 bg-success w-full"></div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-50 rounded-xl text-success border border-green-100">
                    <MdOutlineCastForEducation size={28} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">
                      Tuition Class
                    </h2>
                    <p className="text-xs text-gray-400 font-mono tracking-tighter">
                      REF: {app.tuitionId}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-primary flex items-center justify-end tracking-tight">
                    <MdOutlineAttachMoney />
                    {app.expectedSalary}
                  </span>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                    Monthly Salary
                  </p>
                </div>
              </div>

              {/* Info Section */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <FaIdBadge className="mr-3 text-secondary" />
                  <span className="text-sm">
                    <strong>Tutor:</strong> {app.tutorName}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center text-sm text-gray-500 italic">
                    <FaCalendarAlt className="mr-2" />
                    Started: {new Date(app.appliedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm font-bold text-blue-600">
                    <span className="bg-blue-100 px-2 py-1 rounded">
                      Exp: {app.experience}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Link to={`/tuitionDetails/${app.tuitionId}` }className="btn btn-primary flex-1 btn-md rounded-xl">
                  View Details
                </Link>
                <button className="btn btn-outline btn-success flex-1 btn-md rounded-xl">
                  <FaPhoneAlt className="mr-2" /> Call Student
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {approvedApplications.length === 0 && (
        <div className="text-center py-20">
          <div className="text-gray-300 flex justify-center mb-4">
            <FaChalkboardTeacher size={80} />
          </div>
          <h3 className="text-xl font-bold text-gray-600">
            No active tuitions found
          </h3>
          <p className="text-gray-400">
            Apply to more tuitions and get approved!
          </p>
        </div>
      )}
    </div>
  );
};

export default OngoingTuitions;
