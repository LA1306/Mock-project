import { BrowserRouter, Routes, Route } from "react-router-dom"
import ContextProvider from "../Auth/AuthContext"
import ProtectedRoute from "../Auth/ProtectedRoute"
import Home from "../Home"
import RoomSearch from "../RoomSearch"
import RoomPage from "../Room"
import Host from "../Host"
import Login from "../Auth/Login"
import NotFound from "./NotFound"
import CreateRoom from "../Host/CreateRoom"
import Listing from "../Host/Listing"
import Reservation from "../Host/Reservation"
import Register from "../Auth/Register"
import Profile from "../Auth/Profile"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<RoomSearch />} />
          <Route path="room/:id" element={<RoomPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* <Route element={<ProtectedRoute />}> */}
            <Route path="users/:id" element={<Profile />} />
            <Route path="host" element={<Host />}>
              <Route index element={<Listing />} />
              <Route path="reservation" element={<Reservation />} />
              <Route path="create" element={<CreateRoom />} />
            </Route>
          {/* </Route> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}
