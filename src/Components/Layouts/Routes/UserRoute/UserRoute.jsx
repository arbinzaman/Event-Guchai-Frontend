import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../../Api/Context/AuthProvider";
import useUserRole from "../../../../Hooks/UseUserRole";
import Loader from "../../../Shared/Loader/Loader";

const UserRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { roles, isLoading: isRolesLoading } = useUserRole(user?.email);
  const location = useLocation();

  if (loading || isRolesLoading) {
    return <Loader />;
  }

  if (user && roles === 'user') {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default UserRoute;
