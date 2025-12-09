import React from "react";
import { FaUserEdit, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";

// ডামি ডেটা (আপনার আসল ডেটা State বা Context থেকে আসবে)
// const dummyUser = {
//   name: "John Doe (Student)", // রোলের উল্লেখ
//   email: "john.doe@example.com",
//   phone: "01XXXXXXXXX",
//   joinDate: "2024-01-15",
//   photoUrl:
//     "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
// };

const ProfileSettings = () => {
  const { user } = useAuth();
  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        <FaUserEdit className="inline-block mr-2 text-primary" /> Profile
        Settings
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- 1. Current Profile Information (Sidebar Style) --- */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg h-fit">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-primary">
            Your Current Profile
          </h2>

          {/* Profile Picture */}
          <div className="avatar flex justify-center mb-6">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt="User Profile" />
            </div>
          </div>

          {/* Basic Info */}
          <div className="space-y-3">
            <div className="flex items-center">
              <FaUserEdit className="w-5 h-5 mr-3 text-secondary" />
              <span className="font-bold text-lg">{user?.displayName}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaEnvelope className="w-5 h-5 mr-3" />
              <span>{user?.email}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaPhone className="w-5 h-5 mr-3" />
              <span>{user?.phoneNumber}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 pt-2 border-t mt-3">
              <MdOutlineDateRange className="w-5 h-5 mr-3" />
              <span>Joined: {user?.joinDate}</span>
            </div>
          </div>
        </div>

        {/* --- 2. Update Profile Form (Main Area) --- */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-6 border-b pb-2 text-primary">
            Update Your Information
          </h2>

          {/* Dummy Form (Add actual React state and onSubmit logic here) */}
          <form>
            {/* Name Input */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </div>

            {/* Email Input (Usually Read-only) */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-medium">
                  Email Address (Read Only)
                </span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Phone Input */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-medium">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                defaultValue={user?.phoneNumber}
                className="input input-bordered w-full"
              />
            </div>

            {/* Photo URL Input */}
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text font-medium">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Paste your new photo URL"
                defaultValue={user?.photoURL}
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text-alt text-gray-500">
                  Note: Using Firebase/Image hosting is recommended.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto"
              >
                <FaUserEdit className="mr-2" /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
