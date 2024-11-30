import React from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};
