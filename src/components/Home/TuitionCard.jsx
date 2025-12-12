import React from "react";
import { MapPin, BookOpen, DollarSign, Phone, User2 } from "lucide-react";
import { Link } from "react-router";

const TuitionCard = ({ tuition }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 p-6 transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-bold text-gray-800 leading-snug">
          {tuition?.subject} Tutor Needed
        </h2>

        <div className="badge badge-primary badge-lg text-white font-medium">
          {tuition?.level}
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        {/* Student Name */}
        <div className="flex items-center text-gray-700">
          <User2 className="w-4 h-4 mr-2 text-primary" />
          <span>{tuition?.name}</span>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-700">
          <MapPin className="w-4 h-4 mr-2 text-primary" />
          <span>{tuition?.location}</span>
        </div>

        {/* Subject */}
        <div className="flex items-center text-gray-700">
          <BookOpen className="w-4 h-4 mr-2 text-primary" />
          <span>{tuition?.subject}</span>
        </div>

        {/* Budget */}
        <div className="flex items-center text-gray-900 font-semibold">
          <DollarSign className="w-4 h-4 mr-2 text-green-600" />
          <span>{tuition?.budget} BDT / Month</span>
        </div>

        {/* Phone */}
        <div className="flex items-center text-gray-700">
          <Phone className="w-4 h-4 mr-2 text-primary" />
          <span>{tuition?.phone}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end mt-5">
        <Link
          to={`/tuitionDetails/${tuition._id}`}
          className="btn btn-primary rounded-full px-5"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TuitionCard;
