import { useEffect, useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import CloseIcon from "@material-ui/icons/Close";

import { addItem } from "../../redux/cart/cart.actions";
import { firestore } from "../../firebase";

import ProductMenu from "./ProductMenu";
import ProductAccordion from "./ProductAccordian";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardCollection from "../Card/CardCollection"
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./ProductPage.css";

const ProductPage = ({ addItem }) => {
  const { productId } = useParams();
  const history = useHistory();
  const [product, loading] = useDocumentDataOnce(
    productId && firestore.doc(`products/${productId}`)
  );
  const [added, setAdded] = useState(false);
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
    setAdded(true);
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
                <TransformWrapper>
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <Fragment>
                      <div>
                        <IconButton color="primary" onClick={zoomIn}>
                          <ZoomInIcon />
                        </IconButton>
                        <IconButton color="primary" onClick={zoomOut}>
                          <ZoomOutIcon />
                        </IconButton>
                        <IconButton color="secondary" onClick={resetTransform}>
                          <CloseIcon />
                        </IconButton>
                      </div>
                      <TransformComponent>
                        <img src={src} alt="product" className="img-showcase" />
                      </TransformComponent>
                    </Fragment>
                  )}
                </TransformWrapper>
              </div>
              <div className="img-select">
                {product?.image1 && (
                  <div
                    onClick={() => {
                      slide(product?.image1);
                    }}
                    className="img-item"
                  >
                    <span data-id="1">
                      <img
                        src={product?.image1}
                        alt="more product images"
                        className="img1"
                      />
                    </span>
                  </div>
                )}
                {product?.image2 && (
                  <div
                    onClick={() => {
                      slide(product?.image2);
                    }}
                    className="img-item"
                  >
                    <span data-id="2">
                      <img
                        src={product?.image2}
                        alt="more product images"
                        className="img1"
                      />
                    </span>
                  </div>
                )}
                {product?.image3 && (
                  <div
                    onClick={() => {
                      slide(product?.image3);
                    }}
                    className="img-item"
                  >
                    <span data-id="3">
                      <img
                        src={product?.image3}
                        alt="more product images"
                        className="img1"
                      />
                    </span>
                  </div>
                )}
                {product?.image4 && (
                  <div
                    onClick={() => {
                      slide(product?.image4);
                    }}
                    className="img-item"
                  >
                    <span data-id="4">
                      <img
                        src={product?.image4}
                        alt="more product images"
                        className="img1"
                      />
                    </span>
                  </div>
                )}
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
                {added ? (
                  <button
                    type="button"
                    className="btn"
                    onClick={() => history.push("/checkout")}
                  >
                    Checkout
                  </button>
                ) : (
                  <button type="button" className="btn" onClick={handleClick}>
                    Add to Cart
                  </button>
                )}
              </div>

              <div className="social-links">
                <p>Share At: </p>
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="1x"
                  className="hov-icon"
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="1x"
                  className="hov-icon"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="1x"
                  className="hov-icon"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="1x"
                  className="hov-icon"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="1x"
                  className="hov-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-menu">
          <ProductMenu
            name={product?.name}
            description={product?.description}
          />
        </div>
        <div className="product-accordian">
          <ProductAccordion
            name={product?.name}
            description={product?.description}
          />
        </div>
        <h2 className="relatedh2">RELATED PRODUCTS</h2>
        <CardCollection></CardCollection>
      </div>

    )
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductPage);
