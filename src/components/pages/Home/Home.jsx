import React, { useContext, useEffect, useState } from 'react';
import Grid from '../../atoms/Grid/Grid';
import DetailedVideoCard from '../../organisms/DetailedVideoCard/DetailedVideoCard';
import { GlobalContext } from '../../../providers/GlobalContext/GlobalContextProvider';
import useYouTubeSearch from '../../../utils/hooks/YouTubeAPI/YoutubeSearch/useYouTubeSearch';
import mockVideos from '../../../mock/mockVideos';
import VideoSkeleton from '../../molecules/VideoSkeleton/VideoSkeleton';

const channelImagePlaceholder = require('../../../assets/img/default-user.jpg');

const Home = () => {
  const [state] = useContext(GlobalContext);
  const [searchResults, search] = useYouTubeSearch(mockVideos.items, 12);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    search(state.searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    search(state.lastSearch);
    setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.lastSearch]);

  useEffect(() => {
    if (searchResults.length > 0)
      setTimeout(() => {
        setLoading(false);
      }, 700);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log('video results changed');
  }, [searchResults]);

  return (
    <Grid direction="" sm={12} padding={{ left: 3, right: 3, top: 6, bottom: 2 }}>
      {loading
        ? [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
            <Grid
              xs={12}
              md={6}
              lg={3}
              xl={3}
              padding={{ top: 4, left: 1, right: 1, bottom: 1 }}
            >
              <VideoSkeleton />
            </Grid>
          ))
        : searchResults.map((video) => (
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
                thumbnail={video.thumbnailMedium}
                channelImage={video.channelThumb || channelImagePlaceholder}
                showChannel
                targetBase="/watch"
              />
            </Grid>
          ))}
    </Grid>
  );
};

Home.propTypes = {};

export default Home;
