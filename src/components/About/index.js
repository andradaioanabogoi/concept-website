import React from "react";

import Grid from "@material-ui/core/Grid";

import CoupleCards from "./CoupleCards";
import cardsData from "./cardsData";
import useStyles from "./AboutStyles";

const About = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={24}
      style={{ minHeight: "100vh" }}
      justify="center"
      className={classes.container}
    >
      <Grid item xs={6}>
        {cardsData.map((card) => {
          return <CoupleCards card={card} />;
        })}
      </Grid>
    </Grid>
  );
};

export default About;
