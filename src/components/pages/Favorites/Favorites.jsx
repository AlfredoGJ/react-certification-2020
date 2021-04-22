import React from 'react';
import Grid from '../../atoms/Grid/Grid';
import DetailedVideoCard from '../../organisms/DetailedVideoCard/DetailedVideoCard';
import useYouTubeVideo from '../../../utils/hooks/YouTubeAPI/YouTubeVideo/useYouTubeVideo';

const Favorites = ({ favoritesStr }) => {
  console.log(favoritesStr);
  const [videos] = useYouTubeVideo(favoritesStr, [], false);

  return (
    <Grid padding={{ left: 3, right: 3, top: 6, bottom: 2 }}>
      {videos.map((video) => (
        <Grid
          xs={12}
          md={6}
          lg={3}
          xl={3}
          padding={{ top: 1, left: 1, right: 1, bottom: 1 }}
        >
          <DetailedVideoCard
            videoId={video.id}
            key={video.id}
            videoTitle={video.title}
            channelName={video.channelTitle}
            description={video.descriptionShort}
            thumbnail={video.thumbnailHigh}
            channelImage="https://picsum.photos/100/100"
            targetBase="/profile/favorites"
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Favorites;
