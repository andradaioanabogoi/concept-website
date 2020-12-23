import React from 'react';

import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardsGrid from '../CardsGrid';
import TextGrid from '../TextGrid';
import useStyles from './AppStyles';

const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <Grid className={classes.heroContent}>
        <Image src="https://source.unsplash.com/random" cover="true" aspectRatio="1/2" />
        <TextGrid />
        <CardsGrid />
        <Footer />
      </Grid>
    </React.Fragment>
  );
};
export default App;
