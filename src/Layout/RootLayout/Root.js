import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../sharedPage/Footer/Footer";
import Navbar from "../../sharedPage/Navbar/Navbar";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <nav className="fixed top-[-20px] left-0 right-0 z-50">
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
