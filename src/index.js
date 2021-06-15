import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ScrollToTop from "react-router-scroll-top";
import ReactPixel from "react-facebook-pixel";
import { store, persistor } from "./redux/store";

import "./index.css";
import App from "./App";

ReactPixel.init("438119346781142", {}, { debug: true, autoConfig: false });
ReactPixel.pageView();
ReactPixel.fbq("track", "PageView");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
