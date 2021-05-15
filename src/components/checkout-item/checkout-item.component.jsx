import React from "react";
import { connect } from "react-redux";

import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.css";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <div className="checkout-wrapper">
      <div className="checkout-image">
        <img src={imageUrl} alt="product img" />
      </div>

      <div className="checkout-description">
        <h7>{name}</h7>
        <br />
        <span onClick={() => clearItem(cartItem)} className="remove-item">Remove Item</span>
        <br />
        <div className="quantity-checkout">
        <AiOutlineMinusCircle
          className="qt-icon"
          onClick={() => removeItem(cartItem)}
        />
        <span className="quantity-text">      {quantity} </span>
        <AiOutlinePlusCircle
          className="qt-icon"
          onClick={() => addItem(cartItem)}
        />
      </div>
      </div>

      <div className="checkout-price">
      Price: <span className="subtotal">  ₹{price.toFixed(2)}</span> <br></br>
        Sub-total: <span className="subtotal"> ₹{(price * quantity).toFixed(2)}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
