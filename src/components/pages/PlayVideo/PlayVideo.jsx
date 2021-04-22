import React, { useRef, useEffect, useContext, useState } from 'react';
import Grid from '../../atoms/Grid/Grid';
import DetailedVideoCard from '../../organisms/DetailedVideoCard/DetailedVideoCard';
import YoutubeEmbed from '../../atoms/YouTubeEmbed/YouTubeEmbed';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import { GlobalContext } from '../../../providers/GlobalContext/GlobalContextProvider';
import { saveUserData, getUserData } from '../../../utils/UserDataStorage';
import { VideoList } from './PlayVideo.styled';

const PlayVideo = ({ video, relatedVideos }) => {
  const listRef = useRef(null);
  const [state] = useContext(GlobalContext);

  const [isFav, setIsFav] = useState(false);

  function calcIsFav() {
    const userData = getUserData(state.user);
    if (userData) {
      if (userData.favorites.includes(video.id)) setIsFav(true);
      else setIsFav(false);
    }
  }

  useEffect(() => {
    calcIsFav();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video]);

  useEffect(() => {
    calcIsFav();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      listRef.current.scrollTo({ behavior: 'smooth', top: 0 });
      console.log(listRef.current);
    }, 1000);
  }, [relatedVideos]);

  function saveToFavorites() {
    if (video.id) {
      const userData = getUserData(state.user);
      if (!userData.favorites.includes(video.id)) {
        userData.favorites.push(video.id);
        saveUserData(state.user, userData);
        setIsFav(true);
      }
    }
  }

  function removeFromFavorites() {
    if (video.id) {
      const userData = getUserData(state.user);
      if (userData.favorites.includes(video.id)) {
        userData.favorites = userData.favorites.filter((fav) => video.id !== fav);
        saveUserData(state.user, userData);
        setIsFav(false);
      }
    }
  }

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
                  if (isFav) removeFromFavorites();
                  else saveToFavorites();
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
        {relatedVideos.map((relatedVideo) => {
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
