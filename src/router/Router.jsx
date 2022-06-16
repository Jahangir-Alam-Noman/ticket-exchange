import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Home from "../pages/Home";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default Router;
