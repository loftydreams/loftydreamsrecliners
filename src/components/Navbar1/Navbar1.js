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
          </div>
          <div className="social-icons">
            <a href="" className="youtube social">
              <FontAwesomeIcon
                icon={faYoutube}
                size="1x"
                className="hov-icon"
              />
            </a>
            <a href="" className="youtube social">
              <FontAwesomeIcon
                icon={faFacebook}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a href="" className="youtube social">
              <FontAwesomeIcon
                icon={faTwitter}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a href="" className="youtube social">
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a href="" className="youtube social">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a href="" className="youtube social">
              <FontAwesomeIcon icon={faGoogle} size="1x" className="hov-icon" />
            </a>{" "}
            <a href="" className="youtube social">
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
