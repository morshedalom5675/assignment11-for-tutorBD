import { LuBookOpen } from "react-icons/lu";
import { FaEdit, FaTrashAlt, FaInfoCircle } from "react-icons/fa";

const MyTuitions = () => {
  // ডামি টিউশন ডেটা
  const dummyTuitions = [
    {
      id: 1,
      subject: "Physics",
      class: "HSC",
      location: "Mirpur, Dhaka",
      budget: 6000,
      status: "Approved",
      applied: 3,
    },
    {
      id: 2,
      subject: "Bangla",
      class: "Class 8",
      location: "Khilgaon, Dhaka",
      budget: 4500,
      status: "Approved",
      applied: 7,
    },
    {
      id: 3,
      subject: "Chemistry",
      class: "A-Level",
      location: "Gulshan",
      budget: 10000,
      status: "Pending",
      applied: 0,
    },
  ];

  // শুধু ডিজাইনের জন্য স্ট্যাটাস ফিল্টার করা হলো
  const approvedTuitions = dummyTuitions.filter((t) => t.status === "Approved");

  return (
    <div className="p-4 sm:p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
        <LuBookOpen className="inline-block mr-2 text-secondary" /> My Approved
        Tuitions
      </h2>

      {approvedTuitions.length === 0 ? (
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
                <th>Applied Tutors</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {approvedTuitions.map((tuition) => (
                <tr key={tuition.id}>
                  <td>
                    <div className="font-bold">{tuition.subject}</div>
                    <div className="text-sm opacity-50">{tuition.class}</div>
                  </td>
                  <td>{tuition.location}</td>
                  <td>{tuition.budget}</td>
                  <td>
                    <span className="badge badge-lg badge-info text-white">
                      {tuition.applied}
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
                      className="btn btn-sm btn-ghost tooltip"
                      data-tip="Edit Post"
                    >
                      <FaEdit className="text-yellow-500" />
                    </button>
                    <button
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
    </div>
  );
};

export default MyTuitions;
