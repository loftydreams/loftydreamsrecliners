import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import Card from "./Card";
import "./CardCollection.css";

function CardCollection(props) {
  return (
    <div className="card-collection">
      <div className="card-collection-heading">
        <h2 className="card-collection-h2"> {props.heading}</h2>
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
            items: 1.6,
          },
          370: {
            items: 1.85,
          },
          400: {
            items: 2,
          },
          600: {
            items: 3,
          },
          890: {
            items: 3,
          },
          1000: {
            items: 4,
          },
          1200: {
            items: 5,
          },
          1700: {
            items: 6.5,
          },
        }}
      >
        <div className="item">
          <Card
            id={1}
            src={
              "data:image/jpeg;base64,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"
            }
          />
        </div>
        <div className="item">
          <Card
            id={2}
            src={
              "https://www.loftydreamsrecliners.com/wp-content/uploads/2021/03/Lofty-Dreams-Brolay-Single-Seater-Recliner-247x296.jpg"
            }
          />
        </div>
        <div className="item">
          <Card
            id={3}
            src={
              "https://www.loftydreamsrecliners.com/wp-content/uploads/2019/07/red-recliner-247x296.jpg"
            }
          />
        </div>
        <div className="item">
          <Card
            id={4}
            src={
              "https://www.loftydreamsrecliners.com/wp-content/uploads/2019/07/Loft-Recliner-in-Black-Color.-247x296.jpg"
            }
          />
        </div>
        <div className="item">
          <Card
            id={5}
            src={
              "https://www.loftydreamsrecliners.com/wp-content/uploads/2018/09/yellow-recliner-1-247x296.jpg"
            }
          />
        </div>
        <div className="item">
          <Card
            id={6}
            src={
              "https://www.loftydreamsrecliners.com/wp-content/uploads/2019/07/Lofty-Dreams-Recliners-single-seater-in-suede-fabric-247x296.jpg"
            }
          />
        </div>
        <div className="item">
          <Card
            id={7}
            src={
              "https://www.loftydreamsrecliners.com/wp-content/uploads/2013/08/Glider-247x296.jpg"
            }
          />
        </div>
        <div className="item">
          <Card
            id={8}
            src={
              "https://www.loftydreamsrecliners.com/wp-content/uploads/2021/03/Lofty-Dreams-Brolay-Single-Seater-Recliner-247x296.jpg"
            }
          />
        </div>
        <div className="item">
          <Card
            id={9}
            src={
              "https://www.loftydreamsrecliners.com/wp-content/uploads/2019/07/SofaLounger1-247x296.jpg"
            }
          />
        </div>
        <div className="item">
          <Card
            id={10}
            src={
              "https://www.loftydreamsrecliners.com/wp-content/uploads/2021/01/IMG_20210101_124353_0840-247x296.jpg"
            }
          />
        </div>
        <div className="item">
          <Card
            id={11}
            src={
              "https://www.loftydreamsrecliners.com/wp-content/uploads/2019/07/4-2-247x296.jpg"
            }
          />
        </div>
        <div className="item">
          <Card
            id={12}
            src={
              "https://www.loftydreamsrecliners.com/wp-content/uploads/2018/09/Lofty-Dreams-Recliners-in-Two-Seater-With-Cup-Holder-In-Red-Leatherette-247x296.jpg"
            }
          />
        </div>
      </OwlCarousel>
    </div>
  );
}
export default CardCollection;
