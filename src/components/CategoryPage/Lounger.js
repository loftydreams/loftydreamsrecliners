import React from 'react'
import "./LivingRoom.css";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Card from '../Card/Card';

import { Button } from "@material-ui/core";



function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
export const Lounger = () => {

    return (
        <div className="single-seater">
            <Breadcrumbs aria-label="breadcrumb" style={{margin: "20px"}}>
  <Link color="inherit" href="/" onClick={handleClick}>
   HOME
  </Link>
  <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
    RECLINERS
  </Link>
  <Typography color="textPrimary">LOUNGER SOFA RECLINERS </Typography>
</Breadcrumbs>
<br></br>
            <h2> LOUNGER SOFA RECLINERS</h2>
          
            <div className="top-cat-page">
              <p className="single-seater-content">Lofty Dreams Recliners offer you a modern collection of lounger sofa designed by passionate skilled workers under various ranges. For your home, you can select a recliner lounger that is available on any of the sides whether it is in the left or right configurations.
<p/>
              <h4> Choose the right Recliner Lounger Sofa for Living Room </h4> 
              <p className="sigle-seater-content"></p>

              Choosing the recliner lounger right plays an important role in the enjoyment of your living room. When you come to purchasing the best recliner lounger for your home décor, Comfort and Quality should be the only priority rather than price sensitiveness. Have a look at our wide range of lounger chairs with plenty of space.

Note:- Any changes or customization is possible only in the following ways: Dimension/Size, Style, Upholstery color, Mechanism type (manual or electric), Upholstery varieties (Leatherette, Molfino Fabric, Suede Fabric).

-12%
Recliner




</p>
            </div>
            <div className="bottom-cat-page">
                <div className="living-room-1">
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> LOUNGER SOFA RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>

                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> LOUNGER SOFA RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> LOUNGER SOFA RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> LOUNGER SOFA RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> LOUNGER SOFA RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>
                  <div className="new-card-wrapper">
                    <img src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/08/Aerio-5-Seater-L-Shape-Recliner-Sofa-Tan-In-Suede-Fabric-by-Lofty-Dreams-Recliners-1-247x296.jpg" alt="" />
                    <span> LOUNGER SOFA RECLINER</span>
                    <h5> Aerio 5 Seater L Shape Recliner Sofa (Tan) </h5>
                    <del> 225000</del> <span style={{fontSize:"14px"}}> 165000</span> <br></br>
                    <Button variant="contained" color ="primary" size="small" > Add to Basket </Button>
                    
                  </div>

            </div>
           
           
            </div>
        </div>
    )
}
