import React from "react";

import "./footer.css";



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

export const Footer = (props) => {
  return (
    <div className="footer__body">
      <footer className="footer">
        <div className="container__footer">
          <div className="row__footer">
            <div className="footer-col">
              <img
                className="footer__logo"
                src="Images/loftyLogo.jpg"
                alt="loftyLogo"
              />
              <p className="copy">
                Copyright 2021 © Lofty Dreams | All Rights Reverved.
              </p>

              <ul>
                <li>
                  {" "}
                  <Link to="/about"> About</Link>{" "}
                </li>

                <li>
                  <Link to="/contactus">Contact</Link>
                </li>
                <li>
                  <Link to="/#">Blog</Link>
                </li>
                <li>
             <Link to="/testimonial">Testimonial</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer_p">Need help?</h4>
              <ul className="ul need-help-ul">
                <li>
                  <Link to="/#">FAQ</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-condition">Terms and Condition</Link>
                </li>
                <li>
                  <Link to="/payment-security-policy"> 
                    Payment and Security Policy
                  </Link>
                </li>
                <li>
                  <Link to="/shipping-policy">Shipping and Delivery Policy</Link>
                </li>
                <li>
                  <Link  to="/my-account">My Account</Link>
                </li>
                <li>
                  <Link to="/track-order">Track Your order</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer_p need-help-ul">Payment Options</h4>
              <ul>
                <li>
                  <img
                    className="payment__image"
                    src="Images/new_payment-image.jpg"
                    alt="paymentImage"
                  />{" "}
                </li>
                <li>
                  <p className="footer_p">
                    Accept Almost All Payment Modes Like:- UPI, Bharat QR,
                    Credit Card, Debit Card, 50+ Inter-Net Banking, Mobile
                    Wallets
                  </p>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer_p">Cities We Deliver To</h4>
              <div>
                <p className="city__p">
                  Delhi Haryana , Uttar Pradesh , Punjab , Rajasthan , Bihar ,
                  Kerala , Karnataka , Maharashtra , Gujarat , Madhya Pradesh ,
                  Jammu and Kashmir , Telangana , Andhra Pradesh West Bangal ,
                  Odisha , Tamil Nadu , Goa , Uttarakhand , Chandigarh , Chennai
                  , Puducherry , Himachal Pradesh , Jharkhand , Chhattisgarh &
                  Across India
                </p>
              </div>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-icons">
            <a href="https://www.youtube.com/channel/UCWnQE20f8xJTeXGIfjeAdYg" target="_blank" className="youtube social" rel="noreferrer">
              <FontAwesomeIcon
                icon={faYoutube}
                size="1x"
                className="hov-icon"
              />
            </a>
            <a href="https://www.facebook.com/lofty9716180374/" target="_blank" className="youtube social" rel="noreferrer">
              <FontAwesomeIcon
                icon={faFacebook}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a href="https://twitter.com/sumitoj80401927" target="_blank" className="youtube social" rel="noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a href="https://www.instagram.com/loftydreams18" target="_blank"  className="youtube social" rel="noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a href="https://www.linkedin.com/in/sumit-ojha-064172160" target="_blank" className="youtube social" rel="noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a href="mailto:loftydreams18@gmail.com" target="_blank" className="youtube social" rel="noreferrer">
              <FontAwesomeIcon icon={faGoogle} size="1x" className="hov-icon" />
            </a>{" "}
            <a href="https://in.pinterest.com/loftydreams18/" target="_blank" className="youtube social" rel="noreferrer">
              <FontAwesomeIcon
                icon={faPinterest}
                size="1x"
                className="hov-icon"
              />
            </a>
          </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
