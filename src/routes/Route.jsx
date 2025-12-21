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
import AdminReports from "../pages/Dashboard/Admin/AdminReports";
import TutorRoute from "./TutorRoute";
import AdminRoute from "./AdminRoute";
import DashboardHome from "../pages/Dashboard/CommonItems/DashboardHome";

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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashboardHome></DashboardHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <ProfileSettings />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/student/my-tuitions",
        element: (
          <PrivateRoute>
            <MyTuitions />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/student/post-tuition",
        element: (
          <PrivateRoute>
            <PostTuition />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/student/applied-tutors",
        element: (
          <PrivateRoute>
            <AppliedTutors />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/student/payments",
        element: (
          <PrivateRoute>
            <Payments />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/tutor/my-applications",
        element: (
          <PrivateRoute>
            <TutorRoute>
              <MyApplications></MyApplications>
            </TutorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/tutor/ongoing-tuitions",
        element: (
          <PrivateRoute>
            <TutorRoute>
              <OngoingTuitions />
            </TutorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/tutor/revenue-history",
        element: (
          <PrivateRoute>
            <TutorRoute>
              <RevenueHistory></RevenueHistory>
            </TutorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/user-management",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <UserManagement></UserManagement>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/tuition-management",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <TuitionManagement></TuitionManagement>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/reports",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminReports></AdminReports>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
