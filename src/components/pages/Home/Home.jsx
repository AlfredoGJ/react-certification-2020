import React from 'react';
import styled from 'styled-components';
import Grid from '../../atoms/Grid/Grid';
import DetailedVideoCard from '../../organisms/DetailedVideoCard/DetailedVideoCard';
import mockVideos from '../../../mock/mockVideos';

const StyledHome = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

const Home = () => {
  return (
    <StyledHome>
      <Grid width={12} padding={{ left: 3, right: 3, top: 6, bottom: 2 }}>
        {mockVideos.items.map((video) => (
          <Grid width={3}>
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
