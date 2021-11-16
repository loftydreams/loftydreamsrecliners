import { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useStyles } from "./PaymentPage.styles";

// import Button from "@material-ui/core/Button";

import PaymentForm from "./PaymentForm";
import Paynow from "./paynow";

import { selectCartItems } from "../../redux/cart/cart.selectors";

const PaymentPage = ({ cartItems }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(null);
  const [user] = useAuthState(auth);

  const handleSubmit = async (event, { customerData, shippingAddress }) => {
    event.preventDefault();
    setLoading(true);
    setConfig(null);

    const itemsToPurchase = cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
    }));

    try {
      const idToken = await user.getIdToken();
      const res = await fetch("http://localhost:3001/api/paynow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken,
          customerData,
          shippingAddress,
          itemsToPurchase,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed!");
      }

      const data = await res.json();
      setConfig(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <PaymentForm handleSubmit={handleSubmit} loading={loading} />
      {config && <Paynow config={config} />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(PaymentPage);
