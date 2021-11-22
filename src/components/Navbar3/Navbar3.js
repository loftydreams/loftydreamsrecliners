import { Link } from "react-router-dom";
import SearchBar from "../search-products/search-bar";

import "./Navbar3.css";

const Navbar3 = () => {
  return (
    <>
      <div className="navbar3-body">
      <Link to="/all-recliners">
          <span> Trending </span>
        </Link>
        <Link to="/single-seater">
          <span> Single Seater Recliners </span>
        </Link>
        <Link to="/living-room">
          <span> Living & Lounger Recliners </span>
        </Link>
        <Link to="/home-theater">
          <span> Home Theater Recliners </span>
        </Link>
        
        <Link to="/riser">
          <span> Riser Recliners </span>
        </Link>
      </div>
      <SearchBar cname="search-bar-bottom" />
      <hr className="hr-bottom"></hr>
    </>
  );
};

export default Navbar3;
