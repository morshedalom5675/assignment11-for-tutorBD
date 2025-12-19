import React from "react";
import {
  MapPin,
  BookOpen,
  DollarSign,
  Phone,
  User2,
  Calendar,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Link } from "react-router";

const TuitionCard = ({ tuition }) => {
  
  const statusStyles = {
    pending: "bg-orange-50 text-orange-600 border-orange-100",
    approved: "bg-green-50 text-green-600 border-green-100",
    rejected: "bg-red-50 text-red-600 border-red-100",
  };

  return (
    <div className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Top Section: Badges */}
      <div className="p-6 pb-0 flex justify-between items-start">
        <div className="flex flex-wrap gap-2">
          <span className="badge badge-primary badge-outline font-black px-4 py-3 rounded-xl text-[10px] uppercase tracking-wider">
            {tuition?.level}
          </span>
          <span className="badge bg-gray-50 text-gray-500 border-none font-bold px-4 py-3 rounded-xl text-[10px] uppercase tracking-wider flex items-center gap-1">
            <Clock size={12} /> {tuition?.daysPerWeek || 0} Days/Week
          </span>
        </div>

        {/* Dynamic Status Badge */}
        <div
          className={`px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-tighter border ${
            statusStyles[tuition?.status] || statusStyles.pending
          }`}
        >
          ● {tuition?.status}
        </div>
      </div>

      {/* Header */}
      <div className="px-6 pt-4">
        <h2 className="text-2xl font-black text-gray-800 group-hover:text-primary transition-colors leading-tight min-h-[60px]">
          {tuition?.subject} Tutor Needed
        </h2>
      </div>

      {/* Info Body */}
      <div className="px-6 py-4 space-y-4 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          {/* Student Name */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-50/50 rounded-2xl">
              <User2 className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">
                Student
              </p>
              <p className="text-sm font-bold text-gray-700">{tuition?.name}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-50/50 rounded-2xl">
              <MapPin className="w-4 h-4 text-red-500" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">
                Location
              </p>
              <p className="text-sm font-bold text-gray-700">
                {tuition?.location}
              </p>
            </div>
          </div>

          {/* Salary */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-green-50 rounded-2xl">
              <DollarSign className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">
                Salary
              </p>
              <p className="text-sm font-black text-gray-800">
                {tuition?.budget} BDT
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-purple-50 rounded-2xl">
              <Phone className="w-4 h-4 text-purple-500" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">
                Contact
              </p>
              <p className="text-sm font-bold text-gray-700 tracking-wider">
                {tuition?.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Short Details Preview */}
        <div className="mt-4 p-4 bg-gray-50/50 rounded-[1.5rem] border border-dashed border-gray-200">
          <p className="text-xs text-gray-500 leading-relaxed italic line-clamp-2">
            "{tuition?.details}"
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 py-5 bg-white border-t border-gray-50 mt-auto flex items-center justify-between">
        <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1.5 uppercase">
          <Calendar size={14} className="text-gray-300" />
          {tuition?.createdAt
            ? new Date(tuition.createdAt).toLocaleDateString()
            : "Recent"}
        </span>

        <Link
          to={`/tuitionDetails/${tuition._id}`}
          className="flex items-center gap-1 text-primary font-black text-sm group/btn hover:gap-3 transition-all"
        >
          Details{" "}
          <ArrowRight
            size={18}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
};

export default TuitionCard;
