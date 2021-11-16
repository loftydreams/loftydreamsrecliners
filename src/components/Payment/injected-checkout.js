import { injectCheckout } from "paytm-blink-checkout-react";

const InjectedCheckout = (props) => {
  const checkoutJsInstance = props.checkoutJsInstance;

  return (
    <div>
      <b>IS CHECKOUT JS INJECTED : </b>
      {Boolean(checkoutJsInstance).toString()}
    </div>
  );
};

export default injectCheckout(InjectedCheckout);
