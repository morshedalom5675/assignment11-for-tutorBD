import React from "react";
import {
  FaTasks,
  FaEdit,
  FaTrashAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
// import useAuth from "../../../hooks/useAuth"; 

const MyApplications = () => {
//   const { user } = useAuth();

  // ডামি ডেটা (আসল ডেটা API থেকে আসবে)
  const applications = [
    {
      id: "1",
      subject: "Mathematics",
      class: "Class 10",
      salary: 5000,
      status: "pending",
      appliedDate: "2024-05-10",
    },
    {
      id: "2",
      subject: "Physics",
      class: "HSC",
      salary: 7000,
      status: "approved",
      appliedDate: "2024-05-08",
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-full">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        <FaTasks className="inline-block mr-2 text-primary" /> My Applications
      </h1>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-primary text-white">
              <tr>
                <th>Subject & Class</th>
                <th>Expected Salary</th>
                <th>Applied Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                  <td>
                    <div className="font-bold text-gray-700">{app.subject}</div>
                    <div className="text-sm opacity-60">{app.class}</div>
                  </td>
                  <td className="font-semibold text-secondary">
                    <MdOutlineAttachMoney className="inline text-xl" />
                    {app.salary}
                  </td>
                  <td>{app.appliedDate}</td>
                  <td>
                    {app.status === "pending" && (
                      <span className="badge badge-warning gap-2 p-3">
                        <FaClock /> Pending
                      </span>
                    )}
                    {app.status === "approved" && (
                      <span className="badge badge-success gap-2 p-3 text-white">
                        <FaCheckCircle /> Approved
                      </span>
                    )}
                    {app.status === "rejected" && (
                      <span className="badge badge-error gap-2 p-3 text-white">
                        <FaTimesCircle /> Rejected
                      </span>
                    )}
                  </td>
                  <td className="flex gap-2">
                    {/* Update and Delete button only for pending status */}
                    <button
                      disabled={app.status !== "pending"}
                      className={`btn btn-sm ${
                        app.status === "pending"
                          ? "btn-outline btn-info"
                          : "btn-disabled"
                      }`}
                      title="Update Application"
                    >
                      <FaEdit />
                    </button>
                    <button
                      disabled={app.status !== "pending"}
                      className={`btn btn-sm ${
                        app.status === "pending"
                          ? "btn-outline btn-error"
                          : "btn-disabled"
                      }`}
                      title="Delete Application"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* If no applications found */}
        {applications.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            You haven't applied to any tuitions yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplications;
