/** @format */

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import Contact from "../pages/Contact";
import ForgotPass from "../pages/ForgotPass";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import TicketDetails from "../pages/TicketDetails";
import TicketDetailsChampionLeague from "../pages/TicketDetailsChampionLeague";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/forgotpassword" element={<ForgotPass />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/ticketDetails" element={<TicketDetails />}></Route>
          <Route
            path="/ticketDetailsChampionLeague"
            element={<TicketDetailsChampionLeague />}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default Router;
