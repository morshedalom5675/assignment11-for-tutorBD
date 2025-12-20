import { Dialog } from "@headlessui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaTimes, FaEdit } from "react-icons/fa";

const EditPostModal = ({ isOpen, closeModal, tuition }) => {
  const { register, handleSubmit } = useForm();

  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (data) => {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/edit-tuitionPost/${tuition?._id}`,
        data
      );
      return res.data;
    },
    onSuccess: () => {
      // Invalidate the parent applications query to refresh UI
      queryClient.invalidateQueries(["tuitions"]);
      toast.success("Your tuition post has been updated");
      closeModal();
    },
  });

  const onSubmit = (data) => {
    mutateAsync(data);
  };

  console.log(tuition);
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <Dialog.Panel className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-3 mb-5">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaEdit className="text-warning" />
              Edit Tuition Post
            </h2>
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-red-500"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* FORM  */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Student Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Student Name</span>
                </label>
                <input
                  {...register("name")}
                  defaultValue={tuition?.name}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Contact Number</span>
                </label>
                <input
                  {...register("phone")}
                  defaultValue={tuition?.phone}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Subject & Class */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Subject(s)</span>
                </label>
                <input
                  {...register("subject")}
                  defaultValue={tuition?.subject}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Class/Level</span>
                </label>
                <select
                  {...register("level")}
                  defaultValue={tuition?.level}
                  className="select select-bordered"
                >
                  <option>Class 1 - 5</option>
                  <option>Class 6 - 8</option>
                  <option>SSC/O-Level</option>
                  <option>HSC/A-Level</option>
                </select>
              </div>
            </div>

            {/* Location & Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Location</span>
                </label>
                <input
                  {...register("location")}
                  defaultValue={tuition?.location}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Monthly Budget</span>
                </label>
                <input
                  type="number"
                  {...register("budget")}
                  defaultValue={tuition?.budget}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Days */}
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text font-medium">Days per week</span>
              </label>
              <input
                type="number"
                {...register("daysPerWeek")}
                defaultValue={tuition?.daysPerWeek}
                className="input input-bordered w-full"
              />
            </div>

            {/* Details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Details</span>
              </label>
              <textarea
                {...register("details")}
                defaultValue={tuition?.details}
                className="textarea textarea-bordered h-24"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={closeModal}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-warning text-white">
                Save Changes
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EditPostModal;
