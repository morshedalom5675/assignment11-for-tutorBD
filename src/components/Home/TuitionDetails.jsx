import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaMoneyBill,
  FaBook,
  FaUser,
  FaClock,
} from "react-icons/fa";
import { useParams } from "react-router";
import LoadingSpinner from "../LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import ApplyModal from "../ApplyModal";

const TuitionDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const { id } = useParams();
  const { data: plant = [], isLoading } = useQuery({
    queryKey: ["tuition", id],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/tuitions/${id}`);
      return res.data;
    },
  });
  const {
    name,
    email,
    level,
    description,
    subject,
    location,
    budget,
    daysPerWeek,
  } = plant || {};
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div className="max-w-5xl mx-auto p-5 mt-6 mb-12">
      {/* Main Card */}
      <div className="bg-white shadow-lg rounded-2xl border border-gray-200 overflow-hidden">
        {/* Header Image */}
        <div className="h-52 w-full bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center text-white text-3xl font-bold">
          Tuition Details
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-gray-900">
            Subject Name : {subject}
          </h2>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border">
              <FaBook className="text-primary text-xl" />
              <div>
                <h4 className="font-semibold">Class</h4>
                <p className="text-gray-600">{level}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">{location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border">
              <FaMoneyBill className="text-primary text-xl" />
              <div>
                <h4 className="font-semibold">Budget</h4>
                <p className="text-gray-600">{budget} Tk / month</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border">
              <FaClock className="text-primary text-xl" />
              <div>
                <h4 className="font-semibold">Schedule</h4>
                <p className="text-gray-600">{daysPerWeek} Days / Week</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-4" />

          {/* Description */}
          <div>
            <h3 className="text-xl font-bold mb-2">Tuition Description</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          {/* Posted By */}
          <div className="p-4 bg-gray-50 border rounded-xl flex items-center gap-4">
            <img
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              className="w-14 h-14 rounded-full border"
              alt="User"
            />
            <div>
              <h4 className="font-bold text-lg">Posted By: {name}</h4>
              <p className="text-gray-600 text-sm">Email: {email}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={() => setIsOpen(true)}
              className="btn btn-primary px-6 rounded-lg"
            >
              Apply as Tutor
            </button>

            <ApplyModal
              tuitionId={id}
              isOpen={isOpen}
              closeModal={() => setIsOpen(false)}
            />

            <button className="btn btn-outline btn-primary px-6 rounded-lg">
              Save / Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionDetails;
