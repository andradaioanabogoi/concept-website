import React from "react";

import Grid from "@material-ui/core/Grid";
import useStyles from "./BlogStyles";
import { Typography } from "@material-ui/core";

const Blog = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.heroContent}>
      <Typography>hello </Typography>
    </Grid>
  );
};

export default Blog;
