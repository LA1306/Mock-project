import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

export default function ProtectedRoute() {
  let { user } = useAuthContext();
  let { pathname } = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={pathname} />;
  }
  return <Outlet />;
}
