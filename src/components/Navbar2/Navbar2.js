import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../../firebase";

import Avatar from "@material-ui/core/Avatar";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { CgProfile } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import SideBar from "./Sidebar";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./Navbar2.css";

const Navbar2 = ({ hidden }) => {
  const [user] = useAuthState(auth);
  const [dropdown, toggleDropdown] = useState(false);

  const handleSignin = () => {
    signInWithGoogle().then(() => {
      toggleDropdown(!dropdown);
    });
  };

  const handleSignout = () => {
    auth.signOut().then(() => {
      toggleDropdown(!dropdown);
    });
  };

  return (
    <>
      <div className="navbar2-body" id="outer-nav">
        <div className="menu-btn">
          <SideBar />
        </div>
        <Link to="/">
          <div className="logo">
            <img alt="Logo" src="Image/loftyLogo.jpeg" />
          </div>
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />

          <SearchOutlinedIcon className="search-icon" />
        </div>
        {/*  <div className="navbarmid-right"> */}
        <div className="dropdown">
          {user ? (
            <Avatar
              style={{ width: "30px", height: "30px", margin: "0 20px" }}
              src={user?.photoURL}
              alt={user?.displayName}
              onClick={() => toggleDropdown(!dropdown)}
            />
          ) : (
            <CgProfile
              className="dropbtn logo-mid profile-logo"
              onClick={() => toggleDropdown(!dropdown)}
            />
          )}

          {dropdown && (
            <div className="dropdown-content">
              {user ? (
                <>
                  <span onClick={handleSignout}>
                    <ExitToAppIcon style={{ marginRight: "10px" }} />
                    SIGN OUT
                  </span>
                  <div className="user-details">
                    Signed in as {user.displayName}
                  </div>
                </>
              ) : (
                <span onClick={handleSignin}>
                  <FontAwesomeIcon
                    icon={faGoogle}
                    size="1x"
                    style={{ marginRight: "10px" }}
                  />
                  SIGN IN
                </span>
              )}
            </div>
          )}
        </div>

        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}

      <hr className="hr-mid"></hr>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Navbar2);
