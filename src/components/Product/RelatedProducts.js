import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";

import Card from "../Card/Card";
import OwlCarousel from "react-owl-carousel";
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
        <OwlCarousel
          className="owl-theme -"
          rewind={true}
          pullDrag
          touchDrag
          dots={false}
          margin={0}
          autoplay={true}
          responsiveClass={true}
          nav={true}
          autoplayHoverPause={true}
          autoplayTimeout={3000}
          responsive={{
            0: {
              items: 1.35,
            },
            370: {
              items: 1.78,
              // slideBy:1.78
            },
            400: {
              items: 1.9,
              // slideBy:2
            },
            600: {
              items: 3,
              // slideBy : 3
            },
            890: {
              items: 3,
              // slideBy: 3
            },
            1000: {
              items: 4,
              // slideBy:4
            },
            1200: {
              items: 5,
           
            
            },
            1700: {
              items: 6,
              // slideBy:6
              
            },
          }}
        >
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
        </OwlCarousel>
      </div>
    )
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCollections,
});

export default connect(mapStateToProps)(RelatedProducts);
