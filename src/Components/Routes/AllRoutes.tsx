import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login/Login";
import { ForgotPassword } from "../Pages/Login/ForgotPassword";
import { Signup } from "../Pages/Login/Signup";
import Price from "../Pages/Pricing/Price";
import { DeleteAccount } from "../Pages/Login/DeleteAccount";
import { User } from "../Pages/Login/User";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/price" element={<Price />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/delete-account-confirmation" element={<DeleteAccount />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};
