import React from "react";
import "./review.css";
import StarRatingComponent from "react-star-rating-component";

export class Review extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 5,
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

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
                    <img src="Images/Icons8-customer-480.png" />
                  </div>

                  <div className="name-user">
                    <strong>Sameer</strong>
                  </div>
                </div>

                <div className="reviews">
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    editing={false}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                </div>
              </div>

              <div className="client-comment">
                <p>
                  I have purchase powered recliner for over a month and I give
                  them 5 stars. The price is certainly worth it. This recliner
                  is comfortable. I can get up from it comfortably. My old
                  recliner was a rocker recliner and I struggled to get up. This
                  new recliner seat is a little higher which helps me to get up.
                </p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="box-top">
                <div className="profile">
                  <div className="profile-img">
                    <img src="Images/Icons8-customer-480.png" />
                  </div>

                  <div className="name-user">
                    <strong>Siddharth</strong>
                  </div>
                </div>

                <div className="reviews">
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    editing={false}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                </div>
              </div>

              <div className="client-comment">
                <p>
                  I have purchase powered recliner for over a month and I give
                  them 5 stars. The price is certainly worth it. This recliner
                  is comfortable. I can get up from it comfortably. My old
                  recliner was a rocker recliner and I struggled to get up. This
                  new recliner seat is a little higher which helps me to get up.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
