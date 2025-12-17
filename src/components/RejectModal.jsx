import { Dialog, Transition } from "@headlessui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Fragment } from "react";

const RejectModal = ({ isOpen, closeModal, tutor }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/applications/${tutor?._id}`,
        { status: "rejected" }
      );
      return res.data;
    },
    onSuccess: () => {
      // Invalidate the parent applications query to refresh UI
      queryClient.invalidateQueries(["applications"]);
      closeModal();
    },
  });
  const handleReject = () => {
    mutation.mutate();
  };
  console.log(tutor);

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

        {/* Modal */}
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
            <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border">
              <Dialog.Title className="text-xl font-bold text-red-600 text-center mb-3">
                Reject Tutor Application
              </Dialog.Title>

              <p className="text-sm text-gray-600 text-center mb-4">
                Are you sure you want to reject this tutor application? This
                action cannot be undone.
              </p>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReject}
                  type="submit"
                  className="btn btn-error text-white"
                >
                  Yes, Reject
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default RejectModal;
