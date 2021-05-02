import React from 'react';
import "./Navbar3.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom';
const Navbar3 = () => {
    return (
        <>
        <div className="navbar3-body">
   <Link to ="/single-seater">        <span> Single Seater Recliners </span> </Link>
    <Link to ="/living-room">      <span> Living Room Recliners </span> </Link>  
      <Link to="/home-theater"  >    <span> Home Theater Recliners </span> </Link>
       <Link to="/lounger" >  <span> Lounger Sofa </span>  </Link>
        <Link to ="/riser" >   <span> Riser Recliners </span> </Link> 
         
            
        </div>
        <div className="search-bar-bottom">
                <input type="text" placeholder="Search..."  className="search-input-bottom" />
              
          
            <SearchOutlinedIcon className="search-icon-bottom" />
            </div>
        <hr className="hr-bottom"></hr>
        </>
    )
}

export default Navbar3
