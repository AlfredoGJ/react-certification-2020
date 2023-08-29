import React from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import Grid from '../../atoms/Grid/Grid';
import Text from '../../atoms/Text/Text';

const ChannelWidget = ({ imageSource, channelName }) => {
  return (
    <Grid direction="row" justify="flex-start">
      <Grid xl={2} lg={2} md={2} sm={2} xs={2}>
        <Avatar src={imageSource} size={2} shape="circle" />
      </Grid>
      <Grid xl={10} lg={10} md={10} sm={10} xs={10}>
        <Text>{channelName}</Text>
      </Grid>
    </Grid>
  );
};

ChannelWidget.propTypes = {};

export default ChannelWidget;
