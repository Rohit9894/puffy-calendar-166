import { Routes, Route } from "react-router-dom";
import EmailAPI from "../Pages/EmailAPI";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login/Login";
import { Signup } from "../Pages/Login/Signup";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/emailApi" element={<EmailAPI/>} />
    </Routes>
  );
};
