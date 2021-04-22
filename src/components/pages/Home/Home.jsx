import React, { useContext, useEffect } from 'react';
import Grid from '../../atoms/Grid/Grid';
import DetailedVideoCard from '../../organisms/DetailedVideoCard/DetailedVideoCard';
import { GlobalContext } from '../../../providers/GlobalContext/GlobalContextProvider';
import useYouTubeSearch from '../../../utils/hooks/YouTubeAPI/YoutubeSearch/useYouTubeSearch';
import mockVideos from '../../../mock/mockVideos';

const channelImagePlaceholder = require('../../../assets/img/default-user.jpg');

const Home = () => {
  const [state] = useContext(GlobalContext);
  const [searchResults, search] = useYouTubeSearch(mockVideos.items, 8);
  useEffect(() => {
    search(state.searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    search(state.lastSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.lastSearch]);

  return (
    <>
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
              videoTitle={video.title}
              channelName={video.channelTitle}
              description={video.descriptionShort}
              thumbnail={video.thumbnailHigh}
              channelImage={channelImagePlaceholder}
              showChannel
              targetBase="/watch"
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

Home.propTypes = {};

export default Home;
