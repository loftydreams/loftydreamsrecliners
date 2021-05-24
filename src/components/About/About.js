import React from "react";
import { firestore } from "../../firebase";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

import "./About.css";

export default function AboutUs() {
  const [image, loading] = useCollectionDataOnce(
    firestore.collection("aboutusImage"),
    { idField: "id" }
  );

  return (
    <div>
      <div className="aboutus__main">
        <div className="aboutus__left">
          <div className="aboutus_left_first">
            <h4>About Us</h4>
            <p>
              Lofty Dreams Recliners is a dedicated Recliners’ manufacturing
              company Head-Office in South -Delhi that currently focuses
              exclusively on producing comfortable, inspiring, and durable
              recliner furniture for the Home, Multiplex, PVR Theater, and
              Cinema.
              <br />
              Currently selling on an online platform and through partnerships
              with a handful of local showrooms in Delhi NCR, the company is
              selling upwards of Rs 300,00,000 per year and reaching Rs
              500,00,000 in 3 years. Plans for expansion include setting up
              distribution and manufacturing relationships in Delhi, NCR,
              Bangalore, Kerala, Kolkata, and Mumbai where the company aims to
              expand globally in the market.
            </p>

            <h4 id="vision">Our vision</h4>
            <p>
              An organization’s vision is a powerful tool that can not only
              create, but also propagate the concentration and lineup a business
              will need to survive and prosper. A good vision basically acts as
              a force to create a picture for the Company. Our aim to build
              better, durable recliner furniture for people all over the world.
              <br />
              We believe in fulfilling dreams rather than dreaming, we always
              aim for higher thoughts. We set our goals based on our plan, then
              we start the work keeping in mind the goal. Our passion constantly
              forces us to move forward.
            </p>

            <h4 id="whoweare">Who We Are</h4>
            <p>
              Lofty Dreams began on 11 February 2018 – a date we now celebrate
              every year as Anniversary. We are now more than 40 people working
              and at our headquarters in India at South-Delhi.
              <br />
              Lofty Dreams has its own manufacturing unit in Delhi, we have been
              designing very high quality, luxurious and durable recliner chair
              for the last 3 years.
            </p>
            <h4 id="whatwedo">What We Do</h4>
            <p>
              At Lofty Dreams, We design superior hand-crafted quality, well
              proportioned, and comfortable seats on the other hand we use the
              most exquisite faux leathers or fabrics for the recliner chairs.
              Our wide range of recliner chairs is tailored made are exactly to
              your measurements, space, and style. Our products are entirely
              made in India.
            </p>
          </div>
          <div className="aboutus_left_second">
            <div className="our_product_left">
              <h4 id="product">Our Products</h4>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/Manual%20Recliners%2FWelos%20White%2FLofty-Dreams-Manual-Single-Seater-Recliner-In-White-Color-Leatherite1-510x523.jpg?alt=media&token=8db3250c-fc49-41aa-a4c9-c9b3e54df970"
                alt="AvoutusRectiliner"
              />
            </div>
            <div className="our_product_right">
              <h4>Deals In all types of Recliner Chairs</h4>
              <p>
                Lofty Dreams deals in Electric and Manual recliner chair and
                sofa for Home, Office, Home Theater Room, Multiplex, PVR, and
                Cinema.{" "}
              </p>
              <h4>Our categories of the product are:</h4>
              <ul>
                <li>Single Seater Recliner Chair</li>
                <li>Home Theater Recliner Chair</li>
                <li>Living Room Recliner Sofa</li>
                <li>Lounge Recliner Sofa</li>
                <li>Multiplex Recliner Chair</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="aboutus__right">
         

          <div className="aboutusimage">
            {!loading && <img src={image[0]?.image} alt="aboutUs" />}
          </div>
        </div>
      </div>
    </div>
  );
}
