import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import React from "react";
import Blogdata from "./BlogData";
const Blog = () => {
  return (
    <>
      <section className="blog services">
        <div className="container topMargin">
          <div className="heading">
            <h3>Latest Blog</h3>
            <h1> Read Instpirtional story every week </h1>
          </div>

          <div className="contain grid topMargin">
            {Blogdata.map((val) => {
              return (
                <div className="box">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <span>{val.date}</span>
                    <h2>{val.title}</h2>
                    <a href="/">
                      Read More
                      <KeyboardDoubleArrowRightIcon className="icon" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
