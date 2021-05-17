import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Card = ({ id, image1, price, name, category, item, sp, addItem , discount}) => {
  const history = useHistory();
  const [added, setAdded] = useState(false);

  const formattedPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  return (
    <div className="new-card-wrapper">
      <div className="offer-text-cat">
          <span>-30%</span>
        </div>
      <div
        onClick={() => history.push(`/product/${id}`)}
        style={{ cursor: "pointer" }}
      >
        <img src={image1} alt="Product img" />
        <span>{category}</span>
        <h5>{name}</h5>
      </div>
      
      <del>{formattedPrice(price)}</del>
      <span style={{ fontSize: "14px" }}>{formattedPrice(sp)}</span>
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
