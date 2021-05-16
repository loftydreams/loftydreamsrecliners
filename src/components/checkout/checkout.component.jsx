import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useStyles } from "./checkout.styles";

import CheckoutItem from "../checkout-item/checkout-item.component";
import CheckoutTotal from "./checkout-total.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const CheckoutPage = ({ cartItems, total }) => {
  const classes = useStyles();

  return (
    <>
      <img
        src="https://damroindia.com/media/bsimages/Main_Banner_1_1_.jpg"
        alt=""
        className="ad-banner"
      />
      <div className="checkout">
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          <Link color="inherit" href="/" aria-current="page">
            Shopping Cart
          </Link>
          <Link color="inherit" href="/getting-started/installation/">
            Payment Details
          </Link>
          <Link color="inherit" href="/components/breadcrumbs/">
            Order Complete
          </Link>
        </Breadcrumbs>
        <h4 className="checkout-heading"> YOUR SHOPPING CART</h4>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
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

export default connect(mapStateToProps)(CheckoutPage);
