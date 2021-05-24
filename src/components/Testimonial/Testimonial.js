import Rating from "@material-ui/lab/Rating";
import React from "react";
import "./Testimonial.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const Testimonial = () => {
  return (
    <div className="testimonial-body">
      <div className="testimonial-heading">
        <img src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/React-Images%2Ftestimonial.jpg?alt=media&token=aede337e-457f-42e6-8339-409dadedc3ef" alt="" />
      </div>
      <h4> OUR CLIENTS </h4>
      <div className="our-clients">
        <div className="client-card">
          <div className="client-card-top">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/React-Images%2Ftestimonial-1.jpeg?alt=media&token=ad73df53-15e0-4101-87c1-f8f5955cf942g"
              alt=""
            />
          </div>

          <div className="client-card-bottom">
            <Rating value={"5"}></Rating>
            <p>
              I purchased “welson white manual recliner Chair” is much better
              than I thought and I am happy to invest in the right recliner
              chair. The chair delivered on time with excellent quality. Thanks
              to Lofty Dreams
            </p>
            <span> Abhijit / E-Mail </span>
          </div>
        </div>
        <div className="client-card">
          <div className="client-card-top">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/React-Images%2Ftestimonial-2.jpeg?alt=media&token=4bc2bacf-8b53-4d69-a8f9-319bb6fcc70c"
              alt=""
            />
          </div>

          <div className="client-card-bottom">
            <Rating value={"5"}></Rating>
            <p>
              Quality and Durability of this recliner chair are very good. Great
              chair highly recommend. Thanks 🙂
            </p>
            <span> Kapil / E-mail </span>
          </div>
        </div>
        <div className="client-card">
          <div className="client-card-top">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/React-Images%2Ftestimonial-3.jpeg?alt=media&token=36f82108-5c59-46cc-9596-8f43684ed78e"
              alt=""
            />
          </div>

          <div className="client-card-bottom">
            <Rating value={"4"}></Rating>
            <p>
              Excellent Product. According to my room size, we customized the 2
              seater home theater recliner with console. Thanks to Lofty Dreams
              for giving us best quality and fulfilled our requirements.
            </p>
            <span> Arun / Whatsapp</span>
          </div>
        </div>
      </div>
      <h4> TESTIMONIAL</h4>
      <div className="testimonial-carousel">
        <OwlCarousel
          className="owl-theme -"
          loop
          margin={0}
          autoplay={true}
          responsiveClass={true}
          nav={true}
          dots={true}
          autoplayHoverPause={true}
          autoplayTimeout={1000}
          responsive={{
            0: {
              items: 1,
            },
            370: {
              items: 1.15,
            },
            400: {
              items: 1.2,
            },
            600: {
              items: 1.8,
            },
            760: {
              items: 2.3,
            },
            1000: {
              items: 3,
            },
            1200: {
              items: 3.5,
            },
            1700: {
              items: 5,
            },
          }}
        >
          <div className="testimonial-items">
            <Rating value={"4"} className="test-rating" />
            <p>
              {" "}
              The product is really good in comfort and quality-wise, in fact,
              it is much better than I expected. Thanks😀
            </p>
            <span> Poonam / Whatsapp</span>
          </div>
          <div className="testimonial-items">
            <Rating value={"4"} className="test-rating" />
            <p>
              {" "}
              The product price is fine when compared to its quality. This is
              really up to the mark in all aspects. I purchased 2 seater
              electric recliner with swivel table and console for which I have
              paid 65000. Really I am satisfied with this recliner. Thanks.
            </p>
            <span> Dr. Manoj / E-Mail</span>
          </div>
          <div className="testimonial-items">
            <Rating value={"5"} className="test-rating" />
            <p>
              {" "}
              I bought Swivel recliner chair. Working fine from the last 8
              months. No problems I faced yet. Thanks to Lofty Dreams.
            </p>
            <span> Priyank / E-Mail </span>
          </div>
          <div className="testimonial-items">
            <Rating value={"4"} className="test-rating" />
            <p> Nice Recliner, Thanks a lot to deliver on time.</p>
            <span> Aarti / Whatsapp </span>
          </div>
          <div className="testimonial-items">
            <Rating value={"5"} className="test-rating" />
            <p>
              {" "}
              Amazing! Perfect recliner design and dimension that completely fit
              with my body. Really loved it. Thank You.
            </p>
            <span> Sanju / E-Mail </span>
          </div>
          <div className="testimonial-items">
            <Rating value={"5"} className="test-rating" />
            <p>
              {" "}
              Wow! Thanks for giving us the best quality recliner. I really
              wanted it. Thanks to Lofty Dreams.
            </p>
            <span> Pankaj / Whatsapp </span>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
