import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./ProductPage.css";

const all_image = [
  "https://www.loftydreamsrecliners.com/wp-content/uploads/2021/02/Lofty-Dreams-3-Seater-Manual-Recliner-in-Brown-Color.jpg",
  "https://www.loftydreamsrecliners.com/wp-content/uploads/2021/02/Lofty-Dreams-Three-Seater-Manual-Recliner-in-Brown-Color-510x318.jpg",
  "https://www.loftydreamsrecliners.com/wp-content/uploads/2021/02/Lofty-Dreams-Three-Seater-Manual-Recliner-in-Brown-Colour-510x318.jpg",
  "https://www.loftydreamsrecliners.com/wp-content/uploads/2021/02/Lofty-Dreams-3-Seater-Manual-Recliner-in-Brown-Colour-510x338.jpg",
];

const ProductPage = () => {
  const [src, setSrc] = useState(all_image[0]);

  const slide = (id) => {
    setSrc(all_image[id]);
  };

  return (
    <div className="product-page">
      <div class="card-wrapper">
        <div class="card">
          <div class="product-imgs">
            <div class="img-display">
              <div class="img-showcase">
                <img src={src} alt="product" />
              </div>
            </div>
            <div class="img-select">
              <div
                onClick={() => {
                  slide(0);
                }}
                class="img-item"
              >
                <span data-id="1">
                  <img
                    src="https://www.loftydreamsrecliners.com/wp-content/uploads/2021/02/Lofty-Dreams-3-Seater-Manual-Recliner-in-Brown-Colour-510x338.jpg"
                    alt="more product images"
                  />
                </span>
              </div>
              <div
                onClick={() => {
                  slide(1);
                }}
                class="img-item"
              >
                <span data-id="2">
                  <img
                    src="https://www.loftydreamsrecliners.com/wp-content/uploads/2021/02/Lofty-Dreams-Three-Seater-Manual-Recliner-in-Brown-Colour-510x318.jpg"
                    alt="more product images"
                  />
                </span>
              </div>
              <div
                onClick={() => {
                  slide(2);
                }}
                class="img-item"
              >
                <span data-id="3">
                  <img
                    src="https://www.loftydreamsrecliners.com/wp-content/uploads/2021/02/Lofty-Dreams-Three-Seater-Manual-Recliner-in-Brown-Color-510x318.jpg"
                    alt="more product images"
                  />
                </span>
              </div>
              <div
                onClick={() => {
                  slide(3);
                }}
                class="img-item"
              >
                <span data-id="4">
                  <img
                    src="https://www.loftydreamsrecliners.com/wp-content/uploads/2021/02/Lofty-Dreams-3-Seater-Manual-Recliner-in-Brown-Colour-247x296.jpg"
                    alt="more product images"
                  />
                </span>
              </div>
            </div>
          </div>

          <div class="product-content">
            <h2 class="product-title">
              Elion 3 Seater Manual Recliner Sofa (Brown)
            </h2>
            <a href="#" class="product-link">
              visit store
            </a>
            <div class="product-rating">
              ⭐️⭐️⭐️⭐️⭐️
              <span>4.7(21)</span>
            </div>

            <div class="product-price">
              <p class="last-price">
                Old Price: <span>2000.00</span>
              </p>
              <p class="new-price">
                New Price: <span>1500.00 (5%)</span>
              </p>
            </div>

            <div class="product-detail">
              <h2>about this item: </h2>

              <ul>
                <li>
                  Color: <span>Black</span>
                </li>
                <li>
                  Available: <span>in stock</span>
                </li>
                <li>
                  Category: <span>Shoes</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            <div class="purchase-info">
              <input type="number" min="1" placeholder="1" />
              <button type="button" class="btn">
                Buy <i class="fas fa-shopping-cart"></i>
              </button>
              <button type="button" class="btn">
                Add to Cart
              </button>
            </div>

            <div class="social-links">
              <p>Share At: </p>
              <a href="#">
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="1x"
                  className="hov-icon"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="1x"
                  className="hov-icon"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="1x"
                  className="hov-icon"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="1x"
                  className="hov-icon"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="1x"
                  className="hov-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
