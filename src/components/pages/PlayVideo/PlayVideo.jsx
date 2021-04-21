import React, { useRef, useEffect } from 'react';
import Grid from '../../atoms/Grid/Grid';
import DetailedVideoCard from '../../organisms/DetailedVideoCard/DetailedVideoCard';
import YoutubeEmbed from '../../atoms/YouTubeEmbed/YouTubeEmbed';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import { StyledPlayVideo, VideoList } from './PlayVideo.styled';

const PlayVideo = ({ video, relatedVideos }) => {
  const listRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      listRef.current.scrollTo({ behavior: 'smooth', top: 0 });
      console.log(listRef.current);
    }, 1000);
  }, [relatedVideos]);

  return (
    <StyledPlayVideo>
      <Grid padding={{ left: 3, right: 3, top: 6, bottom: 2 }} lg={12}>
        <Grid lg={7} direction="column">
          <Grid lg={12}>
            <YoutubeEmbed embedId={video.id} />
          </Grid>
          <Grid padding={{ top: 1, bottom: 1 }}>
            <Grid xl={10}>
              <Text variant="h2">{video.title}</Text>
            </Grid>

            <Grid xl={2}>
              <Button variant="primary">add to favorites</Button>
            </Grid>
          </Grid>
          <Grid>
            <Text variant="body2">{video.description}</Text>
          </Grid>
        </Grid>

        <VideoList lg={5} xl={5} direction="column" padding={{ left: 2 }} ref={listRef}>
          {relatedVideos.map((relatedVideo) => {
            return (
              <DetailedVideoCard
                data-testid="related-video"
                id={relatedVideo.id}
                videoId={relatedVideo.id}
                key={relatedVideo.id}
                videoTitle={relatedVideo.title}
                thumbnail={relatedVideo.thumbnailMedium}
                description={relatedVideo.description}
              />
            );
          })}
        </VideoList>
      </Grid>
    </StyledPlayVideo>
  );
};

PlayVideo.propTypes = {};

export default PlayVideo;
