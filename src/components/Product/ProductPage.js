import { useEffect, useState, Fragment } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import CloseIcon from "@material-ui/icons/Close";

import { selectProduct } from "../../redux/shop/shop.selector";
import { addItem } from "../../redux/cart/cart.actions";

import ProductMenu from "./ProductMenu";
import ProductShare from "./ProductShare";
import ProductAccordion from "./ProductAccordian";
import RelatedProducts from "./RelatedProducts";

import "./ProductPage.css";

const ProductPage = ({ addItem, product }) => {
  const { productId } = useParams();
  const history = useHistory();

  const [added, setAdded] = useState(false);
  const [src, setSrc] = useState(product?.image1);

  const slide = (url) => {
    setSrc(url);
  };

  const sp = product?.price - (product?.price * product?.discount) / 100;

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

  const formattedPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  useEffect(() => {
    if (product) {
      setSrc(product?.image1);
    }
  }, [product]);

  return product ? (
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
            <h5>{product?.stock}</h5>
            <div className="product-rating">{ratedStars(product?.rating)}</div>

            <div className="product-price">
              <p className="last-price">
                Old Price: <span>{formattedPrice(product?.price)}</span>
              </p>
              <p className="new-price">
                New Price:
                <span>
                  {formattedPrice(sp)} ({product?.discount}%)
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
              <span>Share At: </span>
              <ProductShare name={product?.name} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-menu">
        <ProductMenu name={product?.name} description={product?.description} />
      </div>
      <div className="product-accordian">
        <ProductAccordion
          name={product?.name}
          description={product?.description}
        />
      </div>
      <RelatedProducts category={product?.category} pid={productId} />
    </div>
  ) : null;
};

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(ownProps.match.params.productId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductPage)
);
