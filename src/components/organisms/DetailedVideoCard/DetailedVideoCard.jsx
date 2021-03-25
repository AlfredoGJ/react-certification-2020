import React from 'react';
import Grid from '../../atoms/Grid/Grid';
import ChannelWidget from '../ChannelWidget/ChannelWidget';
import Text from '../../atoms/Text/Text';

import CardImage from './DetailedVideoCard.styled'

const DetailedVideoCard = ({
  description,
  thumbnail,
  channelName,
  channelImage,
  videoTitle,
}) => {
  return (
    <Grid direction="column" xs={12} padding={{ top: 1, left: 1, right: 1, bottom: 1 }}>
      <Grid xs={12}>
        <CardImage src={thumbnail} />
      </Grid>
      <Grid xs={12} padding={{ top: 0.5 }}>
        <Text variant="body">{videoTitle}</Text>
      </Grid>
      <Grid xs={12}>
        <Text variant="body2">{description}</Text>
      </Grid>
      <Grid xs={12} padding={{ top: 0.5 }}>
        <ChannelWidget channelName={channelName} imageSource={channelImage} />
      </Grid>
    </Grid>
  );
};

DetailedVideoCard.propTypes = {};

export default DetailedVideoCard;
