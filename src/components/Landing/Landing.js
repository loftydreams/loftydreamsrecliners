import React from 'react'
import "./Landing.css"
import Rating from "@material-ui/lab/Rating";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
function Landing() {
    return (
            
        <div >
            <div className="landing-container" >
                <div className="landing-image"><img className="landing-img" src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/image_landing_1.png?alt=media&token=1328c603-d70b-44c9-95b2-9096d7c7eb4a" alt="" /></div>
                <div className="landing-image-text">
                    <h6>BEST QUALITY PRODUCTS</h6>
                    <h1><stong>Product Description!</stong></h1>

                    
                   <ul>
                     <li>• L-80” ; W-39” ; H-42”</li>
                     <li>• Primary Material : Solid Wood</li>
                     <li>• Color : Black </li>
                     <li>• Upholstery Material : Leatherette </li>
                     <li>• Reclining Type : Motorized (Center Seat is Fixed)</li>
                     <li>• Style : Modern</li>
                     <li>• Seating Capacity : Three seat (centre one is fixed)</li>
                     <li>• Weight Capacity : 200 KG per seat</li>
                     <li>• Assembly Required : Yes, Do It Yourself</li>
                   </ul>


                    <button class="shop-now-btn"> Shop Now </button>
                </div>

            </div>
        
      <div className="testimonial-carousel">
      <h3 className="landing-testimonial-txt"> <strong> TESTIMONIALS </strong> </h3>
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
              items: 1,
            },
            760: {
              items: 2,
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
          }}>
          <div className="testimonial-items">
            <Rating value={4} readOnly className="test-rating" />
            <p>
              {" "}
              The product is really good in comfort and quality-wise, in fact,
              it is much better than I expected. Thanks😀
            </p>
            <span> Poonam / Whatsapp</span>
          </div>
          <div className="testimonial-items">
            <Rating value={4} readOnly className="test-rating" />
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
            <Rating value={5} readOnly className="test-rating" />
            <p>
              {" "}
              I bought Swivel recliner chair. Working fine from the last 8
              months. No problems I faced yet. Thanks to Lofty Dreams.
            </p>
            <span> Priyank / E-Mail </span>
          </div>
          <div className="testimonial-items">
            <Rating value={4} readOnly className="test-rating" />
            <p> Nice Recliner, Thanks a lot to deliver on time.</p>
            <span> Aarti / Whatsapp </span>
          </div>
          <div className="testimonial-items">
            <Rating value={5} readOnly className="test-rating" />
            <p>
              {" "}
              Amazing! Perfect recliner design and dimension that completely fit
              with my body. Really loved it. Thank You.
            </p>
            <span> Sanju / E-Mail </span>
          </div>
          <div className="testimonial-items">
            <Rating value={5} readOnly className="test-rating" />
            <p>
              {" "}
              Wow! Thanks for giving us the best quality recliner. I really
              wanted it. Thanks to Lofty Dreams.
            </p>
            <span> Pankaj / Whatsapp </span>
          </div>
        </OwlCarousel>
        </div>
        <div className="utube-video">
        <iframe   src="https://www.youtube.com/embed/mZQVVO4UhbY?start=20&end=44&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button class="shop-now-btn"> Shop Now </button>
        </div>
        </div>
   
     
    )
}

export default Landing;
