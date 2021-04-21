import React, { useContext, useEffect } from 'react';
import Grid from '../../atoms/Grid/Grid';
import DetailedVideoCard from '../../organisms/DetailedVideoCard/DetailedVideoCard';
import StyledHome from './Home.styled';
import { GlobalContext } from '../../../providers/GlobalContext/GlobalContextProvider';
import useYouTubeSearch from '../../../utils/hooks/YouTubeAPI/YoutubeSearch/useYouTubeSearch';
import mockVideos from '../../../mock/mockVideos';

const Home = () => {
  const [state] = useContext(GlobalContext);
  const [searchResults, search] = useYouTubeSearch(mockVideos.items, 32);

  useEffect(() => {
    search(state.searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    search(state.lastSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.lastSearch]);

  return (
    <StyledHome>
      <Grid direction="" sm={12} padding={{ left: 3, right: 3, top: 6, bottom: 2 }}>
        {searchResults.map((video) => (
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
              videoDuration="3:16" // hardcoded meanwhile
              videoTitle={video.title}
              channelName={video.channelTitle}
              description={video.description}
              thumbnail={video.thumbnailHigh}
              channelImage="https://picsum.photos/100/100"
            />
          </Grid>
        ))}
      </Grid>
    </StyledHome>
  );
};

Home.propTypes = {};

export default Home;
