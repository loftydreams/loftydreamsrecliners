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
import { clearCart } from "../../redux/cart/cart.actions";

const CheckoutPage = ({ cartItems, total, clearCart }) => {
  const classes = useStyles();

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
          {cartItems.length
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
          <CheckoutTotal total={total} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
