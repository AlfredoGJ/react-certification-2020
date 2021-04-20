import React from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import Grid from '../../atoms/Grid/Grid';
import Text from '../../atoms/Text/Text';

const ChannelWidget = ({ imageSource, channelName }) => {
  return (
    <Grid direction="row" xs={12}>
      <Grid xs={1} sm={1} md={1} lg={1} xl={1}>
        <Avatar src={imageSource} size={1.5} shape="circle" />
      </Grid>
      <Grid xs={11} sm={11} md={11} lg={11} xl={11} padding={{ left: 0.5 }}>
        <Text>{channelName}</Text>
      </Grid>
    </Grid>
  );
};

ChannelWidget.propTypes = {};

export default ChannelWidget;
