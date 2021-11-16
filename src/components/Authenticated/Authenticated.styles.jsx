import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
  },
  header: {
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px",
  },
});
