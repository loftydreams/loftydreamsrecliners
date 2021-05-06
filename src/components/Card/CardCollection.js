import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

import { firestore } from "../../firebase";
import Card from "./Card";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./CardCollection.css";

function CardCollection({ heading, topSelling, topDiscount }) {
  const [products, loading] = useCollectionDataOnce(
    firestore.collection("products"),
    { idField: "id" }
  );

  const topSellingProducts = products?.filter((product) => product.topSelling);

  const topDiscountProducts = products?.filter(
    (product) => product.topDiscount
  );

  const renderProducts = topSelling ? topSellingProducts : topDiscountProducts;

  return (
    !loading && (
      <div className="card-collection">
        <div className="card-collection-heading">
          <h2 className="card-collection-h2"> {heading}</h2>
          <hr className="card-collection-hr"></hr>
        </div>
        <OwlCarousel
          className="owl-theme -"
          loop
          margin={0}
          autoplay={true}
          responsiveClass={true}
          nav
          dots={false}
          autoplayHoverPause={true}
          autoplayTimeout={5000}
          responsive={{
            0: {
              items: 1,
            },
            370: {
              items: 1,
            },
            400: {
              items: 1,
            },
            600: {
              items: 1,
            },
            890: {
              items: 1,
            },
            1000: {
              items: 1,
            },
            1200: {
              items: 4,
            },
            1700: {
              items: 1,
            },
          }}
        >
          {renderProducts?.map((data) => {
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
              <div className="item" key={id}>
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
            );
          })}
        </OwlCarousel>
      </div>
    )
  );
}
export default CardCollection;
