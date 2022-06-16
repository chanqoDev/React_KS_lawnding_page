import React from "react";
import About from "../home/about/About";
import Branding from "../home/Branding";
import Home from "../home/homes/Home";
import Service from "../home/services/Service";
import Wrapper from "../home/Wrapper";

const HomePages = () => {
  return (
    <>
      <Home />
      <Branding />
      <About />
      <Service />
      <Wrapper />
    </>
  );
};

export default HomePages;
