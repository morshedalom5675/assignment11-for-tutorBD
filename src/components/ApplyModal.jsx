import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const ApplyModal = ({ isOpen, closeModal, tuition }) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutateAsync } = useMutation({
    mutationFn: async (applicationData) =>
      await axios.post(
        `${import.meta.env.VITE_API_URL}/applications`,
        applicationData
      ),
    onSuccess: () => {
      console.log("application successfully add");
      toast.success("Your application has been submit please wait");
    },
  });

  console.log(tuition);
  const submitForm = (data) => {
    const { tutorName, tutorEmail, qualification, experience, expectedSalary } =
      data;
    const tutorData = {
      tutorName,
      tutorEmail,
      tutorPhoto: user?.photoURL,
      tuitionId: tuition?._id,
      studentName: tuition?.name,
      studentEmail: tuition?.email,
      subject: tuition?.subject,
      studentPhone: tuition?.phone,
      level: tuition?.level,
      location: tuition?.location,
      qualification,
      experience,
      expectedSalary: Number(expectedSalary),
      status: "pending",
      appliedAt: new Date(),
    };
    mutateAsync(tutorData);
    closeModal();
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
                    {...register("qualification", {
                      required: "Qualifications is required",
                    })}
                    type="text"
                    placeholder="Your qualification"
                    className="input input-bordered w-full"
                  />
                  {errors.qualification && (
                    <p className="text-red-500 mt-2">
                      {errors.qualification.message}
                    </p>
                  )}
                </div>

                {/* Experience */}
                <div>
                  <label className="label font-medium">Experience</label>
                  <input
                    {...register("experience", {
                      required: "Experience is required",
                    })}
                    type="text"
                    placeholder="Years of experience"
                    className="input input-bordered w-full"
                  />
                  {errors.experience && (
                    <p className="text-red-500 mt-2">
                      {errors.experience.message}
                    </p>
                  )}
                </div>

                {/* Expected Salary */}
                <div>
                  <label className="label font-medium">Expected Salary</label>
                  <input
                    {...register("expectedSalary", {
                      required: "Expected Salary is required",
                    })}
                    type="number"
                    placeholder="Expected salary"
                    className="input input-bordered w-full"
                  />
                  {errors.expectedSalary && (
                    <p className="text-red-500 mt-2">
                      {errors.expectedSalary.message}
                    </p>
                  )}
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
