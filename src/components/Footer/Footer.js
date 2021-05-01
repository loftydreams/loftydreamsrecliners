import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

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
              
            <li> <a href="/about"> About</a> </li>
                
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Testimonial</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer_p">Need help?</h4>
              <ul className="ul need-help-ul">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-condition">Terms and Condition</a>
                </li>
                <li>
                  <a href="/payment-security-policy">Payment and Security Policy</a>
                </li>
                <li>
                  <a href="#">Shipping and Delivery Policy</a>
                </li>
                <li>
                  <a href="/my-account">My Account</a>
                </li>
                <li>
                  <a href="/track-order">Track Your order</a>
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
              <div className="social-links">
                <a href="#">
                  <img src="Images/icons8-facebook-480.jpg" alt="facebook" />
                </a>
                <a href="#">
                  <img src="Images/icons8-instagram-512.jpg" alt="instagram" />
                </a>
                <a href="#">
                  <img src="Images/icons8-linkedin-512.jpg" alt="linkedin" />
                </a>
                <a href="#">
                  <img src="Images/icons8-twitter-400.jpg" alt="twitter" />{" "}
                </a>
                <a href="#">
                  <img src="Images/icons8-gmail-512.jpg" alt="gmail" />
                </a>
                <a href="#">
                  <img src="Images/icons8-pinterest-512.jpg" alt="pinterest" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
