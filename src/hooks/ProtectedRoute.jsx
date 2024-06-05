import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authDetails = JSON.parse(localStorage.getItem("authDetails"));

  return authDetails ? children : <Navigate to="/login" />;
};
export default ProtectedRoute;
