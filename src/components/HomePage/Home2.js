import React from 'react'
import "./Home2.css";
import { Home2Card } from './Home2Card';
import {Link} from 'react-router-dom';
export const Home2 = () => {
    return (
        <div className="home2-body">
            <h3> SHOP BY CATEGORIES</h3>
            <div className="home2-top">
   <Link to="/living-room">      <Home2Card src="https://www.loftydreamsrecliners.com/wp-content/uploads/2013/08/LR-158-247x296.jpg" name="LIVING ROOM RECLINERS" qt="13 PRODUCTS"/> </Link>   
    <Link to="/home-theater" >       <Home2Card src="https://www.loftydreamsrecliners.com/wp-content/uploads/2021/02/Lofty-Dreams-Black-Home-Theater-Recliner-e1613484668369-247x296.jpg" name="HOME THEATER RECLINERS" qt="13 PRODUCTS"/> </Link>
    <Link to="/lounger" >       <Home2Card src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/07/Recliners-Manufacturer-by-Lofty-Dreams-Recliners-Pvt.-Ltd.-247x296.jpg" name="LOUNGER SOFA" qt = "12 PRODUCTS"/>  </Link> 
             
           </div>
            <div className="home2-bottom">
           <Home2Card src="https://www.loftydreamsrecliners.com/wp-content/uploads/2021/02/20190704_123721-247x296.jpg" name="RECLINER CHAIR & SOFA" qt="93 PRODUCTS"/>
  <Link to="/riser">        <Home2Card src="https://www.loftydreamsrecliners.com/wp-content/uploads/2021/02/Lofty-Dreams-Riser-Recliner-for-old-age-people-247x296.jpg" name="RISER RECLINERS" qt="1 PRODUCT" />  </Link> 
  <Link to="/single-seater">       <Home2Card src="https://www.loftydreamsrecliners.com/wp-content/uploads/2021/02/Lofty-Recliners-247x296.jpg" name="SINGLE SEATER RECLINERS" qt="56 PRODUCTS"/>   </Link>  
            </div>
        </div>
    )
}
