import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";

const ApplyModal = ({ isOpen, closeModal, tuitionId }) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
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

        {/* Modal Wrapper */}
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
            <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border">
              {/* Header */}
              <Dialog.Title className="text-xl font-bold text-gray-800 mb-4 text-center">
                Apply as Tutor
              </Dialog.Title>

              {/* Form */}
              <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="label font-medium">Name</label>
                  <input
                    {...register("tutorName")}
                    type="text"
                    readOnly
                    defaultValue={user?.displayName}
                    placeholder="Tutor Name"
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label font-medium">Email</label>
                  <input
                    {...register("tutorEmail")}
                    defaultValue={user?.email}
                    type="email"
                    readOnly
                    placeholder="Tutor Email"
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                  />
                </div>

                {/* Qualifications */}
                <div>
                  <label className="label font-medium">Qualifications</label>
                  <input
                    {...register("qualification")}
                    type="text"
                    placeholder="Your qualification"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="label font-medium">Experience</label>
                  <input
                    {...register("experience")}
                    type="text"
                    placeholder="Years of experience"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Expected Salary */}
                <div>
                  <label className="label font-medium">Expected Salary</label>
                  <input
                    {...register("expectedSalary")}
                    type="number"
                    placeholder="Expected salary"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="btn btn-ghost"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit Application
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ApplyModal;
