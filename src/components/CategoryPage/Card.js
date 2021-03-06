import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { pixelTrackCustom, pixelTrackDefault } from "../../utils/pixel-track";

const Card = ({
  id,
  image1,
  price,
  name,
  category,
  item,
  sp,
  addItem,
  discount,
  stock,
}) => {
  const history = useHistory();
  const [added, setAdded] = useState(false);

  const formattedPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  return (
    <div className="new-card-wrapper">
      {discount > 0 && (
        <div className="offer-text-cat">
          <span>-{discount}%</span>
        </div>
      )}
      <div
        onClick={() => {
          history.push(`/product/${id}`);
          pixelTrackDefault("ViewContent", {
            id,
            name,
            category,
            price,
            discount,
          });
        }}
        style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
      >
        <img src={image1} alt="Product img" />
        <span style={{ color: "green" }}>{stock}</span>
        <span>{category}</span>
        <h5>{name}</h5>
      </div>

      <del>{formattedPrice(price)}</del>
      <strong style={{ fontSize: "14px" }} className="price-card">
        {formattedPrice(sp)}
      </strong>
      <br />
      {added ? (
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => history.push(`/checkout`)}
        >
          Checkout
        </Button>
      ) : (
        <Button
          variant="contained"
          className="add-to-btn"
          color="primary"
          size="large"
          onClick={() => {
            addItem(item);
            setAdded(true);
            pixelTrackCustom("AddToCart", {
              id,
              name,
              category,
              price,
              discount,
            });
          }}
        >
          Add to Basket
        </Button>
      )}
    </div>
  );
};

export default Card;
