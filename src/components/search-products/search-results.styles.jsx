import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "20px",
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
    width: "100%",
    marginBottom: "40px",
  },
  grid: {
    flexGrow: 1,
  },
});
