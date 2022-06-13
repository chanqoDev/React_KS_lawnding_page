import React from "react";
import { useState } from "react";

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
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
