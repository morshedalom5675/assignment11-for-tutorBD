import React from "react";
import { NavLink, Link } from "react-router";
import { IoIosSchool } from "react-icons/io";
import { House, Users, Phone, Info, NotebookPen } from "lucide-react";

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
      toast.error(error.message);
    }
  };

  // Main Navigation Links
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="nav-link flex items-center gap-2 px-3 py-2">
          <House className="w-4 h-4 text-primary" />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/tuitions"
          className="nav-link flex items-center gap-2 px-3 py-2"
        >
          <NotebookPen className="w-4 h-4 text-primary" />
          Tuitions
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/tutors"
          className="nav-link flex items-center gap-2 px-3 py-2"
        >
          <Users className="w-4 h-4 text-primary" />
          Tutors
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className="nav-link flex items-center gap-2 px-3 py-2"
        >
          <Info className="w-4 h-4 text-primary" />
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className="nav-link flex items-center gap-2 px-3 py-2"
        >
          <Phone className="w-4 h-4 text-primary" />
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 px-4">
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
        <ul className="menu menu-horizontal px-1 font-medium space-x-1">
          {navLinks}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end space-x-2">
        {user ? (
          <div className="flex items-center space-x-3">
            <Link
              to="/dashboard"
              className="btn btn-sm btn-primary btn-outline hidden md:flex transition-all duration-300"
            >
              Dashboard
            </Link>

            {/* Avatar */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-2 border-primary p-0 hover:shadow-xl transition-all"
              >
                <div className="w-10 rounded-full overflow-hidden">
                  <img src={userPhoto} alt="User" />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-56 p-3 shadow-2xl rounded-xl bg-base-100 border"
              >
                <li className="menu-title bg-primary/10 rounded-md p-2 text-primary font-bold">
                  Hi, {user?.displayName || "User"} 👋
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/profile-settings">Profile Settings</Link>
                </li>
                <li className="border-t mt-2 pt-2">
                  <button
                    onClick={userLogout}
                    className="btn btn-primary btn-sm w-full"
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
          <div className="flex items-center space-x-2">
            <Link to="/login" className="btn btn-sm btn-ghost hidden lg:flex">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm btn-primary">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
