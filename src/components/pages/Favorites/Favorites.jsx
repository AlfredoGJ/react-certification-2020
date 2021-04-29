import React, { useState, useEffect } from 'react';
import { Backpack } from 'react-kawaii';
import Grid from '../../atoms/Grid/Grid';
import DetailedVideoCard from '../../organisms/DetailedVideoCard/DetailedVideoCard';
import Text from '../../atoms/Text/Text';
import VideoSkeleton from '../../molecules/VideoSkeleton/VideoSkeleton';

const Favorites = ({ videos }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [videos]);

  return (
    <>
      {loading ? (
        <Grid padding={{ left: 3, right: 3, top: 6, bottom: 2 }}>
          {[1, 1, 1, 1, 1, 1, 1, 1].map(() => (
            <Grid
              xs={12}
              md={6}
              lg={3}
              xl={3}
              padding={{ top: 1, left: 1, right: 1, bottom: 1 }}
            >
              <VideoSkeleton />
            </Grid>
          ))}
        </Grid>
      ) : videos.length === 0 ? (
        <Grid
          padding={{ left: 3, right: 3, top: 12, bottom: 2 }}
          direction="column"
          alignItems="center"
        >
          <Backpack size={200} mood="sad" color="#7DDED1" />
          <Grid justify="center">
            <Text variant="h2">No favorites found</Text>
          </Grid>
          <Grid justify="center">
            <Text variant="body">You dont have any favorites still.</Text>
          </Grid>
        </Grid>
      ) : (
        videos.length > 0 && (
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
                  id={video.id}
                  data-testid="fav-video"
                  videoId={video.id}
                  key={video.id}
                  videoTitle={video.title}
                  channelName={video.channelTitle}
                  description={video.descriptionShort}
                  thumbnail={video.thumbnailHigh}
                  channelImage="https://picsum.photos/100/100"
                  targetBase="/profile/favorites"
                  favable
                />
              </Grid>
            ))}
          </Grid>
        )
      )}
    </>
  );
};

export default Favorites;
