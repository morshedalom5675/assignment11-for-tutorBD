import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import {
  FaUserShield,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaTrashAlt,
  FaSearch,
  FaUserEdit,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import LoadingSpinner from "../../../components/LoadingSpinner";
import UpdateModal from "../../../components/UpdateModal";
import Swal from "sweetalert2";

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const { data: users = [] } = useQuery({
    queryKey: ["users",searchText],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_API_URL}/users?searchText=${searchText}`);
      return res.data;
    },
  });

  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (id) =>
      axios.delete(`${import.meta.env.VITE_API_URL}/users/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      Swal.fire({
        title: "Deleted!",
        text: "User has been deleted.",
        icon: "success",
      });
    },
  });

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutateAsync(user._id);
      }
    });
  };

  // if (isLoading) return <LoadingSpinner />;

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
          <p className="text-gray-500 text-sm mt-1 font-medium ml-1">
            Total {users.length} members registered
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <input
            onChange={(e) => setSearchText(e.target.value)}
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
                  <img src={user.image} alt={user.name} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base leading-tight">
                  {user.name}
                </h3>
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
                  setIsOpen(true);
                  setSelectedUser(user);
                }}
                className="btn btn-sm bg-primary/5 hover:bg-primary text-primary hover:text-white border-none rounded-xl px-4 normal-case font-bold transition-all gap-2"
              >
                <FaUserEdit /> Edit Info
              </button>

              <button
                onClick={() => handleDelete(user)}
                className="btn btn-sm btn-ghost btn-circle text-red-400 hover:bg-red-50 hover:text-red-500"
              >
                <FaTrashAlt size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <UpdateModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        userData={selectedUser}
      ></UpdateModal>
    </div>
  );
};

export default UserManagement;

//  <dialog
//         id="edit_user_modal"
//         className="modal modal-bottom sm:modal-middle"
//       >
//         <div className="modal-box rounded-[2.5rem] p-8">
//           <h3 className="font-black text-2xl text-gray-800 flex items-center gap-2 mb-6 border-b pb-4">
//             <FaUserEdit className="text-primary" /> Edit User Info
//           </h3>

//           {/* React Hook Form */}
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//             {/* User Preview */}
//             <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-200">
//               <img
//                 src={selectedUser?.image}
//                 className="w-12 h-12 rounded-xl"
//                 alt=""
//               />
//               <div>
//                 <p className="font-bold text-gray-700">{selectedUser?.name}</p>
//                 <p className="text-xs text-gray-400">{selectedUser?.email}</p>
//               </div>
//             </div>

//             {/* Role */}
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-bold text-gray-600">
//                   User Role
//                 </span>
//               </label>
//               <select
//                 {...register("role")}
//                 className="select select-bordered w-full rounded-2xl bg-white"
//               >
//                 <option value="tutor">Tutor</option>
//                 <option value="student">Student</option>
//               </select>
//             </div>

//             {/* Actions */}
//             <div className="modal-action flex gap-2">
//               <button
//                 type="button"
//                 onClick={() =>
//                   document.getElementById("edit_user_modal").close()
//                 }
//                 className="btn btn-ghost flex-1 rounded-2xl font-bold"
//               >
//                 <FaTimes className="mr-2" /> Cancel
//               </button>

//               <button
//                 type="submit"
//                 className="btn btn-primary flex-1 rounded-2xl font-bold shadow-lg shadow-primary/20"
//               >
//                 <FaSave className="mr-2" /> Save Changes
//               </button>
//             </div>
//           </form>
//         </div>
//       </dialog>
