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
export const Riser = () => {

    return (
        <div className="single-seater">
            <Breadcrumbs aria-label="breadcrumb" style={{margin: "20px"}}>
  <Link color="inherit" href="/" onClick={handleClick}>
   HOME
  </Link>
  <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
    RECLINERS
  </Link>
  <Typography color="textPrimary">RISER RECLINERS </Typography>
</Breadcrumbs>
<br></br>
            <h2> RISER RECLINERS</h2>
            <div className="top-cat-page">
              <p className="single-seater-content">Home Theater Recliners chair is a luxurious chair generally used in Multiplex, PVR Theater, concert, Hotel, and many more where they needed the new level of comfort. They take 5 times more than the normal charge for this chair. This chair comes only in the motorized mechanism. This chair also known as PVR Recliner Chairs as generally installed in most of the PVR Theater.


              <p className="sigle-seater-content"></p>

              Note:- Customization just in the following manners: Dimension, Style, Quality of Upholstery (leatherette, fabric, faux leather), Upholstery shading, Upholstery type (Leatherette, Suede Fabric, Molfino Fabric), Mechanism type (manual or electric), Wood, Foam type.



</p>
            </div>
            <div className="bottom-cat-page">
                <div className="living-room-1">
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> RISER RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>

                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> RISER RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> RISER RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> RISER RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> RISER RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> RISER RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>

            </div>
           
           
            </div>
        </div>
    )
}
