import { Routes, Route } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login/Login";



import { Signup } from "../Pages/Login/Signup";


import Price from "../Pricing/Price";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
     <Route path="/price" element={<Price/>}/>
     <Route path="/resources/blog" element={<Blog/>}/>
    </Routes>
  );
};
