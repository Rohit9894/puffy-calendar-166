import { Routes, Route } from "react-router-dom";
import EmailAPI from "../Pages/EmailAPI";
import Blog from "../Pages/Blog/Blog";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login/Login";



import { Signup } from "../Pages/Login/Signup";


import Price from "../Pricing/Price";
import QA_Automation from "../Pages/QA_Automation";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/emailApi" element={<EmailAPI />}  />
      <Route path="/qaAutomation" element={<QA_Automation />}  />
    </Routes>
  );
};
