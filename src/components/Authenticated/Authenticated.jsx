import { useAuthState } from "react-firebase-hooks/auth";
import { useStyles } from "./Authenticated.styles";
import Button from "@material-ui/core/Button";

import Loader from "../Loader/Loader";

import { auth, signInWithGoogle } from "../../firebase";

const Authenticated = ({ children }) => {
  const classes = useStyles();
  const [user, loading, error] = useAuthState(auth);

  if (loading && !error) {
    return <Loader />;
  }

  if (user && !loading && !error) {
    return children;
  }

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>Sign in is required before proceeding!</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => signInWithGoogle()}
      >
        Sign In with Google
      </Button>
    </div>
  );
};

export default Authenticated;
