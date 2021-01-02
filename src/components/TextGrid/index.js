import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textGrid: {
    paddingTop: "100px",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TextGrid = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.textGrid}>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        hărtia se pierde, laptop-urile se strică dar internetul rămăne(parțial
        și discutabil). pe acest motiv m-am hotărăt să creez un spațiu de
        stocare pentru toate experimentele mele poetice-artistice. nu pretind a
        fi cele mai bune creații, multe dintre ele fiind "raw", dar fiecare
        reprezintă căte o poveste sau o stare și de aceea le iubesc așa cum
        sunt. pentru cei care s-au ratăcit și au ajuns aici: bun venit în
        fragmentul minții mele!
      </Typography>
    </Container>
  );
};

export default TextGrid;
