import React from "react";
import {
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaUserGraduate,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineAttachMoney, MdOutlineLocationOn } from "react-icons/md";
// import useAuth from "../../../hooks/useAuth"; 

const OngoingTuitions = () => {
//   const { user } = useAuth();

  // ডামি ডেটা (আসল ডেটা API থেকে আসবে যেখানে status === 'approved')
  const ongoingData = [
    {
      id: "101",
      studentName: "Arif Ahmed",
      studentEmail: "arif@example.com",
      studentPhone: "017XXXXXXXX",
      subject: "Advanced Mathematics",
      class: "Class 12 / HSC",
      salary: 6000,
      location: "Dhanmondi, Dhaka",
      startDate: "2024-05-15",
    },
    {
      id: "102",
      studentName: "Sara Karim",
      studentEmail: "sara@example.com",
      studentPhone: "018XXXXXXXX",
      subject: "Physics",
      class: "Class 10",
      salary: 4500,
      location: "Online / Zoom",
      startDate: "2024-05-12",
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-full">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        <FaChalkboardTeacher className="inline-block mr-2 text-primary" />{" "}
        Ongoing Tuitions
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {ongoingData.map((tuition) => (
          <div
            key={tuition.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-success overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {tuition.subject}
                  </h2>
                  <span className="badge badge-success text-white badge-sm px-3 py-2 mt-1">
                    Ongoing
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary flex items-center justify-end">
                    <MdOutlineAttachMoney /> {tuition.salary}
                  </p>
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Monthly Salary
                  </p>
                </div>
              </div>

              <div className="divider my-2"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* Left Side: Student Info */}
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Student Details
                  </h3>
                  <div className="flex items-center text-gray-700">
                    <FaUserGraduate className="mr-3 text-secondary" />
                    <span className="font-medium">{tuition.studentName}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaPhoneAlt className="mr-3 text-gray-400" />
                    <span>{tuition.studentPhone}</span>
                  </div>
                </div>

                {/* Right Side: Tuition Info */}
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Class Info
                  </h3>
                  <div className="flex items-center text-gray-700">
                    <MdOutlineLocationOn className="mr-3 text-error text-lg" />
                    <span className="text-sm">{tuition.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaCalendarAlt className="mr-3 text-gray-400" />
                    <span>Started: {tuition.startDate}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-2">
                <button className="btn btn-primary btn-sm flex-1">
                  View Full Details
                </button>
                <a
                  href={`tel:${tuition.studentPhone}`}
                  className="btn btn-outline btn-success btn-sm"
                >
                  Call Student
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Data State */}
      {ongoingData.length === 0 && (
        <div className="bg-white p-12 rounded-xl shadow-md text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-100 p-4 rounded-full text-gray-400">
              <FaChalkboardTeacher size={48} />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-700">
            No Ongoing Tuitions Found
          </h3>
          <p className="text-gray-500 mt-2">
            Apply for tuitions and get approved to see them here.
          </p>
        </div>
      )}
    </div>
  );
};

export default OngoingTuitions;
