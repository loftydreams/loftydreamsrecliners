import { Switch, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar1/Navbar1";
import Navbar2 from "./components/Navbar2/Navbar2";
import Navbar3 from "./components/Navbar3/Navbar3";
import { Footer } from "./components/Footer/Footer";
import { Review } from "./components/Review/Review";
import Contact from "./components/contact/Contact";
import CarouselContainer from "./components/Carousel/Carousel";
import CardCollection from "./components/Card/CardCollection";
import CheckoutPage from "./components/checkout/checkout.component";
import AboutUs from "./components/About/About";
import "./App.css";
import { Home1 } from "./components/HomePage/Home1";
import { Home2 } from "./components/HomePage/Home2";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import { ProductPage } from "./components/Product/ProductPage";
import TrackOurOrder from "./components/TrackOrder/TrackOurOrder";
import MyAccount from "./components/MyAccount/MyAccount";
import TermsAndCondition from "./components/TermsAndCondition/TermsAndCondition";
import PaymentPolicy from "./components/Payment Policy/PaymentPolicy"
function App() {
  return (
    
    <div className="App">

      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <Switch>
        <Route path="/" exact>
          <CarouselContainer />
          <Home1/>
          <Home2/>
          <CardCollection heading ={"BEST SELLING PRODUCTS"}/>
          <CardCollection heading={"TOP DISCOUNTED PRODUCTS"} />
          <Contact />
          <Review />
        </Route>
        <Route path="/checkout">
          <CheckoutPage/>
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy/>
        </Route>
        <Route path="/terms-and-condition">
          <TermsAndCondition/>
        </Route>
        <Route path="/payment-security-policy">
          <PaymentPolicy/>
        </Route>
        <Route path="/my-account">
          <MyAccount></MyAccount>
        </Route>
        <Route path="/track-order">
          <TrackOurOrder/>
          </Route>
      <Route path="/product-page">
          <ProductPage/>
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