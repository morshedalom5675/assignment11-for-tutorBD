import { Dialog, Transition } from "@headlessui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { FaUserEdit, FaEnvelope, FaUserTag } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateModal = ({ isOpen, closeModal, userData }) => {
  const { name, email, image } = userData || {};

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async (userInfo) =>
      axios.patch(
        `${import.meta.env.VITE_API_URL}/users/${userData._id}`,
        userInfo
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      closeModal();
      Swal.fire({
        title: "Edited!",
        text: "User Role has been Edited.",
        icon: "success",
      });
    },
  });

    const { register, handleSubmit } = useForm();
    
  const onSubmit = (data) => {
    const userInfo = {
      role: data.role,
    };
    mutateAsync(userInfo);
    };
    
    

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        {/* Modal Box */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
              {/* Title */}
              <Dialog.Title className="text-xl font-bold text-center mb-5 flex items-center justify-center gap-2">
                <FaUserEdit className="text-primary" />
                User Information
              </Dialog.Title>

              {/* User Preview */}
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border mb-5">
                <img
                  src={image}
                  alt="User"
                  className="w-14 h-14 rounded-full object-cover border"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {name}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <FaEnvelope /> {email}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Role */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-gray-600">
                      User Role
                    </span>
                  </label>
                  <select
                    {...register("role")}
                    className="select select-bordered w-full rounded-2xl bg-white"
                  >
                    <option value="tutor">Tutor</option>
                    <option value="student">Student</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="btn btn-outline"
                  >
                    Close
                  </button>
                  <button className="btn btn-primary">Edit User</button>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateModal;
