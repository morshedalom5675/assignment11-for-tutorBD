import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment } from "react";
import useAuth from "../hooks/useAuth";

const PaymentModal = ({ isOpen, closeModal, tutor }) => {
  const { user } = useAuth();
  const {
    tutorPhoto,
    tutorName,
    _id,
    tutorEmail,
    tuitionId,
    expectedSalary,
    qualification,
  } = tutor || {};
  console.log(tuitionId)
  console.log(_id)

  const handlePayment = async () => {
    const tutorInfo = {
      tutorName,
      tutorEmail,
      tutorPhoto,
      applicationId:_id,
      tuitionId,
      expectedSalary,
      student: {
        studentName: user?.displayName,
          studentEmail: user?.email,
          studentPhoto:user?.photoURL
        
      },
    };
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/create-checkout-session`,
      tutorInfo
      );
      window.location.href = res.data.url
      closeModal()
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
              <Dialog.Title className="text-xl font-bold text-center mb-4">
                Confirm Tutor & Payment
              </Dialog.Title>

              {/* Tutor Info */}
              <div className="flex items-center gap-4 border rounded-lg p-4 mb-4">
                <img
                  src={tutorPhoto}
                  alt="Tutor"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{tutorName}</h3>
                  <p className="text-sm text-gray-500">{qualification}</p>
                </div>
              </div>

              {/* Salary */}
              <div className="bg-gray-50 rounded-lg p-4 text-center mb-6">
                <p className="text-sm text-gray-500">Expected Salary</p>
                <p className="text-2xl font-bold text-primary">
                  {expectedSalary} BDT
                </p>
              </div>

              {/* Warning */}
              <p className="text-xs text-gray-500 text-center mb-4">
                Tutor will be approved only after successful payment.
              </p>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button onClick={closeModal} className="btn btn-outline">
                  Cancel
                </button>
                <button onClick={handlePayment} className="btn btn-primary">
                  Proceed to Payment
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PaymentModal;
