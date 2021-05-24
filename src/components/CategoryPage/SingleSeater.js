import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

import "./SingleSeater.css";

const SingleSeater = () => {
  return (
    <div className="single-seater">
      <Breadcrumbs aria-label="breadcrumb" style={{ margin: "20px" }}>
        <Link color="inherit" to="/">
          HOME
        </Link>
        <Typography color="textPrimary">SINGLE SEATER RECLINERS </Typography>
      </Breadcrumbs>
      <br></br>
      <h2> SINGLE SEATER RECLINERS</h2>
      <div className="top-cat-page">
        <p className="single-seater-content">
          #1 Single Seater Recliners are the armchairs, that are used to keep
          your body and mind at rest. #1 Single Seater Recliner is for one
          person only and has more options than the 2 seater recliner, 3 seater
          recliner, etc. A person can go with rocker recliner, also go with
          rocker swivel recliner, these two functionality chairs are available
          in manual and electric mechanisms. Note:- Customization is possible
          just in the following manners: Dimension, Style, Upholstery shading,
          Quality of Upholstery (leatherette, fabric, faux leather), Upholstery
          type (Leatherette, Suede Fabric, Molfino Fabric), Mechanism type
          (manual or electric), Wood, Foam type. More options are available to
          add on single-seater recliner chairs like- USB ports, Swivel Tray, LED
          Lights, Cupholders, Touch Sensor Button, and so on.
        </p>
      </div>
      <div className="bottom-cat-page">
        <Link to="/electric">
          <div className="single-seater-1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/Manual%20Recliners%2FCatPagePhoto%2Flofty-dreams-recliner-chairs-scaled-247x296.jpg?alt=media&token=8b912872-85e0-49bf-8304-66b900b35e9e"
              alt=""
            />
            <span> ELECTRIC RECLINER</span> <br></br>
            <span> 25 PRODUCTS</span>
          </div>
        </Link>
        <Link to="/manual">
          <div className="single-seater-1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/Manual%20Recliners%2FCatPagePhoto%2F15-247x296.jpg?alt=media&token=d04465b9-23be-4939-9b04-f96368f47f5e"
              alt=""
            />
            <span> MANUAL RECLINER</span> <br></br>
            <span> 31 PRODUCTS</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleSeater;
