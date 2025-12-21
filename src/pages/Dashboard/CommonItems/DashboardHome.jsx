import React from "react";
import { motion } from "framer-motion";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserShield,
  FaArrowRight,
  FaCalendarCheck,
  FaStar,
} from "react-icons/fa";
import {
  MdOutlineNotificationImportant,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const DashboardHome = () => {
  const { user } = useAuth();
  const { role } = useRole();

  const containerVars = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      className="p-4 lg:p-10 bg-gray-50 min-h-screen"
    >
      {/* 1. Welcome Banner */}
      <div className="relative overflow-hidden bg-primary rounded-[2.5rem] p-8 lg:p-12 text-white shadow-2xl shadow-primary/20 mb-10">
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                {role} account
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">
              Hello, {user?.displayName || "User"}! 👋
            </h1>
            <p className="text-blue-100 text-lg max-w-md">
              Welcome back to your dashboard. Here's what's happening with your
              activities today.
            </p>
          </div>
          <div className="hidden lg:block">
            <MdOutlineSpaceDashboard
              size={180}
              className="text-white/10 absolute -right-10 -top-10 rotate-12"
            />
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-primary">
                  <HiOutlineLightningBolt size={24} />
                </div>
                <div>
                  <p className="text-xs text-blue-100 uppercase font-bold">
                    Quick Status
                  </p>
                  <p className="font-black text-xl">System Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Role Specific Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Stats and Info */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-black text-gray-800 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full"></span>
            Overview Statistics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Conditional Stats Cards based on Role */}
            {role === "admin" && (
              <>
                <StatCard
                  title="Total Tutors"
                  value="124"
                  icon={<FaChalkboardTeacher />}
                  color="bg-purple-500"
                />
                <StatCard
                  title="Total Students"
                  value="450"
                  icon={<FaUserGraduate />}
                  color="bg-blue-500"
                />
              </>
            )}
            {role === "tutor" && (
              <>
                <StatCard
                  title="My Ongoing Classes"
                  value="3"
                  icon={<FaCalendarCheck />}
                  color="bg-green-500"
                />
                <StatCard
                  title="Profile Rating"
                  value="4.9/5"
                  icon={<FaStar />}
                  color="bg-orange-400"
                />
              </>
            )}
            {role === "student" && (
              <>
                <StatCard
                  title="Posted Tuitions"
                  value="2"
                  icon={<FaCalendarCheck />}
                  color="bg-pink-500"
                />
                <StatCard
                  title="Applied Tutors"
                  value="12"
                  icon={<FaChalkboardTeacher />}
                  color="bg-indigo-500"
                />
              </>
            )}
          </div>

          {/* Activity Placeholder */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                Recent Activity
              </h3>
              <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                View All <FaArrowRight size={10} />
              </button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors border border-transparent hover:border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <MdOutlineNotificationImportant size={24} />
                  </div>
                  <div>
                    <p className="text-gray-800 font-bold text-sm">
                      Update in Tuition Request #452
                    </p>
                    <p className="text-gray-400 text-xs font-medium">
                      2 hours ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Profile Card & Quick Actions */}
        <div className="space-y-8">
          <h2 className="text-2xl font-black text-gray-800 flex items-center gap-3">
            <span className="w-2 h-8 bg-secondary rounded-full"></span>
            My Identity
          </h2>

          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary to-blue-400"></div>
            <div className="relative z-10">
              <div className="avatar mb-4">
                <div className="w-24 rounded-[2rem] ring ring-white ring-offset-base-100 ring-offset-2 shadow-2xl transition-transform group-hover:scale-105 duration-300">
                  <img
                    src={
                      user?.photoURL || "https://i.ibb.co/Xy3rS7S/avatar.png"
                    }
                    alt="User"
                  />
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-800">
                {user?.displayName}
              </h3>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1 mb-6">
                {role}
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-tighter">
                    Verified Status
                  </span>
                  <span className="badge badge-success text-white font-bold p-3">
                    Verified
                  </span>
                </div>
                <button className="btn btn-primary rounded-2xl font-black normal-case shadow-lg shadow-primary/20">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Platform Health/Info */}
          <div className="bg-gradient-to-br from-gray-800 to-black rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
            <FaUserShield
              className="absolute -bottom-4 -right-4 text-white/10"
              size={120}
            />
            <h4 className="text-lg font-bold mb-2">Security Note</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 italic">
              Always keep your credentials safe. Never share your OTP or
              password with anyone.
            </p>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-3/4"></div>
            </div>
            <p className="text-[10px] text-primary font-black mt-3 uppercase tracking-widest">
              Platform Safety: 95%
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-6 hover:shadow-xl transition-all duration-300 group">
    <div
      className={`w-16 h-16 ${color} rounded-[1.5rem] flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform`}
    >
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <div>
      <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">
        {title}
      </p>
      <h3 className="text-3xl font-black text-gray-800 tracking-tight">
        {value}
      </h3>
    </div>
  </div>
);

export default DashboardHome;
