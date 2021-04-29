import React, { useRef, useEffect, useContext, useState } from 'react';
import Grid from '../../atoms/Grid/Grid';
import DetailedVideoCard from '../../organisms/DetailedVideoCard/DetailedVideoCard';
import YoutubeEmbed from '../../atoms/YouTubeEmbed/YouTubeEmbed';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import { GlobalContext } from '../../../providers/GlobalContext/GlobalContextProvider';
import { VideoList } from './PlayVideo.styled';
import useFavorites from '../../../utils/hooks/useFavorites/useFavorites';
import VideoSkeleton from '../../molecules/VideoSkeleton/VideoSkeleton';

const PlayVideo = ({ video, relatedVideos }) => {
  const listRef = useRef(null);
  const [state] = useContext(GlobalContext);
  const [isFav, toggle] = useFavorites(video.id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (relatedVideos.length > 0) {
      setTimeout(() => {
        listRef.current.scrollTo({ behavior: 'smooth', top: 0 });
        setLoading(false);
      }, 1000);
    }
  }, [relatedVideos]);

  return (
    <Grid
      xs={12}
      sm={12}
      padding={{ left: 3, right: 3, top: 6, bottom: 2 }}
      lg={12}
      direction="row"
    >
      <Grid xs={12} lg={8} xl={8} direction="column" padding={{ bottom: 2 }}>
        <Grid xs={12}>
          <YoutubeEmbed embedId={video.id} />
        </Grid>
        <Grid padding={{ top: 1, bottom: 1 }}>
          <Grid xl={10}>
            <Text variant="h2">{video.title}</Text>
          </Grid>

          <Grid xl={2}>
            {state.user && (
              <Button
                variant="primary"
                onClick={() => {
                  toggle();
                }}
              >
                {!isFav ? 'add to favorites' : 'remove from favorites'}
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid>
          <Text variant="body2">{video.descriptionShort}</Text>
        </Grid>
      </Grid>

      <VideoList
        xs={12}
        sm={12}
        md={12}
        lg={4}
        xl={4}
        padding={{ left: 2 }}
        ref={listRef}
      >
        {loading
          ? [1, 1, 1, 1, 1, 1].map(() => (
              <Grid Grid sm={12} md={6} padding={{ bottom: 1 }}>
                <VideoSkeleton />
              </Grid>
            ))
          : relatedVideos.map((relatedVideo) => {
              return (
                <Grid sm={12} md={6} padding={{ bottom: 1 }}>
                  <DetailedVideoCard
                    data-testid="related-video"
                    id={relatedVideo.id}
                    videoId={relatedVideo.id}
                    key={relatedVideo.id}
                    videoTitle={relatedVideo.title}
                    thumbnail={relatedVideo.thumbnailMedium}
                    description={relatedVideo.descriptionShort}
                    targetBase="/watch"
                    favable={state.user}
                    videoDuration={relatedVideo.duration}
                    // channelImage={channelImagePlaceholder}
                  />
                </Grid>
              );
            })}
      </VideoList>
    </Grid>
  );
};

PlayVideo.propTypes = {};

export default PlayVideo;
