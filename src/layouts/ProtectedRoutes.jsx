import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoutes = ({ children, mode }) => {
  const { authUser } = useContext(AuthContext);
  const pathName = useLocation();

  if (!authUser && mode === "auth") {
    return <Navigate to="/login" state={{ from: pathName }} replace />;
  }

  if (authUser && mode === "public") {
    return <Navigate to="/" state={{ from: pathName }} replace />;
  }

  return children;
};
