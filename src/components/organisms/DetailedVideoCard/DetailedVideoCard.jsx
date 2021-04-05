import React from 'react';
import Grid from '../../atoms/Grid/Grid';
import ChannelWidget from '../ChannelWidget/ChannelWidget';
import Text from '../../atoms/Text/Text';

import { VideoMiniature } from '../../molecules';

const DetailedVideoCard = ({
  videoId,
  description,
  thumbnail,
  channelName,
  channelImage,
  videoTitle,
  videoDuration,
  ...other
}) => {
  return (
    <Grid direction="column" xs={12} xl={12} {...other}>
      <Grid xs={12}>
        <a href={`/watch/${videoId}`}>
          <VideoMiniature imageSource={thumbnail} duration={videoDuration} />
        </a>
      </Grid>
      <Grid xs={12} lg={12} xl={12} padding={{ top: 0.5 }}>
        <Text variant="h3">{videoTitle}</Text>
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
