import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import useStyles from './FooterStyles';

const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container className={classes.cardGrid}>
        <Grid item lg className={classes.social}>
          <a href="https://www.youtube.com/user/TeslaMotors" className={classes.youtube}>
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </Grid>
        <Grid item lg>
          <a href="https://www.facebook.com/groups/ElonMusk" className={classes.facebook}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </Grid>
        <Grid item lg>
          <a href="https://twitter.com/elonmusk" className={classes.twitter}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </Grid>
        <Grid item lg>
          <a href="https://www.instagram.com/elonmusk" className={classes.instagram}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Footer;
