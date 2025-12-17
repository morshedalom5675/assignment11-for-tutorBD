import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { useState } from "react";
import PaymentModal from "../../../components/PaymentModal";
import RejectModal from "../../../components/RejectModal";

const AppliedTutors = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rejectModalIsOpen, setRejectModalIsOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(null);

  const { data: applications = [], isLoading } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/applications`);
      return res.data;
    },
  });

  const acceptTutor = (app) => {
    setIsOpen(true);
    setSelectedTutor(app);
  };

  if (isLoading) return <LoadingSpinner />;

  const getStatusBadge = (status) => {
    if (status === "approved") return "badge-success";
    if (status === "rejected") return "badge-error";
    return "badge-warning";
  };

  return (
    <div className="p-4 sm:p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
        <FaChalkboardTeacher className="inline-block mr-2 text-info" />
        Tutor Applications Received
      </h2>

      {applications.length === 0 ? (
        <div className="text-center p-10 bg-gray-50 rounded-lg border">
          <p className="text-lg text-gray-600">
            No applications received yet for your active tuitions.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {applications.map((app) => (
            <div
              key={app._id}
              className="card card-side bg-base-100 shadow-md border hover:shadow-lg transition"
            >
              {/* Tutor Image */}
              <figure className="w-1/6 bg-gray-100 flex items-center justify-center">
                <div className="avatar">
                  <div className="rounded-full">
                    <img
                      src={
                        app.tutorPhoto || "https://i.ibb.co/2kR8Z6J/avatar.png"
                      }
                      alt="Tutor"
                    />
                  </div>
                </div>
              </figure>

              {/* Body */}
              <div className="card-body p-4 md:p-6 w-5/6">
                <div className="flex justify-between items-center">
                  <h3 className="card-title text-xl text-primary">
                    {app.tutorName}
                  </h3>

                  {/* Status Badge */}
                  <span
                    className={`badge ${getStatusBadge(
                      app.status
                    )} badge-outline capitalize`}
                  >
                    {app.status || "pending"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-2">
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

                {/* Actions */}
                <div className="card-actions justify-end mt-4">
                  <button
                    onClick={() => acceptTutor(app)}
                    disabled={app.status !== "pending"}
                    className="btn btn-success btn-sm text-white disabled:opacity-50"
                  >
                    <IoCheckmarkCircle className="mr-1 text-lg" />
                    Accept
                  </button>

                  <button
                    onClick={() => {
                      setRejectModalIsOpen(true), setSelectedTutor(app);
                    }}
                    disabled={app.status !== "pending"}
                    className="btn btn-error btn-sm btn-outline disabled:opacity-50"
                  >
                    <IoCloseCircle className="mr-1 text-lg" />
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <PaymentModal
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false), setSelectedTutor(null);
        }}
        tutor={selectedTutor}
      ></PaymentModal>
      <RejectModal
        isOpen={rejectModalIsOpen}
        closeModal={() => {
          setRejectModalIsOpen(false), setSelectedTutor(null);
        }}
        tutor={selectedTutor}
      ></RejectModal>
    </div>
  );
};

export default AppliedTutors;
