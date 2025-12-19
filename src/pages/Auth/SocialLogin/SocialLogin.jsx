import React from "react";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";
  const handleGoogleLogin = async () => {
    try {
      await googleLogin()
        .then((res) => {
          console.log(res.user);
          // create user to data base
          const userInfo = {
            email: res.user.email,
            name: res.user.displayName,
            image: res.user.photoURL,
            phone: "",
            role: "student",
          };
          axios
            .post(`${import.meta.env.VITE_API_URL}/users`, userInfo)
            .then((res) => {
              console.log("user data base a exist", res.data);
            });
          navigate(from, { replace: true });
        })
        .catch((err) => console.log(err));

      navigate(from, { replace: true });
      toast.success("Google Login success");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="form-control">
      <button
        onClick={handleGoogleLogin}
        type="button"
        className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700"
      >
        {/* Google Icon Placeholder */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.343c-1.777,3.136-5.07,5.361-9.343,5.361c-6.844,0-12.406-5.562-12.406-12.406c0-6.844,5.562-12.406,12.406-12.406c3.21,0,6.18,1.298,8.555,3.486l5.775-5.775C34.62,6.502,29.62,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20c11.046,0,19.046-7.859,20-17.917V20.083z"
          />
        </svg>
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
