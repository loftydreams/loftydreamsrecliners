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
  },
  table: {
    minWidth: 650,
    maxWidth: 900,
  },
  checkoutTotal: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      display: "flex",
      justifyContent: "center",
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
