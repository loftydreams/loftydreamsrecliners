import { useEffect, useState } from "react";
import { CheckoutProvider, Checkout } from "paytm-blink-checkout-react";
import CONFIG from "./merchant-config";
import InjectedCheckout from "./injected-checkout";

const USE_EXISTING_CHECKOUT_INSTANCE = "Use existing checkout instance : ";

const Paynow = (props) => {
  const getUpdatedConfig = () => {
    const newConfig = { ...CONFIG, data: props.config };
    newConfig["handler"] = {
      notifyMerchant: (eventType, data) => {
        console.log("MERCHANT NOTIFY LOG", eventType, data);
      },
    };

    return newConfig;
  };

  const [state, setState] = useState({
    config: getUpdatedConfig(),
    showCheckout: false,
    openInPopup: true,
    checkoutJsInstance: null,
  });

  const toggleCheckout = () => {
    setState((prevState) => ({
      ...prevState,
      showCheckout: !prevState.showCheckout,
    }));
  };

  const loadCheckoutScript = () => {
    const url = `${process.env.REACT_APP_HOSTNAME}/merchantpgpui/checkoutjs/merchants/`;
    const scriptElement = document.createElement("script");
    scriptElement.async = true;
    scriptElement.src = url.concat(CONFIG.merchant.mid);
    scriptElement.type = "application/javascript";
    scriptElement.onload = () => {
      const checkoutJsInstance = getCheckoutJsObj();

      if (checkoutJsInstance && checkoutJsInstance.onLoad) {
        checkoutJsInstance.onLoad(() => {
          setState((prevState) => ({
            ...prevState,
            config: getUpdatedConfig(),
            checkoutJsInstance,
          }));
        });
      } else {
        console.error(USE_EXISTING_CHECKOUT_INSTANCE + "onload not available!");
      }
    };
    scriptElement.onerror = (error) => {
      console.error(USE_EXISTING_CHECKOUT_INSTANCE + "script load fail!");
    };
    document.body.appendChild(scriptElement);
  };

  const getCheckoutJsObj = () => {
    if (window && window.Paytm && window.Paytm.CheckoutJS) {
      return window.Paytm.CheckoutJS;
    } else {
      console.error(
        USE_EXISTING_CHECKOUT_INSTANCE + "Checkout instance not found!"
      );
    }

    return null;
  };

  useEffect(() => {
    loadCheckoutScript();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { showCheckout, openInPopup } = state;

  return (
    <CheckoutProvider
      config={state.config}
      checkoutJsInstance={state.checkoutJsInstance}
      openInPopup={openInPopup}
      env={process.env.REACT_APP_PAYTM_ENV}
    >
      <InjectedCheckout toggleCheckout={toggleCheckout} />
      {showCheckout && <Checkout />}
    </CheckoutProvider>
  );
};

export default Paynow;
