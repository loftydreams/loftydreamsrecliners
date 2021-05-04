import { useParams } from "react-router-dom";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import Grid from "@material-ui/core/Grid";

import { firestore } from "../../firebase";
import Card from "../Card/Card";

import { useStyles } from "./search-results.styles";

const SearchResults = () => {
  const classes = useStyles();
  const { keyword } = useParams();
  const [products, loading] = useCollectionDataOnce(
    firestore.collection("products"),
    { idField: "id" }
  );

  const filteredProducts = products?.filter((product) => {
    return (
      product.name.toLowerCase().includes(keyword.toLowerCase()) ||
      product.category.toLowerCase().includes(keyword.toLowerCase())
    );
  });

  return (
    !loading && (
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
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
        {filteredProducts?.length > 0 ? null : (
          <div className={classes.header}>No results found!</div>
        )}
      </div>
    )
  );
};

export default SearchResults;
