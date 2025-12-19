import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {
  FaCheck,
  FaTimes,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaPhoneAlt,
  FaBookOpen,
} from "react-icons/fa";
import {
  MdOutlineClass,
  MdOutlineAttachMoney,
  MdPendingActions,
  MdTimer,
} from "react-icons/md";
import LoadingSpinner from "../../../components/LoadingSpinner";

const TuitionManagement = () => {
  const { data: tuitions = [], isLoading } = useQuery({
    queryKey: ["tuitions"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/tuitions`);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-800 flex items-center gap-3 tracking-tight">
            <div className="p-2 bg-primary/10 rounded-2xl text-primary shadow-sm">
              <MdPendingActions size={32} />
            </div>
            Tuition Moderation
          </h1>
          <p className="text-gray-500 mt-2 font-medium ml-1 italic">
            Carefully review and manage all student tuition requests.
          </p>
        </div>

        {/* Status Count Summary (Optional UI) */}
        <div className="badge badge-lg py-6 px-8 bg-white border-none shadow-sm rounded-2xl gap-3">
          <span className="text-gray-400 font-bold uppercase text-[10px]">
            Total Requests:
          </span>
          <span className="text-primary font-black text-xl">
            {tuitions.length}
          </span>
        </div>
      </div>

      {/* Tuition Cards List */}
      <div className="grid grid-cols-1 gap-6">
        {tuitions.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6 lg:p-10">
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                {/* Left Side: Main Information */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="bg-primary/5 text-primary text-[11px] font-black px-4 py-1.5 rounded-xl uppercase border border-primary/10">
                      {post.level}
                    </span>
                    <h2 className="text-2xl font-black text-gray-800 flex items-center gap-2">
                      <FaBookOpen className="text-secondary/40" size={20} />{" "}
                      {post.subject}
                    </h2>
                    <div
                      className={`badge font-bold py-3.5 px-5 rounded-xl border-none text-white ${
                        post.status === "approved"
                          ? "bg-success"
                          : post.status === "rejected"
                          ? "bg-error"
                          : "bg-orange-400"
                      }`}
                    >
                      {post.status}
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    <div className="space-y-3 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                      <p className="flex items-center gap-3 text-sm text-gray-700 font-bold uppercase tracking-tight">
                        <FaUser className="text-primary" /> {post.name}
                      </p>
                      <p className="flex items-center gap-3 text-sm text-gray-500">
                        <FaPhoneAlt className="text-xs text-gray-400" />{" "}
                        {post.phone}
                      </p>
                    </div>

                    <div className="space-y-3 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                      <p className="flex items-center gap-3 text-sm text-gray-800 font-black">
                        <MdOutlineAttachMoney className="text-green-500 text-xl" />{" "}
                        {post.budget} BDT
                      </p>
                      <p className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                        <MdTimer className="text-orange-400" />{" "}
                        {post.daysPerWeek} Days / Week
                      </p>
                    </div>

                    <div className="space-y-3 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                      <p className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                        <FaMapMarkerAlt className="text-red-500" />{" "}
                        {post.location}
                      </p>
                      <p className="flex items-center gap-3 text-[10px] text-gray-400 uppercase font-black tracking-widest">
                        <FaCalendarAlt />{" "}
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="bg-blue-50/30 p-5 rounded-3xl border border-dashed border-blue-100 relative">
                    <span className="absolute -top-3 left-6 bg-white px-3 text-[10px] font-black text-blue-400 uppercase tracking-widest border border-blue-50">
                      Description
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed italic">
                      "{post.details}"
                    </p>
                  </div>
                </div>

                {/* Right Side: Admin Controls */}
                <div className="flex lg:flex-col justify-center gap-3 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-10 min-w-[180px]">
                  {post.status === "pending" ? (
                    <>
                      <button className="btn bg-success hover:bg-green-600 text-white border-none rounded-2xl px-8 shadow-lg shadow-green-100 font-bold normal-case group">
                        <FaCheck className="group-hover:scale-125 transition-transform" />{" "}
                        Approve
                      </button>
                      <button className="btn btn-outline btn-error rounded-2xl px-8 font-bold normal-case">
                        <FaTimes /> Reject
                      </button>
                    </>
                  ) : (
                    <div className="bg-gray-50 p-6 rounded-[2rem] text-center border border-gray-100 shadow-inner">
                      <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">
                        Archived
                      </p>
                      <p className="text-xs font-bold text-gray-400 mt-1 italic">
                        Action Completed
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {tuitions.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
            <MdPendingActions
              size={80}
              className="mx-auto text-gray-200 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-400 tracking-tight">
              No requests to moderate
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default TuitionManagement;
