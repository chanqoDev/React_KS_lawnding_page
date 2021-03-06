import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WorkIcon from "@mui/icons-material/Work";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 180);
  });
  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <img src="assets/logo.png" alt="my brand" />
          </div>
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/pages">Pages</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li className="icon">
                <SearchOutlinedIcon className="HeaderIcon" />
                <WorkIcon className="HeaderIcon" />
                <GridViewIcon className="HeaderIcon" />
              </li>
            </ul>
            <button
              className="navbar-items-icon"
              onClick={() => setSidebar(!sidebar)}
            >
              {sidebar ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
