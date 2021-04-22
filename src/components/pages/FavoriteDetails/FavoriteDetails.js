import React from 'react';
import Text from '../../atoms/Text/Text';
import Grid from '../../atoms/Grid/Grid';
import { VideoMiniature } from '../../molecules';

const FavoriteDetails = ({ video }) => {
  console.log(video);
  return (
    <Grid sm={12} padding={{ left: 0, right: 0, top: 6, bottom: 2 }} direction="column">
      <Grid xs={12} direction="row">
        <Grid xs={12} sm={12} lg={6} xl={6} padding={{ bottom: 2, left: 2, right: 2 }}>
          <VideoMiniature imageSource={video.thumbnailHigh} />
        </Grid>
        <Grid sm={12} lg={6} xl={6} direction="column" padding={{ left: 2, right: 2 }}>
          <Grid sm={12} direction="column">
            <Text variant="h2">Title</Text>
            <Text variant="body">{video.title}</Text>
          </Grid>
          <Grid sm={12} direction="column">
            <Text variant="h2">Duration</Text>
            <Text variant="body">{video.duration}</Text>
          </Grid>
          <Grid sm={12} direction="column">
            <Text variant="h2">Views</Text>
            <Text variant="body">{video.viewCount}</Text>
          </Grid>
          <Grid sm={12} direction="column">
            <Text variant="h2">Likes</Text>
            <Text variant="body">{video.likeCount}</Text>
          </Grid>
          <Grid sm={12} direction="column">
            <Text variant="h2">Dislikes</Text>
            <Text variant="body">{video.dislikeCount}</Text>
          </Grid>
        </Grid>
      </Grid>
      <Grid sm={12} direction="column" padding={{ bottom: 2, left: 2, right: 2 }}>
        <Text variant="h2">Description</Text>
        <Text variant="body">{video.description}</Text>
      </Grid>
    </Grid>
  );
};

export default FavoriteDetails;
