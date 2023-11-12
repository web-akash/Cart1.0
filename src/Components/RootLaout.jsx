import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SpecialCase from "./SpecialCase";

const RootLaout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SpecialCase />
    </>
  );
};

export default RootLaout;
