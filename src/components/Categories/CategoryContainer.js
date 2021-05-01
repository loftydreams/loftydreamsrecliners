import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CategoryCard from "./CategoryCard";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "900px",
  },
});

const CategoryContainer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center" spacing={2}>
      <Grid item>
        <CategoryCard />
      </Grid>
      <Grid item>
        <CategoryCard />
      </Grid>
      <Grid item>
        <CategoryCard />
      </Grid>
      <Grid item>
        <CategoryCard />
      </Grid>
    </Grid>
  );
};

export default CategoryContainer;
