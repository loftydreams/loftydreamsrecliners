import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "grid",
    placeItems: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",

    "& .MuiBreadcrumbs-root": {
      marginBottom: "20px",
    },
  },
  headerSec: {
    display: "flex",
    backgroundColor: "#fff",
    border: "1px solid blue",
    borderRadius: "5px",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5px 10px",
    padding: "5px",

    "& h5": {
      margin: "auto 10px",
      fontStyle: "italic",
    },
  },
  checkoutTotal: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    marginBottom: "20px",
  },
  "@media (max-width: 900px)": {
    grid: {
      display: "grid",
      gap: "15px",
    },
  },
  card: {
    maxWidth: 349,
    minWidth: 311,
    margin: "20px 0",
  },
  text: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    width: "100%",
  },
});
