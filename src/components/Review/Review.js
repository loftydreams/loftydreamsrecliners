import React from "react";
import "./review.css";

export const Review = () => {
  return (
    <div className="review__main">
      <section id="testimonials">
        <div className="testimonial-heading">
          <h1>What People say about us</h1>
        </div>

        <div className="testimonial-box-container">
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img
                    src="Images/Icons8-customer-480.png"
                    alt="review-person"
                  />
                </div>

                <div className="name-user">
                  <strong>Sameer</strong>
                </div>
              </div>

              <div className="reviews">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="client-comment">
              <p>
                I have purchase powered recliner for over a month and I give
                them 5 stars. The price is certainly worth it. This recliner is
                comfortable. I can get up from it comfortably. My old recliner
                was a rocker recliner and I struggled to get up. This new
                recliner seat is a little higher which helps me to get up.
              </p>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img
                    src="Images/Icons8-customer-480.png"
                    alt="review-person"
                  />
                </div>

                <div className="name-user">
                  <strong>Siddharth</strong>
                </div>
              </div>

              <div className="reviews">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="client-comment">
              <p>
                I Purchased Manual LDRS-01 Nestro. I could not believe how nice
                it was. I have other recliner that I paid 2 times the price for
                and I feel this one is just as good. The back is tall that is
                important for me as I have back problem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
