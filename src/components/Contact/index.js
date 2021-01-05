import React from "react";

import Grid from "@material-ui/core/Grid";
import useStyles from "./ContactStyles";
import { Typography } from "@material-ui/core";

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={12}
      style={{ minHeight: "87vh" }}
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom color="textSecondary">
          Send me an email at
        </Typography>
        <Typography variant="h3" gutterBottom color="textSecondary">
          corina.oprea@gmail.com
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Contact;
