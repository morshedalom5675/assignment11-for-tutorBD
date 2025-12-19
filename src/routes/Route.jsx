import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import LoadingSpinner from "../components/LoadingSpinner";
import Tuitions from "../pages/Tuitions/Tuitions";
import Tutors from "../pages/Tutors/Tutors";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import Home from "../pages/Home/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import ProfileSettings from "../pages/Dashboard/CommonItems/ProfileSettings";
import MyTuitions from "../pages/Dashboard/StudentsRole/MyTuitions";
import PostTuition from "../pages/Dashboard/StudentsRole/PostTuitions";
import AppliedTutors from "../pages/Dashboard/StudentsRole/AppliedTutors";
import Payments from "../pages/Dashboard/StudentsRole/Payments";
import TuitionDetails from "../components/Home/TuitionDetails";
import PrivateRoute from "./PrivateRoute";
import SuccessPayment from "../pages/Payment/SuccessPayment";
import MyApplications from "../pages/Dashboard/Tutor/MyApplications";
import OngoingTuitions from "../pages/Dashboard/Tutor/OngoingTuitions";
import RevenueHistory from "../pages/Dashboard/Tutor/RevenueHistory";
import UserManagement from "../pages/Dashboard/Admin/UserManagement";
import TuitionManagement from "../pages/Dashboard/Admin/TuitionManagement";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "tuitions",
        Component: Tuitions,
      },
      {
        path: "/tuitionDetails/:id",
        element: (
          <PrivateRoute>
            <TuitionDetails></TuitionDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "success-url",
        Component: SuccessPayment,
      },
      {
        path: "tutors",
        Component: Tutors,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contacts,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "/dashboard/profile",
        Component: ProfileSettings,
      },
      {
        path: "/dashboard/student/my-tuitions",
        Component: MyTuitions,
      },
      {
        path: "/dashboard/student/post-tuition",
        Component: PostTuition,
      },
      {
        path: "/dashboard/student/applied-tutors",
        Component: AppliedTutors,
      },
      {
        path: "/dashboard/student/payments",
        Component: Payments,
      },
      {
        path: "/dashboard/tutor/my-applications",
        Component: MyApplications,
      },
      {
        path: "/dashboard/tutor/ongoing-tuitions",
        Component: OngoingTuitions,
      },
      {
        path: "/dashboard/tutor/revenue-history",
        Component: RevenueHistory,
      },
      {
        path: "/dashboard/admin/user-management",
        Component: UserManagement,
      },
      {
        path: "/dashboard/admin/tuition-management",
        Component: TuitionManagement,
      },
    ],
  },
]);

export default router;
