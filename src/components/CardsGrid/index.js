import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";

import useStyles from "./CardsGridStyles";

const CardsGrid = () => {
  const classes = useStyles();
  const cards = [1, 2, 3];
  return (
    <Container className={classes.cardGrid}>
      <Grid container>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardsGrid;
