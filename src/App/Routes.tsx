import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "../Auth/AuthContext";
import ProtectedRoute from "../Auth/ProtectedRoute";
import Home from "../Home";
import RoomSearch from "../RoomSearch";
import RoomPage from "../Room";
import Host from "../Host";
import Login from "../Auth/Login";
import NotFound from "./NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<RoomSearch />} />
          <Route path="room/:id" element={<RoomPage />} />
          <Route path="login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="host" element={<Host />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}
