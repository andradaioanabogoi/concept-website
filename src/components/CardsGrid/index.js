import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import cx from "clsx";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";

import useStyles from "./CardsGridStyles";
import photography from "./photography.jpg";
import video from "./video.jpg";
import collage from "./collage.jpg";

const CardsGrid = () => {
  const classes = useStyles();

  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardsData = [
    {
      label: "Photography",
      link: "/portofolio/photography",
      imageUrl: photography,
    },
    {
      label: "Video",
      link: "/portofolio/video",
      imageUrl: video,
    },
    {
      label: "Collage",
      link: "/portofolio/collage",
      imageUrl: collage,
    },
  ];
  return (
    <Container className={classes.cardGrid}>
      <Grid container>
        {cardsData.map((card) => (
          <Grid item key={card.label} xs={12} sm={6} md={4}>
            <Card className={cx(classes.root, shadowStyles.root)}>
              <CardMedia classes={mediaStyles} image={card.imageUrl} />
              <CardActionArea>
                <CardContent className={classes.content}>
                  <Box
                    {...{
                      display: "flex",
                      component: RouterLink,
                      to: card.link,
                      flexDirection: "column",
                      alignItems: "center",
                      style: { textDecoration: "none" },
                      justifyContent: "center",
                      minHeight: 200,
                      color: "common.white",
                      textAlign: "center",
                    }}
                  >
                    <h1 className={classes.title}>{card.label}</h1>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardsGrid;
