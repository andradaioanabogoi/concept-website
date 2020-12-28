import React from "react";

import Grid from "@material-ui/core/Grid";
import useStyles from "./ContactStyles";
import { Typography } from "@material-ui/core";

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.heroContent}>
      <Typography>hello </Typography>
    </Grid>
  );
};

export default Contact;
