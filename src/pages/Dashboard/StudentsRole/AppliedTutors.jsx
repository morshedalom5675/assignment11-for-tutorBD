import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

const AppliedTutors = () => {
  // ডামি অ্যাপ্লিকেশন ডেটা
  const dummyApplications = [
    {
      id: 1,
      tuition: "Physics (HSC)",
      tutorName: "Rahim Khan",
      qualification: "BUET, EEE",
      experience: "3 years",
      expectedSalary: 7000,
      status: "Pending",
    },
    {
      id: 2,
      tuition: "Bangla (Class 8)",
      tutorName: "Nusrat Jahan",
      qualification: "DU, English",
      experience: "5 years",
      expectedSalary: 4800,
      status: "Pending",
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
        <FaChalkboardTeacher className="inline-block mr-2 text-info" /> Tutor
        Applications Received
      </h2>

      {dummyApplications.length === 0 ? (
        <div className="text-center p-10 bg-gray-50 rounded-lg border">
          <p className="text-lg text-gray-600">
            No applications received yet for your active tuitions.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {dummyApplications.map((app) => (
            <div
              key={app.id}
              className="card card-side bg-base-100 shadow-lg border"
            >
              <figure className="w-1/6 bg-gray-100 flex items-center justify-center">
                {/* Tutor Profile Picture Placeholder */}
                <div className="avatar placeholder">
                  <div className="w-16 rounded-full bg-neutral text-neutral-content">
                    <span className="text-xl">{app.tutorName.charAt(0)}</span>
                  </div>
                </div>
              </figure>
              <div className="card-body p-4 md:p-6 w-5/6">
                <h3 className="card-title text-xl text-primary">
                  {app.tutorName} (Applied for: {app.tuition})
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <p>
                    <strong>Qualification:</strong> {app.qualification}
                  </p>
                  <p>
                    <strong>Experience:</strong> {app.experience}
                  </p>
                  <p className="col-span-2">
                    <strong>Expected Salary:</strong>{" "}
                    <span className="text-lg font-bold text-success">
                      {app.expectedSalary} BDT
                    </span>
                  </p>
                </div>
                <div className="card-actions justify-end mt-4">
                  {/* Accept Button: Redirects to Payment Page (Stripe) */}
                  <button className="btn btn-success text-white">
                    <IoCheckmarkCircle className="mr-1 text-xl" /> Accept Tutor
                    (Pay Now)
                  </button>
                  {/* Reject Button: Updates Status in DB */}
                  <button className="btn btn-error hover:text-white btn-outline">
                    <IoCloseCircle className="mr-1 text-xl" /> Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliedTutors;
