import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '../../atoms/Grid/Grid';
import ChannelWidget from '../ChannelWidget/ChannelWidget';
import Text from '../../atoms/Text/Text';
import { VideoMiniature } from '../../molecules';
import useFavorites from '../../../utils/hooks/useFavorites/useFavorites';

const DetailedVideoCard = ({
  videoId,
  description,
  thumbnail,
  channelName,
  channelImage,
  videoTitle,
  videoDuration,
  targetBase,
  showChannel,
  favable,
  onFabClick,
  ...other
}) => {
  const [isFab, toggle] = useFavorites(videoId);

  function handleFabClick(e) {
    e.preventDefault();
    toggle();
  }

  return (
    <Grid direction="column" xs={12} xl={12} {...other}>
      <Grid xs={12}>
        <Link to={`${targetBase}/${videoId}`}>
          <VideoMiniature
            imageSource={thumbnail}
            duration={videoDuration}
            favable={favable}
            isFav={isFab}
            onFabClick={handleFabClick}
          />
        </Link>
      </Grid>
      <Grid xs={12} lg={12} xl={12} padding={{ top: 0.5 }}>
        <Text variant="h3">{videoTitle}</Text>
      </Grid>
      <Grid xs={12}>
        <Text variant="body2">{description}</Text>
      </Grid>
      {showChannel && (
        <Grid xs={12} padding={{ top: 0.5 }}>
          <ChannelWidget channelName={channelName} imageSource={channelImage} />
        </Grid>
      )}
    </Grid>
  );
};

DetailedVideoCard.propTypes = {};

export default DetailedVideoCard;
