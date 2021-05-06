import React from "react";
import "./Navbar1.css";

import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGoogle,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <div className="navbar1-body">
        <div className="topbar-left">
          <div className="amazon-btn">
            <Button variant="contained" className="">
              Buy from amazon.in
            </Button>
          </div>

          <div className="topbar-icons">
            <HiOutlineLocationMarker className="icon" />
            <BiPhone className="icon" />
            <HiOutlineMail className="icon" />
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-span">
            <Link to="/about">
              <span> About</span>{" "}
            </Link>
            <span> Contact </span>
        <Link to ="/feedback"  > <span> Feedback </span>  </Link> 
          </div>
          <div className="social-icons">
            <a href="https://www.youtube.com/channel/UCWnQE20f8xJTeXGIfjeAdYg" className="youtube social">
              <FontAwesomeIcon
                icon={faYoutube}
                size="1x"
                className="hov-icon"
              />
            </a>
            <a href="https://www.facebook.com/lofty9716180374/" className="youtube social">
              <FontAwesomeIcon
                icon={faFacebook}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a href="https://twitter.com/sumitoj80401927" className="youtube social">
              <FontAwesomeIcon
                icon={faTwitter}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a href="https://www.instagram.com/loftydreams18" className="youtube social">
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a href="https://www.linkedin.com/in/sumit-ojha-064172160" className="youtube social">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a href="mailto:loftydreams18@gmail.com" className="youtube social">
              <FontAwesomeIcon icon={faGoogle} size="1x" className="hov-icon" />
            </a>{" "}
            <a href="https://in.pinterest.com/loftydreams18/" className="youtube social">
              <FontAwesomeIcon
                icon={faPinterest}
                size="1x"
                className="hov-icon"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="topbar-hr"></hr>
    </>
  );
};

export default Navbar1;
