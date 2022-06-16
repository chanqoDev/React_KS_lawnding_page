import React from "react";
import About from "../home/about/About";
import Blog from "../home/blog/Blog";
import Branding from "../home/Branding";
import Home from "../home/homes/Home";
import Service from "../home/services/Service";
import WrapperOne from "../home/services/WrapperOne";
import Skills from "../home/Skills";
import Work from "../home/work/Work";
import Wrapper from "../home/Wrapper";
import { Pages } from "../pages/Pages";

const HomePages = () => {
  return (
    <>
      <Home />
      <Branding />
      <About />
      <Service />
      <Wrapper />
      <Skills />
      <WrapperOne />
      <Work />
      <Blog />
    </>
  );
};

export default HomePages;
