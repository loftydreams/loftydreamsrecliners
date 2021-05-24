import React from "react";
import "./contactus.css";
import  Contactusform from "./Contactusform"

export default function Contactus() {
  return (
    <div>
      <div className="aboutus__top">


        <div className="aboutustop__first">
          <img
            src="https://i.pinimg.com/originals/28/92/63/28926332d944be8999dc628ada39e4f7.jpg"
            alt="contact-banner"
          ></img>
        </div>
        <div className="aboutustop__second">
          <div className="top-first">
            <img src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/paymentPolicy%2Fcontact-page-for-flatsome-wordpress-theme-pointed-icon-phone-400x400.png?alt=media&token=9b54f0d2-3f06-449a-be76-449b9fa80e66" alt=""></img>
            <h1> Talk to sales </h1>
            <p>
              {" "}
              Interested in our hosting? Just pick up the phone and call us.
            </p>
            <button className="contact-btn"><a
            className="__contactus_a"
            href="tel:+91 9899027251"
            target="_blank"
            rel="noreferrer"
            
            >09899027251</a></button>
            <button className="contact-btn">
              <a className="__contactus_a"
               href="tel:+91 9310484130"
               target="_blank"
               rel="noreferrer"
              
              >
              
              
              09310484130
              </a>
              </button>
          </div>
          <div className="top-second">
            <img src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/paymentPolicy%2Fcontact-page-for-flatsome-wordpress-theme-pointed-icon-chat-400x400.png?alt=media&token=2c5e66b0-2ed9-49c1-825b-9222a8273c93" alt=""></img>
            <h1> Contact support</h1>
            <p>
              {" "}
              Sometimes you need a little help. Don’t worry, We’re here for you.
            </p>
            <button className="contact-btn">
              <a className="__contactus_a"
                href="mailto:loftydreams18@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                CONTACT SUPPORT

              </a>
              </button>
          </div>
        </div>
      </div>
      <div className="contact-form">
          <Contactusform></Contactusform>
      </div>
      <div>
          
      </div>
    </div>
  );
}
