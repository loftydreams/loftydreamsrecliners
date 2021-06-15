import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Button from "@material-ui/core/Button";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { pixelTrackDefault } from "../../utils/pixel-track";

import { useStyles } from "./cart-items.styles";

const CartItemsPreview = ({ cartItems }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/product/${id}`);
  };

  return cartItems.length > 0 ? (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2>YOUR CART ITEMS.....</h2>
        <hr />
      </div>
      <div className={classes.content}>
        <div className={classes.itemsContainer}>
          <div className={classes.items}>
            {cartItems.map((cartItem) => {
              const { id, imageUrl } = cartItem;
              return (
                <div
                  key={id}
                  className={classes.item}
                  onClick={() => {
                    handleClick(id);
                    pixelTrackDefault("ViewContent", cartItem);
                  }}
                >
                  <img
                    src={imageUrl}
                    alt="added products to cart"
                    height="120"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.info}>
          <Button
            variant="outlined"
            color="primary"
            href="https://www.amazon.in/s?me=A1YF33ZDTB7JEG&marketplaceID=A21TJRUUN4KGV"
            target="_blank"
            className={classes.button}
          >
            Visit Amazon.in
          </Button>
          <Button
            variant="contained"
            onClick={() => history.push("/checkout")}
            className={classes.button}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartItemsPreview);
