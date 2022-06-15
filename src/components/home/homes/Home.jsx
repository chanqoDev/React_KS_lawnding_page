import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img
                src="./assets/professional.png"
                alt="this is man shredding trees down"
              />
            </div>
          </div>
          <div className="right topMargin">
            <h1>
              Located <br />
              in Wichita, KS{" "}
            </h1>
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
            <p>
              lorem ;alsdfpoawienpoaiwf;lkasd;f jas;ldkfj
              a;sldkjfa;lskdjf;laksjd;f lkajsdlcmaslkdmf['alksdfjg;lksd
              jfg;kdfjhglksdhjfgklsdfgklsdhflgksdklfg sdf sdflkgjhs dlfkgjhs
              dlfkghslkdfjhglksdjfhglksjdhfglkjshd f
            </p>
            <button className="primary-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
