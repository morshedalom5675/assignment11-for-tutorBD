import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { IoIosSchool } from "react-icons/io";
import {
  //   FaUserGraduate,
  //   FaChalkboardTeacher,
  FaUser,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
// import axios from "axios";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../../utils/utils";
import SocialLogin from "../SocialLogin/Sociallogin";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, loading } = useAuth() || {};
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const { mutateAsync } = useMutation({
    mutationKey: ["user"],
    mutationFn: async (user) =>
      await axios.post(`${import.meta.env.VITE_API_URL}/users`, user),
  });

  const onSubmit = async (data) => {
    const { name, image, email, password, phone ,role} = data;
    const imageFile = image[0];
    console.log(data)

    // const formData = new FormData();
    // formData.append("image", imageFile);

    try {
      // const { data } = await axios.post(
      //   `https://api.imgbb.com/1/upload?key=${
      //     import.meta.env.VITE_IMG_UPLOAD_KEY
      //   }`,
      //   formData
      // );
      const imageURL = await imageUpload(imageFile);
      const result = await createUser(email, password);
      console.log(result.user);
      const user = {
        name,
        email,
        image: imageURL,
        phone,
        role
      };
      console.log(user);
      mutateAsync(user);
      await updateUser(name, imageURL);
      toast.success("SignUp successful");
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    // Full Page Container with Background and Centering
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header & Logo */}
        <div className="text-center p-6 md:p-8 bg-primary/10 border-b border-primary/20">
          <Link
            to="/"
            className="text-3xl font-extrabold flex items-center justify-center gap-2 text-primary"
          >
            <IoIosSchool className="h-8 w-8" />
            <span>eTuitionBd</span>
          </Link>
          <h2 className="text-2xl font-bold mt-3 text-gray-800">
            Create Your Account
          </h2>
          <p className="text-sm text-gray-500">
            Join as a Student or a Tutor to get started.
          </p>
        </div>

        {/* Registration Form Area (Using a standard <form> tag) */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10 ">
          <div className="space-y-4">
            {/* role */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">
                  Select Role *
                </span>
              </label>
              <div className="flex space-x-4 mb-6">
                {/* Student */}
                <label className="flex-1 cursor-pointer">
                  <input
                    {...register('role')}
                    type="radio"
                    name="role"
                    value="student"
                    defaultChecked
                    className="hidden peer"
                  />
                  <div className="flex items-center justify-center space-x-2 btn btn-outline btn-primary peer-checked:bg-primary peer-checked:text-white transition-all">
                    <FaUserGraduate />
                    <span>Student</span>
                  </div>
                </label>

                {/* Tutor */}
                <label className="flex-1 cursor-pointer">
                  <input
                    {...register('role')}
                    type="radio"
                    name="role"
                    value="tutor"
                    className="hidden peer"
                  />
                  <div className="flex items-center justify-center space-x-2 btn btn-outline btn-primary peer-checked:bg-primary peer-checked:text-white transition-all">
                    <FaChalkboardTeacher />
                    <span>Tutor</span>
                  </div>
                </label>
              </div>
            </div>
            ;{/* Name */}
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-3">
                <FaUser className="h-4 w-4 text-gray-400" />
                <input
                  {...register("name", {
                    required: "Name is required",
                    maxLength: {
                      value: 20,
                      message: "Name length highest 20 characters",
                    },
                  })}
                  type="text"
                  placeholder="Full Name"
                  className="grow"
                />
              </label>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Image */}
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M3 16.5l4.243-4.243a1.5 1.5 0 012.121 0L12 14.5m-9 2l4.243-4.243a1.5 1.5 0 012.121 0L12 14.5m0 0l1.636-1.636a1.5 1.5 0 012.121 0L21 16.5M12 14.5v-3m0 0a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                  />
                </svg>

                <input
                  {...register("image", {
                    required: "Image is required",
                  })}
                  type="file"
                  accept="image/*"
                  className="grow file:mr-3 file:border-0 file:bg-transparent file:text-gray-500 file:text-sm cursor-pointer"
                />
              </label>

              {errors.image && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-3">
                <FaEnvelope className="h-4 w-4 text-gray-400" />
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="grow"
                />
              </label>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-3">
                <FaLock className="h-4 w-4 text-gray-400" />
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password at least 6 characters or longer",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="grow"
                />
              </label>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Phone */}
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-3">
                <FaPhone className="h-4 w-4 text-gray-400" />
                <input
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Phone number must be exactly 11 digits",
                    },
                  })}
                  type="tel"
                  placeholder="Phone Number"
                  className="grow"
                />
              </label>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
          {/* 3. Submit Button */}
          <div className="form-control mt-8">
            <button
              type="submit"
              className="btn btn-primary text-lg font-semibold hover:shadow-lg transition-shadow"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin w-full mx-auto" />
              ) : (
                "Register Account"
              )}
            </button>
          </div>
          {/* 4. Social Login */}
          <div className="divider text-gray-500 my-6">OR</div>
          <SocialLogin></SocialLogin>
          {/* 5. Already have an account? */}
          <p className="text-center text-sm mt-6">
            Already have an account?
            <Link
              to="/login"
              className="text-primary font-semibold hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

// role
