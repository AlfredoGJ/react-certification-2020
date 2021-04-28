import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router';
import Favorites from '../../components/pages/Favorites/Favorites';
import { GlobalContext } from '../../providers/GlobalContext/GlobalContextProvider';
import { getUserData } from '../UserDataStorage';
import useYouTubeVideo from '../hooks/YouTubeAPI/YouTubeVideo/useYouTubeVideo';

const FavoritesWrapper = () => {
  const [state] = useContext(GlobalContext);
  const [videos, , setVideoIds] = useYouTubeVideo('', [], false);

  function favCheck() {
    const userData = getUserData(state.user);
    const { favorites } = userData;
    const favoritesStr = favorites.reduce((prev, current) => `${prev},${current}`, '');

    setVideoIds(favoritesStr);
  }
  useEffect(() => {
    favCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.favsTracker]);

  useEffect(() => {
    favCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!state.user) return <Redirect to="/notFound" />;

  return <Favorites videos={videos} />;
};

export default FavoritesWrapper;
