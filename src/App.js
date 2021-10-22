import { Switch, Route } from "react-router-dom";
import React from 'react';
import Navbar1 from "./components/Navbar1/Navbar1";
import Navbar2 from "./components/Navbar2/Navbar2";
import Navbar3 from "./components/Navbar3/Navbar3";
import { Navbar4 } from "./components/Navbar4/Navbar4";
import ChatContainer from "./components/chat-bot/chat-icon";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

import CarouselContainer from "./components/Carousel/Carousel";
import Home1 from "./components/HomePage/Home1";
import Home2 from "./components/HomePage/Home2";
import CartItemsPreview from "./components/cart-items-preview/cart-items-preview";
import CardCollection from "./components/Card/CardCollection";
import Contact from "./components/contact/Contact";
import Review from "./components/Review/Review";
import CheckoutPage from "./components/checkout/checkout.component";
import AboutUs from "./components/About/About";
import Contactus from "./components/Contactus/Contactus";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "./components/TermsAndCondition/TermsAndCondition";
import PaymentPolicy from "./components/Payment Policy/PaymentPolicy";
import TrackOurOrder from "./components/TrackOrder/TrackOurOrder";
import ProductPage from "./components/Product/ProductPage";
import SearchResults from "./components/search-products/search-results";
import AllRecliners from "./components/CategoryPage/AllRecliners";
import SingleSeater from "./components/CategoryPage/SingleSeater";
import LivingRoom from "./components/CategoryPage/LivingRoom";
import HomeTheater from "./components/CategoryPage/HomeTheater";
import Lounger from "./components/CategoryPage/Lounger";
import Riser from "./components/CategoryPage/Riser";
import Electric from "./components/CategoryPage/Electric";
import Manual from "./components/CategoryPage/Manual";
import Feedback from "./components/Navbar1/Feedback";
import Testimonial from "./components/Testimonial/Testimonial";
import ShippingPolicy from "./components/ShippingPolicy/ShippingPolicy";
import Home3 from "./components/HomePage/Home3";





 function App()
{

  return (
    <div className="App">
    
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <Navbar4 />
      <ChatContainer />
      <Switch>
        <Route path="/" exact>
          <CarouselContainer />
          <Home1 />

          <Home3/>
          <Review />

        

          <Home2 />
          <CardCollection
            heading={"BEST SELLING PRODUCTS"}
            topSelling
            topDiscount={false}
          />
          <CardCollection
            heading={"TOP DISCOUNTED PRODUCTS"}
            topSelling={false}
            topDiscount
          />
          <CartItemsPreview />
          <Contact />
       
          
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contactus">
          <Contactus />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/terms-and-condition">
          <TermsAndCondition />
        </Route>
        <Route path="/payment-security-policy">
          <PaymentPolicy />
        </Route>
        <Route path="/track-order">
          <TrackOurOrder />
        </Route>
        <Route path="/product/:productId">
          <ProductPage />
        </Route>
        <Route path="/search/:keyword">
          <SearchResults />
        </Route>
        <Route path="/all-recliners">
          <AllRecliners />
        </Route>
        <Route path="/single-seater">
          <SingleSeater />
        </Route>
        <Route path="/living-room">
          <LivingRoom />
        </Route>
        <Route path="/home-theater">
          <HomeTheater />
        </Route>
        <Route path="/lounger">
          <Lounger />
        </Route>
        <Route path="/riser">
          <Riser />
        </Route>
        <Route path="/electric">
          <Electric />
        </Route>
        <Route path="/manual">
          <Manual />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route path="/testimonial">
          <Testimonial />
        </Route>
        <Route path="/shipping-policy">
          <ShippingPolicy />
        </Route>

        <Route path="*">
          <h1>Error 404: Page not found</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
