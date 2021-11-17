import Button from "@material-ui/core/Button";
import { injectCheckout } from "paytm-blink-checkout-react";

const InjectedCheckout = (props) => {
  const checkoutJsInstance = props.checkoutJsInstance;

  return (
    <Button
      style={{
        width: "100px",
        margin: "10px auto",
      }}
      color="primary"
      variant="contained"
      disabled={!checkoutJsInstance}
      type="button"
      onClick={props.toggleCheckout}
    >
      Paynow
    </Button>
  );
};

export default injectCheckout(InjectedCheckout);
