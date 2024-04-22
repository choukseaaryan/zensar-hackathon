import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../views/Menu";
import Login from "../views/Login";
import Signup from "../views/Signup";
import ProtectedRoute from "./ProtectedRoute";


const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Menu />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;