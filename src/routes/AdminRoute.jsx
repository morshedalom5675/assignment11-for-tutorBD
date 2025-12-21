import React from "react";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/LoadingSpinner";
import ForbiddenPage from "../components/ForbiddenPage";

const AdminRoute = ({ children }) => {
  const { role, isLoading } = useRole();
  if (isLoading) return <LoadingSpinner />;
  if (role === "admin") return children;
  return <ForbiddenPage />;
};

export default AdminRoute;
