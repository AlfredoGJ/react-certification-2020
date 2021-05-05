import React from 'react';
import { Skeleton } from '@material-ui/lab';
import Grid from '../../atoms/Grid/Grid';

const VideoSkeleton = () => {
  return (
    <Grid direction="column">
      <Grid padding={{ bottom: 1 }}>
        <Skeleton width="100%" variant="rect" height="8rem" />
      </Grid>
      <Grid padding={{ bottom: 1 }}>
        <Skeleton width="100%" variant="rect" />
      </Grid>

      <Grid direction="row" alignItems="center">
        <Grid sm={2} xl={2}>
          <Skeleton width="1.8rem" height="1.8rem" variant="circle" />
        </Grid>
        <Grid sm={10} xl={10}>
          <Skeleton width="100%" variant="rect" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VideoSkeleton;
