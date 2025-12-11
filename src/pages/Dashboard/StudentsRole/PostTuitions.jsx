import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";
import toast from "react-hot-toast";

const PostTuition = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // use mutation hook use
  const {
    isPending,
    isError,
    mutateAsync,
    reset: mutation,
  } = useMutation({
    mutationFn: async (payload) =>
      await axios.post(`${import.meta.env.VITE_API_URL}/tuitions`, payload),
    onSuccess: (data) => {
      console.log(data);
      mutation();
      // success toast
      toast.success("Tuition Request successfully added");
    },
    onError: (error) => {
      console.log(error);
    },
    onMutate: (payload) => {
      console.log("I will post this data -->", payload);
    },
    onSettled: (data, error) => {
      if (data) console.log(data);
      if (error) console.log(error);
    },
    retry: 3,
  });

  const applyTuitionSubmit = async (data) => {
    const {
      name,
      budget,
      daysPerWeek,
      level,
      details,
      location,
      phone,
      subject,
    } = data;

    try {
      const tuitionData = {
        name,
        email: user?.email,
        budget: Number(budget),
        daysPerWeek: daysPerWeek ? Number(daysPerWeek) : Number(6),
        level,
        details,
        location,
        phone,
        subject,
      };
      await mutateAsync(tuitionData);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  if (isPending) return <LoadingSpinner></LoadingSpinner>;
  if (isError) return <p>Error</p>;
  return (
    <div className="p-4 sm:p-8 bg-white rounded-lg shadow-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
        <IoMdAddCircle className="inline-block mr-2 text-success" /> Post New
        Tuition
      </h2>

      <form onSubmit={handleSubmit(applyTuitionSubmit)} className="space-y-4">
        {/* Student Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Student Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Student Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name is required",
                maxLength: {
                  value: 20,
                  message: "Name length highest 20 characters",
                },
              })}
              type="text"
              placeholder="e.g., Hasib Rahman"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Contact Number */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Contact Number</span>
            </label>
            <input
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "Phone number must be exactly 11 digits",
                },
              })}
              type="tel"
              placeholder="e.g., 017XXXXXXXX"
              className="input input-bordered w-full"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Tuition Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Subject */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">
                Subject(s) Required
              </span>
            </label>
            <input
              {...register("subject", {
                required: "Subject is required",
              })}
              type="text"
              placeholder="e.g., Math, English, Physics"
              className="input input-bordered w-full"
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Class/Level */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Class/Level</span>
            </label>
            <select
              {...register("level", {
                required: "Class is required",
              })}
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Select Class/Level
              </option>
              <option>Class 1 - 5</option>
              <option>Class 6 - 8</option>
              <option>SSC/O-Level</option>
              <option>HSC/A-Level</option>
            </select>
          </div>
          {errors.level && (
            <p className="text-red-500 text-xs mt-1">{errors.level.message}</p>
          )}
        </div>

        {/* Location & Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Preferred Location</span>
            </label>
            <input
              {...register("location", {
                required: "Location is required",
              })}
              type="text"
              placeholder="e.g., Mirpur DOHS, Dhanmondi 32"
              className="input input-bordered w-full"
            />
            {errors.location && (
              <p className="text-red-500 text-xs mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Budget */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">
                Monthly Budget (BDT)
              </span>
            </label>
            <input
              {...register("budget", {
                required: "Budget is required",
              })}
              type="number"
              placeholder="e.g., 5000"
              className="input input-bordered w-full"
            />
            {errors.budget && (
              <p className="text-red-500 text-xs mt-1">
                {errors.budget.message}
              </p>
            )}
          </div>
        </div>

        {/* Days per week */}
        <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text font-medium">
              Days per week (Optional)
            </span>
          </label>
          <input
            {...register("daysPerWeek")}
            type="number"
            placeholder="e.g., 3"
            className="input input-bordered w-full"
          />
        </div>

        {/* Details */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">
              Detailed Requirements & Schedule
            </span>
          </label>
          <textarea
            {...register("details", {
              required: "Details is required",
            })}
            className="textarea textarea-bordered h-24"
            placeholder="Mention days, time, and any specific tutor requirements..."
          ></textarea>
          {errors.details && (
            <p className="text-red-500 text-xs mt-1">
              {errors.details.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex justify-end">
          <button type="submit" className="btn btn-success text-white btn-lg">
            <FaPaperPlane className="mr-2" />
            {isPending ? (
              <FaPaperPlane className="animate-spin w-full mx-auto" />
            ) : (
              "Post Tuition"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostTuition;
