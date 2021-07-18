import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useStyles } from "./checkout.styles";

import CheckoutItem from "../checkout-item/checkout-item.component";
import CheckoutTotal from "./checkout-total.component";
import Button from "@material-ui/core/Button";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import {
  clearCart,
  clearItemFromCart,
  addItem,
} from "../../redux/cart/cart.actions";
import { updatedItems } from "../../utils/db.utils";

const CheckoutPage = ({ cartItems, total, clearCart, clearItem, addItem }) => {
  const classes = useStyles();
  const [updateItems, setUpdatedItems] = useState(true);

  useEffect(() => {
    updatedItems(cartItems).then((items) => {
      console.log("updatedItems", items);
      for (const item of items) {
        clearItem(item);
        addItem(item);
      }
      setUpdatedItems(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    if (cartItems.length) {
      clearCart();
    }
  };

  return (
    <>
      <img
        src="https://damroindia.com/media/bsimages/Main_Banner_1_1_.jpg"
        alt="banner"
        className="ad-banner"
      />
      <h2 className="checkout-heading" style={{ textAlign: "center" }}>
        YOUR SHOPPING CART
      </h2>
      <div className={classes.headerSec}>
        <h5>
          {updateItems
            ? "Updating prices of your products!"
            : cartItems.length
            ? `You have ${cartItems.length} items in your cart.`
            : "Your cart is empty!"}
        </h5>
        <Button color="primary" onClick={handleClick}>
          Clear Cart
        </Button>
      </div>
      <div className={classes.root}>
        <div className={classes.grid}>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className={classes.checkoutTotal}>
          <CheckoutTotal
            total={total}
            isDisabled={updateItems || !cartItems.length}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
