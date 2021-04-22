import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
import FavoriteDetails from '../components/pages/FavoriteDetails/FavoriteDetails';
import { GlobalContext } from '../providers/GlobalContext/GlobalContextProvider';
import useYouTubeVideo from './hooks/YouTubeAPI/YouTubeVideo/useYouTubeVideo';

const FavoriteDetailsWrapper = () => {
  const { videoId } = useParams();
  const [videos] = useYouTubeVideo(videoId, [], false, 0, true, true);
  const [state] = useContext(GlobalContext);

  if (!state.user) return <Redirect to="/notFound" />;

  return <FavoriteDetails video={videos[0]} />;
};

export default FavoriteDetailsWrapper;
