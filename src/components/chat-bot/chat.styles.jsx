import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  icon: {
    position: "fixed",
    zIndex: "1000",
    bottom: "10px",
    right: "10px",
  },
  card: {
    backgroundColor: "white",
    height: "400px",
    width: "290px",
    border: "1px solid black",
    position: "absolute",
    zIndex: "1000",
    bottom: "60px",
    right: "5px",
    color: "white",
  },
  header: {
    width: "100%",
    textAlign: "center",
    "& h2": {
      backgroundColor: "black",
      color: "white",
      fontSize: "18px",
      padding: "7px 0",
    },
    "& h3": {
      fontSize: "15px",
      color: "black",
    },
  },
  chat: {
    display: "flex",
    flexDirection: "column",
    height: "300px",
    overflowY: "scroll",
    color: "black",
  },
});
