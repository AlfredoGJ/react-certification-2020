import React, { useContext } from 'react';
import Grid from '../../atoms/Grid/Grid';
import DetailedVideoCard from '../../organisms/DetailedVideoCard/DetailedVideoCard';
import StyledHome from './Home.styled';
import { YoutubeSearchContext } from '../../../providers/Youtube/SearchProvider';

const Home = () => {
  const [searchResults] = useContext(YoutubeSearchContext);
  console.log(searchResults);
  return (
    <StyledHome>
      <Grid direction="" sm={12} padding={{ left: 3, right: 3, top: 6, bottom: 2 }}>
        {searchResults.items.map((video) => (
          <Grid xs={12} md={6} lg={3} xl={3}>
            <DetailedVideoCard
              videoTitle={video.snippet.title}
              channelName={video.snippet.channelTitle}
              description={video.snippet.description}
              thumbnail={video.snippet.thumbnails.high.url}
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
