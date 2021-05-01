import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "@material-ui/core";
import { addItem } from "../../redux/cart/cart.actions";

import "./Card.css";

function Card({ id, src, addItem }) {
  const history = useHistory();
  const [added, setAdded] = useState(false);

  const item = {
    id: id,
    name: "Brolay Electric Recliner Chair (brown)",
    price: 1200,
    imageUrl: src,
  };

  return (
    <>
    
      <div className="card-body">
        <div className="card1-top">
          <img alt="person-pic" src={src} />
        </div>

        <div className="card-bottom">
          <span className="top-heading">ELECTRIC RECLINERS </span>
          <h5 className="product-name">
            Brolay Electric Recliner Chair (brown)
          </h5>
          <span className="h5-position">
            <del className="price-cut"> ₹2000 </del> ₹1200{" "}
            <span> ⭐️⭐️⭐️ </span>
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
              size="small"
              className="add-to-cart-btn"
            >
              Add to Cart
            </Button>
          )}

    <a href="/product-page"> <Button variant="outlined" className="see-details-btn" size="small">
            See Details.....
          </Button>
          </a>
        </div>
        <div className="offer-text">
          <span> -30%</span>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Card);
