import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";

import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";

import { useStyles } from "./search-results.styles";

const SearchResults = ({ products }) => {
  const classes = useStyles();
  const { keyword } = useParams();

  const filteredProducts = products?.filter((product) => {
    return (
      product.name.toLowerCase().includes(keyword.toLowerCase()) ||
      product.category.toLowerCase().includes(keyword.toLowerCase())
    );
  });

  return (
    products.length && (
      <div className={classes.root}>
        <span
          className={classes.header}
          style={{ fontSize: "calc(1rem + 1vw)" }}
        >
          You've searched for {keyword}
        </span>
        <Grid className={classes.grid} container justify="center" spacing={5}>
          {filteredProducts?.map((data) => {
            const {
              id,
              image1,
              price,
              discount,
              name,
              category,
              rating,
              stock,
            } = data;

            return (
              <Grid item key={id}>
                <div className="item">
                  <Card
                    id={id}
                    src={image1}
                    name={name}
                    category={category}
                    price={price}
                    discount={discount}
                    rating={rating}
                    stock={stock}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
        {filteredProducts?.length > 0 ? null : (
          <div className={classes.header}>No products found!</div>
        )}
      </div>
    )
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCollections,
});

export default connect(mapStateToProps)(SearchResults);
