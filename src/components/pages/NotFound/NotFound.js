import React from 'react';
import { Browser } from 'react-kawaii';
import Grid from '../../atoms/Grid/Grid';
import Text from '../../atoms/Text/Text';

const NotFound = () => {
  return (
    <Grid
      padding={{ left: 3, right: 3, top: 10, bottom: 2 }}
      direction="column"
      alignItems="center"
    >
      <Browser size={200} mood="sad" color="#7DDED1" />
      <Grid justify="center">
        <Text variant="h2">404 - Not Found</Text>
      </Grid>
      <Grid justify="center">
        <Text variant="body">Sorry, the page you are looking for is not available.</Text>
      </Grid>
    </Grid>
  );
};

export default NotFound;
