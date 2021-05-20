import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    margin: "10px 20px 30px 20px",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    marginBottom: "10px",
    fontFamily: "Roboto",
    textAlign: "center",
    "& h2": {
      width: "100%",
      fontSize: "25px",
      fontWeight: "600",
    },
    "& hr": {
      marginTop: "-10px",
      overflow: "visible",
    },
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
  itemsContainer: {
    flex: 1,
    overflowX: "auto",
  },
  items: {
    display: "flex",
    minWidth: "min-content",
  },
  item: {
    backgroundColor: "white",
    height: "130px",
    width: "120px",
    margin: "0 5px",
    padding: "2px",
    cursor: "pointer",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "200px",
    backgroundColor: "white",
    border: "1px solid blue",
    margin: "0 5px 0 20px",
    padding: "10px",
    "@media(max-width: 768px)": {
      display: "none",
    },
  },
  button: {
    width: "100%",
    margin: "5px 0",
  },
});
