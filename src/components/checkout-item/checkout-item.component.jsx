import React from "react";
import { connect } from "react-redux";
import { useStyles } from "./checkout-item.styles";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const classes = useStyles();
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row">
          <img src={imageUrl} alt="item" className={classes.productImg} />
        </TableCell>
        <TableCell align="right">{name}</TableCell>
        <TableCell align="right">₹{price}</TableCell>
        <TableCell align="right">
          <span className={classes.quantity}>
            <div onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span>{quantity}</span>
            <div onClick={() => addItem(cartItem)}>&#10095;</div>
          </span>
        </TableCell>
        <TableCell align="right">₹{price * quantity}</TableCell>
        <TableCell align="right">
          <span className={classes.remove} onClick={() => clearItem(cartItem)}>
            &#10005;
          </span>
        </TableCell>
      </TableRow>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
