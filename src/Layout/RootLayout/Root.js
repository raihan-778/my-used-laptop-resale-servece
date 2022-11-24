import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../sharedPage/Footer/Footer";
import Navbar from "../../sharedPage/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
