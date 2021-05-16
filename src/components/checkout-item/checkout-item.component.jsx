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
    <div className="checkout-item">
      <div className="checkout-image">
        <img src={imageUrl} alt="product img" />
      </div>

      <div className="checkout-description">
        <h6 className="checkout-heading">{name}</h6>

        <div className="checkout-mid">
          <div className="checkout-quantity">
            <AiOutlineMinusCircle
              className="qt-icon"
              onClick={() => removeItem(cartItem)}
            />
            <span>{quantity}</span>
            <AiOutlinePlusCircle
              className="qt-icon"
              onClick={() => addItem(cartItem)}
            />
          </div>
          <span onClick={() => clearItem(cartItem)}>Remove Item</span>
        </div>

        <div className="checkout-price">
          <span className="subtotal"> Price: ₹{price}</span>
          <span className="subtotal"> Sub total: ₹{price * quantity}</span>
        </div>
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
