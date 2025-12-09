import React from "react";
import { NavLink, Link } from "react-router";
import { IoIosSchool } from "react-icons/io";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { TbFidgetSpinner } from "react-icons/tb";

const Navbar = () => {
  const { user, Logout, loading } = useAuth() || {};
  const userPhoto = user?.photoURL || "https://i.ibb.co/Zm0mF7R/user.png";

  const userLogout = () => {
    try {
      Logout();
      toast.success("Logout success");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  // Main Navigation Links
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/tuitions">Tuitions</NavLink>
      </li>
      <li>
        <NavLink to="/tutors">Tutors</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* LEFT */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold flex items-center gap-2 text-primary"
        >
          <IoIosSchool className="h-7 w-7" />
          <span className="hidden sm:inline">eTuitionBd</span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">{navLinks}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end space-x-2">
        {user ? (
          // ⭐ USER LOGGED IN
          <div className="flex items-center space-x-3">
            {/* Dashboard Button (Desktop Only) */}
            <Link
              to="/dashboard"
              className="btn btn-sm btn-primary btn-outline hidden md:flex transition-all duration-300"
            >
              Dashboard
            </Link>

            {/* Avatar Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-2 border-primary p-0 
                  hover:shadow-xl hover:border-primary/80 transition-all duration-300"
              >
                <div className="w-10 rounded-full overflow-hidden">
                  <img src={userPhoto} alt="User" />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="
                  menu menu-sm dropdown-content 
                  mt-3 w-56 p-3 z-50
                  rounded-xl shadow-2xl border border-base-300 
                  bg-gradient-to-br from-base-100 to-base-200
                  backdrop-blur-sm
                "
              >
                {/* Header */}
                <li className="menu-title px-2 py-2 rounded-md bg-primary/10 text-primary font-bold text-base mb-2">
                  <span>Hi, {user?.displayName || "User"}! 👋</span>
                </li>

                {/* Dashboard */}
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:bg-secondary/10 rounded-md transition-all"
                  >
                    Dashboard
                  </Link>
                </li>

                {/* Profile Settings */}
                <li>
                  <Link
                    to="/profile-settings"
                    className="hover:bg-primary/10 rounded-md transition-all"
                  >
                    Profile Settings
                  </Link>
                </li>

                {/* Logout */}
                <li className="border-t mt-2 pt-2">
                  <button
                    onClick={userLogout}
                    className="btn btn-primary btn-sm w-full rounded-md text-white font-medium hover:brightness-110 transition-all duration-200"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : loading ? (
          <TbFidgetSpinner className="animate-spin text-xl text-primary mr-10" />
        ) : (
          // ⭐ NO USER → Login + Register Buttons
          <div className="flex items-center space-x-2">
            <Link
              to="/login"
              className="btn btn-sm btn-ghost hidden lg:flex hover:bg-primary/10 transition-all"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-sm btn-primary hover:shadow-md transition-all"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
