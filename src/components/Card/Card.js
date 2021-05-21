import { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "@material-ui/core";
import { addItem } from "../../redux/cart/cart.actions";

import "./Card.css";

function Card({
  id,
  src,
  name,
  category,
  price,
  discount,
  rating,
  addItem,
  stock,
}) {
  const history = useHistory();
  const [added, setAdded] = useState(false);

  const sp = price - (price * discount) / 100;

  const item = {
    id: id,
    name: name,
    price: sp,
    imageUrl: src,
    stock: stock,
  };

  const ratedStars = (rating) => {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐️";
    }
    return stars;
  };

  const formattedPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  const handleClick = () => {
    history.push(`/product/${id}`);
  };

  return (
    <>
      <div className="card-body">
        <div
          className="card1-top"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          <img alt="person-pic" src={src} />
        </div>

        <div className="card-bottom">
          <span className="top-heading" style={{ color: "green" }}>
            {stock}
          </span>
          <span className="top-heading">{category}</span>
          <h5 className="product-name">{name}</h5>
          <span className="h5-position">
            <del className="price-cut">{formattedPrice(price)}</del>
            <strong className="price-card">{formattedPrice(sp)}</strong>
            <span className="rating-star"> {ratedStars(rating)} </span>
          </span>
          {added ? (
            <Button
              onClick={() => history.push("/checkout")}
              variant="outlined"
              color="primary"
              size="small"
            >
              Checkout
            </Button>
          ) : (
            <Button
              onClick={() => {
                addItem(item);
                setAdded(true);
              }}
              variant="contained"
              color="primary"
              size="large"
              className="add-to-cart-btn"
            >
              Add to Cart
            </Button>
          )}
        </div>
        {discount > 0 && (
          <div className="offer-text">
            <span>-{discount}%</span>
          </div>
        )}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Card);
