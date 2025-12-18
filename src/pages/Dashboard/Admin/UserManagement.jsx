import React, { useState } from "react";
import { FaUserShield, FaUserGraduate, FaChalkboardTeacher, FaTrashAlt, FaSearch, FaUserEdit, FaSave, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { _id: "u1", name: "Morshed Alom", email: "morshed@gmail.com", photo: "https://i.ibb.co.com/profile1.jpg", role: "tutor" },
    { _id: "u2", name: "Abir Hossain", email: "abir@student.com", photo: "https://i.ibb.co.com/profile2.jpg", role: "student" },
    { _id: "u3", name: "Admin Boss", email: "admin@etuition.com", photo: "https://i.ibb.co.com/profile3.jpg", role: "admin" }
  ];

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-800 flex items-center gap-3 tracking-tight">
            <div className="p-2 bg-primary/10 rounded-xl text-primary shadow-sm">
               <FaUserShield size={28} />
            </div>
            User Management
          </h1>
          <p className="text-gray-500 text-sm mt-1 font-medium ml-1">Total {users.length} members registered</p>
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search by name or email..."
            className="input input-bordered w-full pl-12 rounded-2xl focus:outline-primary border-none shadow-sm h-12 bg-white"
          />
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* --- User List Header --- */}
      <div className="hidden lg:grid grid-cols-12 px-8 py-4 text-gray-400 text-[11px] font-black uppercase tracking-[0.2em]">
        <div className="col-span-5">User Details</div>
        <div className="col-span-3">Current Role</div>
        <div className="col-span-4 text-right pr-6">Management</div>
      </div>

      {/* --- User Card List --- */}
      <div className="space-y-3">
        {users.map((user) => (
          <div 
            key={user._id} 
            className="grid grid-cols-1 lg:grid-cols-12 items-center bg-white px-6 py-4 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
          >
            {/* User Info */}
            <div className="col-span-1 lg:col-span-5 flex items-center gap-4 mb-4 lg:mb-0">
              <div className="avatar">
                <div className="w-14 h-14 rounded-2xl overflow-hidden ring-4 ring-gray-50 group-hover:ring-primary/10 transition-all">
                  <img src={user.photo} alt={user.name} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base leading-tight">{user.name}</h3>
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-1 font-medium">
                  <MdEmail className="text-primary/40" /> {user.email}
                </p>
              </div>
            </div>

            {/* Current Role Chip */}
            <div className="col-span-1 lg:col-span-3 mb-4 lg:mb-0">
              {user.role === "admin" && (
                <span className="bg-blue-50 text-blue-600 font-bold py-1.5 px-4 rounded-full text-[10px] uppercase flex items-center gap-2 w-fit border border-blue-100">
                  <FaUserShield size={10} /> Admin
                </span>
              )}
              {user.role === "tutor" && (
                <span className="bg-purple-50 text-purple-600 font-bold py-1.5 px-4 rounded-full text-[10px] uppercase flex items-center gap-2 w-fit border border-purple-100">
                  <FaChalkboardTeacher size={10} /> Tutor
                </span>
              )}
              {user.role === "student" && (
                <span className="bg-gray-100 text-gray-500 font-bold py-1.5 px-4 rounded-full text-[10px] uppercase flex items-center gap-2 w-fit border border-gray-200">
                  <FaUserGraduate size={10} /> Student
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="col-span-1 lg:col-span-4 flex items-center lg:justify-end gap-2">
              <button 
                onClick={() => {
                   setSelectedUser(user);
                   document.getElementById('edit_user_modal').showModal();
                }}
                className="btn btn-sm bg-primary/5 hover:bg-primary text-primary hover:text-white border-none rounded-xl px-4 normal-case font-bold transition-all gap-2"
              >
                <FaUserEdit /> Edit Info
              </button>
              
              <button className="btn btn-sm btn-ghost btn-circle text-red-400 hover:bg-red-50 hover:text-red-500">
                <FaTrashAlt size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- DaisyUI Edit Modal --- */}
      <dialog id="edit_user_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box rounded-[2.5rem] p-8">
          <h3 className="font-black text-2xl text-gray-800 flex items-center gap-2 mb-6 border-b pb-4">
            <FaUserEdit className="text-primary" /> Edit User Role
          </h3>
          
          <div className="space-y-5">
            {/* Display User Simple Info */}
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-200">
                <img src={selectedUser?.photo} className="w-12 h-12 rounded-xl" alt="" />
                <div>
                    <p className="font-bold text-gray-700">{selectedUser?.name}</p>
                    <p className="text-xs text-gray-400">{selectedUser?.email}</p>
                </div>
            </div>

            {/* Role Selection */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-gray-600">Assign New Role</span>
              </label>
              <select className="select select-bordered w-full rounded-2xl focus:outline-primary bg-white">
                <option disabled selected>Current: {selectedUser?.role.toUpperCase()}</option>
                <option>Admin</option>
                <option>Tutor</option>
                <option>Student</option>
              </select>
            </div>
          </div>

          <div className="modal-action flex gap-2">
            <form method="dialog" className="flex-1">
              <button className="btn btn-ghost w-full rounded-2xl font-bold">Cancel</button>
            </form>
            <button className="btn btn-primary flex-1 rounded-2xl font-bold shadow-lg shadow-primary/20">
              <FaSave className="mr-2" /> Save Changes
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UserManagement;