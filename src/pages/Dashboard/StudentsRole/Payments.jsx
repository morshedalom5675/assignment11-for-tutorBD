import React from "react";
import { FaWallet } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";

const Payments = () => {
  // ডামি পেমেন্ট ডেটা
  const dummyPayments = [
    {
      id: "TXN1001",
      amount: 7000,
      date: "2025-11-20",
      tutor: "Rahim Khan",
      status: "Successful",
    },
    {
      id: "TXN1002",
      amount: 4800,
      date: "2025-10-25",
      tutor: "Nusrat Jahan",
      status: "Successful",
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
        <FaWallet className="inline-block mr-2 text-warning" /> Payment History
      </h2>

      {dummyPayments.length === 0 ? (
        <div className="text-center p-10 bg-gray-50 rounded-lg border">
          <p className="text-lg text-gray-600">No payment records found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full table-zebra">
            <thead>
              <tr className="bg-base-200">
                <th>Transaction ID</th>
                <th>Tutor Name</th>
                <th>Amount (BDT)</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyPayments.map((payment) => (
                <tr key={payment.id}>
                  <td className="font-bold">{payment.id}</td>
                  <td>{payment.tutor}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.date}</td>
                  <td>
                    <span className="badge badge-success text-white flex items-center">
                      <MdDoneOutline className="mr-1" /> {payment.status}
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

export default Payments;
