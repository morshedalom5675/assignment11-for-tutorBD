import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {
  FaTasks,
  FaEdit,
  FaTrashAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaGraduationCap,
} from "react-icons/fa";
import { MdOutlineAttachMoney, MdCalendarToday } from "react-icons/md";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";

const MyApplications = () => {
    const { user } = useAuth();


  const { data: myApplications = [], isLoading } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/applications?email=${user.email}`);
      return res.data;
    },
  });
  if (isLoading) return <LoadingSpinner />;


    // date formate with gpt
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-full">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        <FaTasks className="inline-block mr-2 text-primary" /> My Applications
      </h1>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-gray-800 text-white">
              <tr>
                <th>Applied Info</th>
                <th>Experience & Qualification</th>
                <th>Expected Salary</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myApplications.map((app) => (
                <tr
                  key={app._id}
                  className="hover:bg-blue-50/30 transition-colors border-b"
                >
                  {/* Applied Date & ID */}
                  <td>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-700">
                        Tuition ID: {app.tuitionId}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center mt-1">
                        <MdCalendarToday className="mr-1" />{" "}
                        {formatDate(app.appliedAt)}
                      </span>
                    </div>
                  </td>

                  {/* Qualification & Experience */}
                  <td>
                    <div className="flex flex-col">
                      <div className="flex items-center text-sm font-medium text-gray-600">
                        <FaGraduationCap className="mr-2 text-secondary" />{" "}
                        {app.qualification}
                      </div>
                      <span className="text-xs text-blue-500 font-semibold bg-blue-50 px-2 py-1 rounded-md w-fit mt-1">
                        {app.experience} Exp.
                      </span>
                    </div>
                  </td>

                  {/* Salary */}
                  <td>
                    <span className="text-lg font-bold text-primary flex items-center">
                      <MdOutlineAttachMoney className="text-xl" />{" "}
                      {app.expectedSalary}
                    </span>
                  </td>

                  {/* Status Badge */}
                  <td>
                    {app.status === "pending" && (
                      <div className="badge badge-warning gap-2 font-medium py-3 px-4">
                        <FaClock className="animate-pulse" /> Pending
                      </div>
                    )}
                    {app.status === "approved" && (
                      <div className="badge badge-success text-white gap-2 font-medium py-3 px-4">
                        <FaCheckCircle /> Approved
                      </div>
                    )}
                    {app.status === "rejected" && (
                      <div className="badge badge-error text-white gap-2 font-medium py-3 px-4 shadow-sm">
                        <FaTimesCircle /> Rejected
                      </div>
                    )}
                  </td>

                  {/* Conditional Buttons */}
                  <td>
                    <div className="flex items-center gap-3">
                      {app.status === "pending" ? (
                        <>
                          <button
                            className="text-blue-500 hover:text-blue-700 transition-colors"
                            title="Edit"
                          >
                            <FaEdit size={18} />
                          </button>
                          <button
                            className="text-red-400 hover:text-red-600 transition-colors"
                            title="Delete"
                          >
                            <FaTrashAlt size={18} />
                          </button>
                        </>
                      ) : (
                        <span className="text-xs italic text-gray-400">
                          Locked
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;
