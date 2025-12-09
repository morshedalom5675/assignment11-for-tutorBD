import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";

const PostTuition = () => {
  return (
    <div className="p-4 sm:p-8 bg-white rounded-lg shadow-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
        <IoMdAddCircle className="inline-block mr-2 text-success" /> Post New
        Tuition
      </h2>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Subject */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">
                Subject(s) Required
              </span>
            </label>
            <input
              type="text"
              placeholder="e.g., Math, English, Physics"
              className="input input-bordered w-full"
            />
          </div>

          {/* Class/Level */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Class/Level</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled selected>
                Select Class/Level
              </option>
              <option>Class 1 - 5</option>
              <option>Class 6 - 8</option>
              <option>SSC/O-Level</option>
              <option>HSC/A-Level</option>
              {/* Add more options */}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Preferred Location</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Mirpur DOHS, Dhanmondi 32"
              className="input input-bordered w-full"
            />
          </div>

          {/* Budget */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">
                Monthly Budget (BDT)
              </span>
            </label>
            <input
              type="number"
              placeholder="e.g., 5000"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Schedule/Details */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">
              Detailed Requirements & Schedule
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Mention days, time, and any specific tutor requirements..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex justify-end">
          <button type="submit" className="btn btn-success text-white btn-lg">
            <FaPaperPlane className="mr-2" /> Post Tuition
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostTuition;
