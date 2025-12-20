import { LuBookOpen } from "react-icons/lu";
import { FaEdit, FaTrashAlt, FaInfoCircle } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Swal from "sweetalert2";
import { useState } from "react";
import EditPostModal from "../../../components/EditpostModal";

const MyTuitions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectTuition,setSelectTuition]=useState(null)
  const { user } = useAuth() || {};
  const queryClient = useQueryClient();

  const { data: tuitions, isLoading } = useQuery({
    queryKey: ["tuition", user?.email],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/tuitions?email=${user?.email}`
      );
      return res.data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (id) =>
      axios.delete(`${import.meta.env.VITE_API_URL}/tuitions/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["tuition"]);

      Swal.fire({
        title: "Deleted!",
        text: "Tuition has been deleted.",
        icon: "success",
      });
    },
  });

  const handleDelete = (id) => {
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
        mutateAsync(id);
      }
    });
  };
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="p-4 sm:p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
        <LuBookOpen className="inline-block mr-2 text-secondary" /> My Tuitions
      </h2>

      {tuitions.length === 0 ? (
        <div className="text-center p-10 bg-gray-50 rounded-lg border">
          <p className="text-lg text-gray-600">
            You currently have no approved tuitions.{" "}
            <a
              href="/dashboard/student/post-tuition"
              className="text-primary font-semibold hover:underline"
            >
              Post a new tuition now!
            </a>
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full table-zebra">
            <thead>
              <tr className="bg-base-200">
                <th>Subject & Class</th>
                <th>Location</th>
                <th>Budget (BDT)</th>
                <th>Tuition Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tuitions.map((tuition) => (
                <tr key={tuition._id}>
                  <td>
                    <div className="font-bold">{tuition.subject}</div>
                    <div className="text-sm opacity-50">{tuition.level}</div>
                  </td>
                  <td>{tuition.location}</td>
                  <td>{tuition.budget}</td>
                  <td>
                    <span className="badge badge-lg badge-info text-white">
                      {tuition.status}
                    </span>
                  </td>
                  <td className="space-x-2">
                    <button
                      className="btn btn-sm btn-ghost tooltip"
                      data-tip="View Details"
                    >
                      <FaInfoCircle className="text-blue-500" />
                    </button>
                    <button
                      onClick={()=>{setIsOpen(true),setSelectTuition(tuition)}}
                      className="btn btn-sm btn-ghost tooltip"
                      data-tip="Edit Post"
                    >
                      <FaEdit className="text-yellow-500" />
                    </button>
                    <button
                      onClick={() => handleDelete(tuition._id)}
                      className="btn btn-sm btn-ghost tooltip"
                      data-tip="Delete Post"
                    >
                      <FaTrashAlt className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <EditPostModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        tuition={selectTuition}
      ></EditPostModal>
    </div>
  );
};

export default MyTuitions;
