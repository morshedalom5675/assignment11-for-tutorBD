import React from "react";
import {
  Link,
  Navigate,
  replace,
  useLocation,
  useNavigate,
} from "react-router";
import { IoIosSchool } from "react-icons/io";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../components/LoadingSpinner";
import SocialLogin from "../SocialLogin/Sociallogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, loading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user) {
    <Navigate to={from} replace={true}></Navigate>;
  }

  const handleLogin = async (data) => {
    const { email, password } = data;
    try {
      const data = await signIn(email, password);
      navigate(from, { replace: true });
      toast.success("Login Successful");
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    // Full Page Container with Background and Centering
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
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
            Welcome Back!
          </h2>
          <p className="text-sm text-gray-500">
            Sign in to manage your tuitions.
          </p>
        </div>

        {/* Login Form Area */}
        <form onSubmit={handleSubmit(handleLogin)} className="p-6 md:p-8">
          {/* 1. Form Inputs */}
          <div className="space-y-4">
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

            {/* Forgot Password Link (Optional but good practice) */}
            <div className="text-right text-sm">
              <Link
                to="/forgot-password"
                className="text-secondary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* 2. Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary text-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Login
            </button>
          </div>

          {/* 3. Social Login (Required Feature) */}
          <div className="divider text-gray-500 my-6">OR</div>
          <SocialLogin></SocialLogin>

          {/* 4. Don't have an account? */}
          <p className="text-center text-sm mt-6">
            Don't have an account?
            <Link
              to="/register"
              className="text-primary font-semibold hover:underline ml-1"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
