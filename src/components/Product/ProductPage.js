import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";
import { firestore } from "../../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./ProductPage.css";
import ProductMenu from "./ProductMenu";
import ProductAccordion from "./ProductAccordian";

const ProductPage = ({ addItem }) => {
  const { productId } = useParams();
  const [product, loading] = useDocumentDataOnce(
    productId && firestore.doc(`products/${productId}`)
  );
  const [src, setSrc] = useState(product?.image1);

  const slide = (url) => {
    setSrc(url);
  };

  const sp = product?.price - (product?.price * product?.discount) / 100;

  console.log(product);

  const ratedStars = (rating) => {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐️";
    }
    return stars;
  };

  const handleClick = () => {
    const item = {
      id: productId,
      name: product?.name,
      price: sp,
      imageUrl: product?.image1,
    };

    addItem(item);
  };

  useEffect(() => {
    if (product) {
      setSrc(product?.image1);
    }
  }, [product]);

  return (
    !loading && (
      <div className="product-page">
        <div className="card-wrapper">
          <div className="card">
            <div className="product-imgs">
              <div className="img-display">
                <div >
                  <img src={src} alt="product" className="img-showcase"/>
                </div>
              </div>
              <div className="img-select">
                <div
                  onClick={() => {
                    slide(product?.image1);
                  }}
                  className="img-item"
                >
                  <span data-id="1">
                    <img src={product?.image1} alt="more product images"  className="img1"/>
                  </span>
                </div>
                <div
                  onClick={() => {
                    slide(product?.image2);
                  }}
                  className="img-item"
                >
                  <span data-id="2">
                    <img src={product?.image2} alt="more product images" className="img1"/>
                  </span>
                </div>
                <div
                  onClick={() => {
                    slide(product?.image3);
                  }}
                  className="img-item"
                >
                  <span data-id="3">
                    <img src={product?.image3} alt="more product images" className="img1" />
                  </span>
                </div>
                <div
                  onClick={() => {
                    slide(product?.image4);
                  }}
                  className="img-item"
                >
                  <span data-id="4">
                    <img src={product?.image4} alt="more product images" className="img1"/>
                  </span>
                </div>
              </div>
            </div>

            <div className="product-content">
              <h2 className="product-title">{product?.name}</h2>
              <a href="#" className="product-link">
                visit store
              </a>
              <div className="product-rating">
                {ratedStars(product?.rating)}
                <span>{product?.rating}</span>
              </div>

              <div className="product-price">
                <p className="last-price">
                  Old Price: <span>{product?.price}</span>
                </p>
                <p className="new-price">
                  New Price:{" "}
                  <span>
                    {sp} ({product?.discount}%)
                  </span>
                </p>
              </div>

              <div className="product-detail">
                <h2>about this item: </h2>

                <ul>
                  {product?.description?.map((item, i) => (
                    <li key={i}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="purchase-info">
                <button type="button" className="btn">
                  Buy <i className="fas fa-shopping-cart"></i>
                </button>
                <button type="button" className="btn" onClick={handleClick}>
                  Add to Cart
                </button>
              </div>

              <div className="social-links">
                <p>Share At: </p>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="1x"
                    className="hov-icon"
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="1x"
                    className="hov-icon"
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="1x"
                    className="hov-icon"
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="1x"
                    className="hov-icon"
                  />
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="1x"
                    className="hov-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-menu">
          <ProductMenu/>
        </div>
        <div className="product-accordian">
          <ProductAccordion />
        </div>
      </div>
    )
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductPage);
