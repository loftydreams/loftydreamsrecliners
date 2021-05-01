import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  productImg: {
    maxWidth: "150px",
    minWidth: "100px",
  },
  quantity: {
    display: "flex",
    flexDirection: "row",
    "& div": {
      margin: "0 10px",
      cursor: "pointer",
    },
  },
  remove: {
    cursor: "pointer",
  },
});
