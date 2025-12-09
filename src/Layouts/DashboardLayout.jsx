import React from 'react';
import { NavLink, Outlet } from 'react-router';
import { FaHome, FaSignOutAlt, FaUser, FaChalkboardTeacher, FaClipboardList, FaUsers, FaTasks, FaChartLine, FaWallet } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io'; // Post New Tuition
import { MdOutlineHistory, MdOutlinePendingActions } from 'react-icons/md'; // Payments, Applications
import { LuBookOpen } from 'react-icons/lu'; // My Tuitions / Ongoing

// This component can be used in your DashboardLayout.jsx file.

const DashboardLayout = () => {
    
    // --- 1. NAVIGATION LINK DATA ---
    const dashboardNavItems = [
        // --- COMMON LINKS ---
        { title: "Home", path: "/", icon: <FaHome /> },
        { title: "Profile Settings", path: "/dashboard/profile", icon: <FaUser /> },
        
        // --- STUDENT DASHBOARD LINKS ---
        { title: "My Tuitions", path: "/dashboard/student/my-tuitions", icon: <LuBookOpen /> },
        { title: "Post New Tuition", path: "/dashboard/student/post-tuition", icon: <IoMdAddCircle /> },
        { title: "Applied Tutors", path: "/dashboard/student/applied-tutors", icon: <FaChalkboardTeacher /> },
        { title: "Payments", path: "/dashboard/student/payments", icon: <FaWallet /> },

        // --- TUTOR DASHBOARD LINKS ---
        { title: "My Applications", path: "/dashboard/tutor/my-applications", icon: <MdOutlinePendingActions /> },
        { title: "Ongoing Tuitions", path: "/dashboard/tutor/ongoing-tuitions", icon: <FaTasks /> },
        { title: "Revenue History", path: "/dashboard/tutor/revenue-history", icon: <MdOutlineHistory /> },

        // --- ADMIN DASHBOARD LINKS ---
        { title: "User Management", path: "/dashboard/admin/user-management", icon: <FaUsers /> },
        { title: "Tuition Management", path: "/dashboard/admin/tuition-management", icon: <FaClipboardList /> },
        { title: "Reports & Analytics", path: "/dashboard/admin/reports", icon: <FaChartLine /> },
    ];

    // --- 2. SIDEBAR MENU ITEM RENDERING ---
    const sidebarContent = (
        <ul className="menu p-4 w-64 min-h-full text-base-content bg-base-100">
            {/* Dashboard Title */}
            <h2 className="text-2xl font-extrabold text-primary mb-6 border-b pb-2">
                Dashboard
            </h2>

            {/* Navigation Links */}
            {dashboardNavItems.map((item) => (
                <li key={item.path} className="mb-1">
                    <NavLink
                        to={item.path}
                        className={({ isActive }) => 
                            isActive 
                            ? "bg-primary text-white font-semibold hover:bg-primary-focus transition duration-200"
                            : "text-gray-700 hover:bg-gray-200 transition duration-200"
                        }
                    >
                        {item.icon}
                        {item.title}
                    </NavLink>
                </li>
            ))}

            {/* Separator */}
            <div className="divider my-4"></div> 
            
            {/* Logout Button (Design only) */}
            <li>
                {/* Add click event logic here */}
                <a className="text-error font-semibold hover:bg-red-100 transition duration-200">
                    <FaSignOutAlt />
                    Logout
                </a>
            </li>
        </ul>
    );

    // --- 3. MAIN LAYOUT (DaisyUI Drawer) ---
    return (
        <div className="drawer lg:drawer-open">
            {/* Drawer Checkbox (for mobile menu toggle) */}
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            
            {/* Page Content Area */}
            <div className="drawer-content flex flex-col items-center p-4 bg-gray-50 min-h-screen">
                
                {/* Header (Button to open sidebar on mobile) */}
                <div className="w-full flex justify-start items-center lg:hidden mb-4">
                    <label 
                        htmlFor="my-drawer-2" 
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open Menu
                    </label>
                </div>
                
                {/* Child Routes (The actual dashboard page content will render here) */}
                <main className="w-full max-w-7xl mx-auto">
                    <Outlet></Outlet>
                </main>
            </div>
            
            {/* Sidebar Area */}
            <div className="drawer-side z-50"> 
                <label 
                    htmlFor="my-drawer-2" 
                    aria-label="close sidebar" 
                    className="drawer-overlay"
                ></label>
                {/* Sidebar Content */}
                {sidebarContent}
            </div>
        </div>
    );
};

export default DashboardLayout;