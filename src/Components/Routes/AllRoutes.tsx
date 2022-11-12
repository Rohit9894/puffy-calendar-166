import { Routes, Route } from "react-router-dom";
import Api from "../Pages/Api/Api";
import Blog from "../Pages/Blog/Blog";
import { CaseStudies } from "../Pages/Case_Studies/CaseStudies";
import Help from "../Pages/Help/Help";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login/Login";
import { ForgotPassword } from "../Pages/Login/ForgotPassword";
import { Signup } from "../Pages/Login/Signup";
import QAAutomation from "../Pages/QAAutomation";
import Price from "../Pages/Pricing/Price";
import { DeleteAccount } from "../Pages/Login/DeleteAccount";
import { User } from "../Pages/Login/User";
import { UserManagement } from "../Pages/Dashboard/UserManagement";
import { AccountManagement } from "../Pages/Dashboard/AccountManagement";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import EmailAPI from "../Pages/EmailAPI";
import { Protected } from "../Context/Protected";
import Payment from "../Pages/Pricing/Payment";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/emailApi" element={<EmailAPI />} />
      <Route path="/qaAutomation" element={<QAAutomation />} />
      <Route path="/price" element={<Price />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/delete-account-confirmation" element={<DeleteAccount />} />
      <Route path="/user" element={<User />} />
      <Route path="/resources/blog" element={<Blog />} />
      <Route path="/resources/casestudies" element={<CaseStudies />} />
      <Route path="/resources/help" element={<Help />} />
      <Route path="resources/api" element={<Api />} />
      <Route path="/payement" element={<Payment/>}/>
      <Route
        path="/user-management"
        element={
          <Protected>
            <UserManagement />
          </Protected>
        }
      >
        <Route path="" element={<Dashboard />} />
        <Route path="account-management" element={<AccountManagement />} />
      </Route>
    </Routes>
  );
};
