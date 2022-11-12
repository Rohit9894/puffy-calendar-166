import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";

export const Protected = ({ children }) => {
  const { user } = UserAuth();
  if (user) return children;
  return <Navigate to="/login" />;
};
