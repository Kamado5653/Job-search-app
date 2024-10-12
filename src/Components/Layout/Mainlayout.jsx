import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar.jsx";

const Mainlayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Mainlayout;
