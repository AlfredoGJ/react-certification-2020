import React from 'react';
import { useParams } from 'react-router';
import PlayVideo from '../components/pages/PlayVideo/PlayVideo';
import useYouTubeVideo from './hooks/YouTubeAPI/YouTubeVideo/useYouTubeVideo';

const PlayVideoWrapper = () => {
  const { videoId } = useParams();
  const defaultVideo = {
    id: '0',
    title: '',
    description: '',
  };
  const [videos, relatedVideos] = useYouTubeVideo(videoId, defaultVideo, true, 4);
  return <PlayVideo video={videos[0]} relatedVideos={relatedVideos} />;
};

export default PlayVideoWrapper;
