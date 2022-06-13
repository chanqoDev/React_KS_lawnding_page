import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
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
                <SearchOutlinedIcon />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
