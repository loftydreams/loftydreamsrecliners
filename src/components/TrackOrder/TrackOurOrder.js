import React from "react";
import "./trackourorder.css";

export default function TrackOurOrder() {
  return (
    <div className="trackourorder__main">
      <h1>Track Your Order</h1>
      <p>
        To track your order please enter your Order ID in the box below and
        press the "Track" button. This was given to you on your receipt and in
        the confirmation email you should have received.
      </p>
      <div className="order-div">
        <form className="order-form">
          <label className="order-form-label">Order ID:</label>
          <input
            className="orderid-input"
            placeholder=" Found in your order confirmation email."
          />

          <label className="order-form-label">Billing email: </label>
          <input
            placeholder="Email you used during checkout."
            className="orderemail-input"
          />

          <button className="order-btn">Track</button>
        </form>
      </div>
    </div>
  );
}
