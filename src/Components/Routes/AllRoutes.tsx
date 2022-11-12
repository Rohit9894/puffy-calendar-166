import { Routes, Route } from "react-router-dom";
import Api from "../Pages/Api/Api";
import Blog from "../Pages/Blog/Blog";
import { CaseStudies } from "../Pages/Case_Studies/CaseStudies";
import Help from "../Pages/Help/Help";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login/Login";
import { ForgotPassword } from "../Pages/Login/ForgotPassword";
import { Signup } from "../Pages/Login/Signup";
import { User } from "../Pages/Login/User";
import Price from "../Pricing/Price";
import QAAutomation from "../Pages/QAAutomation";
import HtmlCheck from "../Pages/HtmlCheck";
import FakeServer from "../Pages/FakeServer";
import MailTrapApi from "../Pages/MailTrapApi";
import EmailAPI from "../Pages/EmailAPI";
import { Protected } from "../Context/Protected";
import Payment from "../Pages/Pricing/Payment";
import { UserHome } from "../Pages/Dashboard/Pages/UserHome";
import { LoginHome } from "../Pages/Dashboard/Pages/Home/LoginHome";
import { AccountSetting } from "../Pages/Dashboard/Pages/AccountSetting/AccountSetting";
import { DeleteAccount } from "../Pages/Dashboard/Pages/AccountSetting/DeleteAccount";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/emailApi" element={<EmailAPI />} />
      <Route path="/qaAutomation" element={<QAAutomation />} />
      <Route path="/htmlcheck" element={<HtmlCheck />} />
      <Route path="/fakeserver" element={<FakeServer />} />
      <Route path="/mailtrapApi" element={<MailTrapApi />} />
      <Route path="/price" element={<Price />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/user" element={<User />} />
      <Route path="/resources/blog" element={<Blog />} />
      <Route path="/resources/casestudies" element={<CaseStudies />} />
      <Route path="/resources/help" element={<Help />} />
      <Route path="resources/api" element={<Api />} />
      <Route path="/payement" element={<Payment />} />
      <Route
        path="/home"
        element={
          <Protected>
            <UserHome />
          </Protected>
        }
      >
        <Route path="" element={<LoginHome />} />
        <Route path="account-settings" element={<AccountSetting />} />
        <Route path="delete-account-confirmation" element={<DeleteAccount />} />
      </Route>
    </Routes>
  );
};
