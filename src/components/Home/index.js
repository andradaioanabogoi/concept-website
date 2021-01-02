import React from "react";

import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";

import Footer from "../Footer/Footer";
import CardsGrid from "../CardsGrid";
import TextGrid from "../TextGrid";
import useStyles from "./HomeStyles";
import logo from "./logo.jpg";

const Home = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.heroContent}>
      <Image src={logo} cover="true" aspectRatio="1/2" />
      <TextGrid />
      <CardsGrid />
      <Footer />
    </Grid>
  );
};

export default Home;
