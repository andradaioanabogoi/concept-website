import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "block",
    flexDirection: "column",
  },
  cover: {
    minWidth: 250,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));
const CoupleCards = (props) => {
  const classes = useStyles();
  const { card } = props;

  return (
    <React.Fragment>
      <Card className={classes.root}>
        {card.title % 2 === 0 ? (
          <CardMedia
            className={classes.cover}
            image={card.image}
            title={card.title}
          />
        ) : null}
        <div className={classes.details}>
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
              {card.text}
            </Typography>
          </CardContent>
        </div>
        {card.title % 2 === 1 ? (
          <CardMedia
            className={classes.cover}
            image={card.image}
            title={card.title}
          />
        ) : null}
      </Card>
    </React.Fragment>
  );
};
export default CoupleCards;
