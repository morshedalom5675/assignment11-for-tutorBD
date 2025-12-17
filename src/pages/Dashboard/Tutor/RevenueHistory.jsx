import React from "react";
import { IoWallet, IoCalendar, IoPerson } from "react-icons/io5";

const RevenueHistory = () => {
  // Dummy data
  const revenues = [
    {
      _id: "1",
      tuitionTitle: "Physics (HSC)",
      studentName: "Rahim Khan",
      date: "2025-12-10",
      amount: 7000,
      status: "Paid",
    },
    {
      _id: "2",
      tuitionTitle: "Bangla (Class 8)",
      studentName: "Nusrat Jahan",
      date: "2025-12-12",
      amount: 4800,
      status: "Paid",
    },
    {
      _id: "3",
      tuitionTitle: "Math (Class 10)",
      studentName: "Karim Ahmed",
      date: "2025-12-14",
      amount: 5000,
      status: "Pending",
    },
  ];

  const getStatusBadge = (status) => {
    if (status === "Paid") return "bg-green-100 text-green-800";
    if (status === "Pending") return "bg-yellow-100 text-yellow-800";
    if (status === "Failed") return "bg-red-100 text-red-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Revenue History</h2>

      {revenues.length === 0 ? (
        <div className="text-center p-10 bg-white rounded-lg shadow border">
          <p className="text-gray-600 text-lg">No revenue records yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow border">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Tuition
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Student
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Amount
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {revenues.map((rev) => (
                <tr
                  key={rev._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 flex items-center gap-2 text-gray-800">
                    <IoWallet className="text-green-500" />
                    {rev.tuitionTitle}
                  </td>
                  <td className="py-3 px-4 flex items-center gap-2 text-gray-800">
                    <IoPerson className="text-blue-500" />
                    {rev.studentName}
                  </td>
                  <td className="py-3 px-4 flex items-center gap-2 text-gray-800">
                    <IoCalendar className="text-purple-500" />
                    {rev.date}
                  </td>
                  <td className="py-3 px-4 text-gray-800 font-semibold">
                    {rev.amount} BDT
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(
                        rev.status
                      )}`}
                    >
                      {rev.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RevenueHistory;
