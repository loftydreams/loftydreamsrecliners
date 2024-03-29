import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";

import Card from "./Card";

// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./CardCollection.css";

function CardCollection({ heading, topSelling, topDiscount, products }) {
  const topSellingProducts = products?.filter((product) => product.topSelling);

  const topDiscountProducts = products?.filter(
    (product) => product.topDiscount
  );

  const renderProducts = topSelling ? topSellingProducts : topDiscountProducts;

  return (
    products.length > 0 && (
      <div className="card-collection">
        <div className="card-collection-heading">
          <h2 className="card-collection-h2"> {heading}</h2>
          <hr className="card-collection-hr"></hr>
        </div>
        {/* <OwlCarousel
          className="owl-theme -"
          // loop
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
              items: 2,
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
        > */}
        <div className="cards">
          {renderProducts?.map((data) => {
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
        {/* </OwlCarousel> */}
      </div>
    )
  );
}

const mapStateToProps = createStructuredSelector({
  products: selectCollections,
});

export default connect(mapStateToProps)(CardCollection);
