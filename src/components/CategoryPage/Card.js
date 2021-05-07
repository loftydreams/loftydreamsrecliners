import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Card = ({ id, image1, price, name, category, item, sp, addItem }) => {
  const history = useHistory();
  const [added, setAdded] = useState(false);

  return (
    <div className="new-card-wrapper">
      <div
        onClick={() => history.push(`/product/${id}`)}
        style={{ cursor: "pointer" }}
      >
        <img src={image1} alt="Product img" />
        <span>{category}</span>
        <h5>{name}</h5>
      </div>
      <del>₹{price}</del>
      <span style={{ fontSize: "14px" }}>₹{sp.toFixed(2)}</span>
      <br />
      {added ? (
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => history.push(`/checkout`)}
        >
          Checkout
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            addItem(item);
            setAdded(true);
          }}
        >
          Add to Basket
        </Button>
      )}
    </div>
  );
};

export default Card;
