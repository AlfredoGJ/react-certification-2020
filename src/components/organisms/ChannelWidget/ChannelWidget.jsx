import React from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import Grid from '../../atoms/Grid/Grid';

const ChannelWidget = ({ imageSource, channelName }) => {
  return (
    <Grid>
      <Grid width={1}>
        <Avatar src={imageSource} size={1.5} shape="circle" />
      </Grid>
      <Grid width={11} padding={{ left: 0.5 }}>
        {channelName}
      </Grid>
    </Grid>
  );
};

ChannelWidget.propTypes = {};

export default ChannelWidget;
