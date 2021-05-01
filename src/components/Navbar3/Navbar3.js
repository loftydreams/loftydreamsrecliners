import React from 'react';
import "./Navbar3.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
const Navbar3 = () => {
    return (
        <>
        <div className="navbar3-body">
            <span> Single Seater Recliners </span>
            <span> Living Room Recliners </span>
            <span> Home Theater Recliners </span>
            <span> Lounger Sofa </span>
            <span> Riser Recliners </span>
            <span> Recliner Chair {"&"}Sofa</span>
            
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
