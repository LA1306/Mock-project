import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../App/Context";

export default function ProtectedRoute() {
  let { user } = useAppContext();
  let { pathname } = useLocation();
  //console.log('Route through ProtectedRoute');

  if (!user) {
    return <Navigate to="/login" replace state={pathname} />;
  }
  return <Outlet />;
}
