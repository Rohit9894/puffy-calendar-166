import { Routes, Route } from "react-router-dom";
import EmailAPI from "../Pages/EmailAPI";
import Blog from "../Pages/Blog/Blog";
import { CaseStudies } from "../Pages/Case_Studies/CaseStudies";
import Help from "../Pages/Help/Help";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login/Login";
import { ForgotPassword } from "../Pages/Login/ForgotPassword";
import { Signup } from "../Pages/Login/Signup";
import Price from "../Pages/Pricing/Price";
import { DeleteAccount } from "../Pages/Login/DeleteAccount";
import { User } from "../Pages/Login/User";
import { Signup } from "../Pages/Login/Signup";
import Price from "../Pricing/Price";
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
       <Route path="/price" element={<Price />} />
      <Route path="/resources/blog" element={<Blog />} />
      <Route path="/resources/casestudies" element={<CaseStudies />} />
      <Route path="/resources/help" element={<Help />} />

    </Routes>
  );
};
