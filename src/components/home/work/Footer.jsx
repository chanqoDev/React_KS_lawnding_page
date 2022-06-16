import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid">
          <div className="box">
            <img src="./assets/logo.png" alt="" width="150px" height="50px" />
            <p>
              Lorem afhinfo asn,n lfklskdklalks lasda iew alsc aoie awoieoia
              esonidf aosdnfaisd foais ndfoias ndf
            </p>
            <div className="socialIcon">
              <i className="facebook">
                <FacebookOutlinedIcon />
              </i>
              <i className="instagram">
                <InstagramIcon />
              </i>
              <i className="Youtube">
                <YouTubeIcon />
              </i>
              <i className="TwitterIcon">
                <TwitterIcon />
              </i>
            </div>
          </div>
          <div className="box">
            <h2>Quick links</h2>
            <ul>
              <li>Home</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contatct</li>
              <li>FAQ's</li>
            </ul>
          </div>
          <div className="box">
            <h2>Recent Post</h2>
            <div className="text">
              <p>
                Lorem alkfoiwenoiwn foainsf aoisdfioa sdfoiasd nfoaisdn
                foasifofiasdoifn osidnf aosin frem alkfoiwenoiwn foainsf
                aoisdfioa sdfoiasd nfoaisdn foasifofiasdoifn osidnf aosin f
              </p>
              <span>28 feb 2022</span>
            </div>
            <div className="text">
              <p>
                Lorem alkfoiwenoiwn foainsf aoisdfioa sdfoiasd nfoaisdn
                foasifofiasdoifn osidnf aosin frem alkfoiwenoiwn foainsf
                aoisdfioa sdfoiasd nfoaisdn foasifofiasdoifn osidnf aosin f
              </p>
              <span>28 feb 2022</span>
            </div>
          </div>
          <div className="box">
            <h2> Get in touch </h2>
            <p>
              Lorem alkfoiwenoiwn foainsf aoisdfioa sdfoiasd nfoaisdn
              foasifofiasdoifn osidnf aosin
            </p>
            <div className="icon">
              <i className="location-dot">
                <LocationOnIcon />
              </i>
              <label htmlFor="">
                Location: 27 Division ST, New YORK, NY 10002, USA
              </label>
            </div>
            <div className="icon">
              <i className="phone">
                <PhoneIcon />
              </i>
              <label htmlFor="">Phone: (949)829-3377</label>
            </div>
            <div className="icon">
              <i className="email">
                <EmailIcon />
              </i>
              <label htmlFor="/">Email:support@gmail.com</label>
            </div>
          </div>
        </div>
        <div className="legal container">
          <p> Copyrigth @2022. All rights reserversd</p>
          <label htmlFor="">GreenRabbitLawncare</label>
        </div>
      </footer>
    </>
  );
};

export default Footer;
