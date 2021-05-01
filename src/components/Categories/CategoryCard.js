import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "220px",
    width: "180px",
    margin: "5px",
    "& img": {
      width: "100%",
      height: "200px",
    },
    "& p": {
      height: "20px",
    },
  },
});

const CategoryCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="https://images.unsplash.com/photo-1565374395542-0ce18882c857?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNvZmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        alt="category icon"
      />
      <p>
        - <span>category name</span>
      </p>
    </div>
  );
};

export default CategoryCard;
