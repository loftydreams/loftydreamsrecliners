import React from 'react'
import "./LivingRoom.css";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


import { Button } from "@material-ui/core";



function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
export const Manual = () => {

    return (
        <div className="single-seater">
            <Breadcrumbs aria-label="breadcrumb" style={{margin: "20px"}}>
  <Link color="inherit" href="/" onClick={handleClick}>
   HOME
  </Link>
  <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
    RECLINERS
  </Link>
  
  <Typography color="textPrimary">MANUAL RECLINERS </Typography>
</Breadcrumbs>
<br></br>
            <h2> MANUAL RECLINERS</h2>
            <div className="top-cat-page">
              <p className="single-seater-content">Electric Recliners have a reclining motorized mechanism that is run by mains AC power. The footrest and backrest on the chair in this area, work together, and might be appropriate for a user who wishes to rest during the day. Also, termed as Motorized Recliner chair as it operates with the help of motor.
            <br></br>  <br></br> <span style={{fontWeight:600} }> Customize your Electric Recliner With the assistance of Lofty Dreams </span>

              <p className="sigle-seater-content"></p>

              If your requirement doesn’t meet with our product specification then we offer you another way to fulfill your requirement. Just make details with all the dimensions and design and contact us with it. Lofty Dreams will make your recliner with the help of your details.<br></br> <br></br>

Note:- Any alteration or customization is possible just in the accompanying manners: Dimension, Style, Upholstery shading, Upholstery type (Leatherette, Suede Fabric, Molfino Fabric), Quality of Upholstery (fabric, leatherette, faux leather), Mechanism type (manual or electric), Wood, Foam type.



</p>
            </div>
            <div className="bottom-cat-page">
                <div className="living-room-1">
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> MANUAL RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>

                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> MANUAL RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> MANUAL RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> MANUAL RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> MANUAL RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> MANUAL RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>

            </div>
           
           
            </div>
        </div>
    )
}
