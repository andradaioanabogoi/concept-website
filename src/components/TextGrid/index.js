import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const TextGrid = () => {
  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Album layout
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Something short and leading about the collection below—its contents, the creator, etc. Make
        it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
      </Typography>
    </Container>
  );
};

export default TextGrid;
