import React from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import PageNotFound from "./pages/PageNotFound";
import ForgotPassword from "./pages/ForgotPassword";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="about" element={<About />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="pageNotfound" element={<PageNotFound />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default App;
