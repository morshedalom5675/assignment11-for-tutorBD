import React from "react";
import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (!user) {
    return (
      <Navigate state={location.pathname} replace="true" to="/login"></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
