import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";

import Card from "../Card/Card";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const RelatedProducts = ({ category, products, pid }) => {
  const filteredProducts = products?.filter((product) => {
    return (
      product.category?.toLowerCase().includes(category.toLowerCase()) &&
      product.id !== pid
    );
  });

  return (
    filteredProducts.length > 0 && (
      <div style={{ margin: "0 10px" }}>
        <h2 className="relatedh2">RELATED PRODUCTS</h2>
        <div className="related_products">
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
              <div className="item" key={id}>
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
            );
          })}
          </div>
      </div>
    )
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCollections,
});

export default connect(mapStateToProps)(RelatedProducts);
