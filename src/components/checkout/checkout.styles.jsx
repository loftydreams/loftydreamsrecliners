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
  checkoutTotal: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "20px",
  },
  "@media (max-width: 900px)": {
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
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
