import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgShoppingCart } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../../firebase";

const useStyles = makeStyles({
  list: {
    width: 240,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const history = useHistory();
  const [user] = useAuthState(auth);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleSignin = () => {
    signInWithGoogle();
  };

  const handleSignout = () => {
    auth.signOut();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: "Single Seater Recliners", link: "/single-seater" },
          { text: "Living Room Recliners", link: "/living-room" },
          { text: "Home Theater Recliners", link: "/home-theater" },
          { text: "Lounger Sofa", link: "/lounger" },
          { text: "Riser Recliner", link: "/riser" },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.link)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {user ? (
          <>
            <ListItem button>
              <ListItemIcon>
                <Avatar
                  style={{ height: "30px", width: "30px" }}
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
              </ListItemIcon>
              <ListItemText secondary={`Signes in as ${user.displayName}`} />
            </ListItem>
            <ListItem button onClick={handleSignout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="SIGN OUT" />
            </ListItem>
          </>
        ) : (
          <ListItem button onClick={handleSignin}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faGoogle} size="1x" />
            </ListItemIcon>
            <ListItemText primary="SIGN IN" />
          </ListItem>
        )}
        <ListItem button onClick={() => history.push("/checkout")}>
          <ListItemIcon>
            <CgShoppingCart size="25px" />
          </ListItemIcon>
          <ListItemText primary="CHECKOUT" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <GiHamburgerMenu className="logo-mid" />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </div>
  );
}
