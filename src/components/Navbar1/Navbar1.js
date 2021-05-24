import { useEffect } from "react";
import { connect } from "react-redux";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

import { firestore } from "../../firebase";
import { updateCollections } from "../../redux/shop/shop.actions";

import "./Navbar1.css";

import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BiPhone, BiHome } from "react-icons/bi";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGoogle,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navbar1 = ({ updateCollections }) => {
  const [products, loading] = useCollectionDataOnce(
    firestore.collection("products"),
    { idField: "id" }
  );

  useEffect(() => {
    if (!loading) {
      updateCollections(products);
    }
  }, [loading, products, updateCollections]);

  return (
    <>
      <div className="navbar1-body">
        <div className="topbar-left">
          <div className="amazon-btn">
            <Button
              variant="contained"
              className="amazon"
              href="https://www.amazon.in/s?me=A1YF33ZDTB7JEG&marketplaceID=A21TJRUUN4KGV"
              target="_blank"
              style={{ fontSize: 12 }}
              rel="noreferrer"
            >
              buy from amazon
            </Button>
          </div>

          <div className="topbar-icons">
            <a
              className="social-icons"
              href="https://www.google.com/maps?q=Block+k-2/6+lane+no-1,+near+Amrita+Public+School,+Sangam+Vihar,+New+Delhi,+Delhi+110080 "
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineLocationMarker className="icon" />
            </a>
            <a
              className="social-icons"
              href="tel:+91 9899027251"
              target="_blank"
              rel="noreferrer"
            >
              <BiPhone className="icon" />
            </a>
            <a
              className="social-icons"
              href="mailto:loftydreams18@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail className="icon" />
            </a>
            <Link to="/">
              <BiHome className="icon" />{" "}
            </Link>
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-span">
            <Link to="/">
              {" "}
              <span> Home </span>{" "}
            </Link>
            <Link to="/about">
              <span> About</span>{" "}
            </Link>
            <Link to="/contactus">
              {" "}
              <span> Contact </span>{" "}
            </Link>
            <Link to="/feedback">
              {" "}
              <span> Feedback </span>{" "}
            </Link>
          </div>
          <div className="social-icons">
            <a
              href="https://www.youtube.com/channel/UCWnQE20f8xJTeXGIfjeAdYg"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                size="1x"
                className="hov-icon"
              />
            </a>
            <a
              href="https://www.facebook.com/lofty9716180374/"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a
              href="https://twitter.com/sumitoj80401927"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a
              href="https://www.instagram.com/loftydreams18"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/sumit-ojha-064172160"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a
              href="mailto:loftydreams18@gmail.com"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGoogle} size="1x" className="hov-icon" />
            </a>{" "}
            <a
              href="https://in.pinterest.com/loftydreams18/"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faPinterest}
                size="1x"
                className="hov-icon"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="topbar-hr"></hr>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collecionsMap) =>
    dispatch(updateCollections(collecionsMap)),
});

export default connect(null, mapDispatchToProps)(Navbar1);
