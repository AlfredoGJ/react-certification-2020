import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import PlayVideo from '../../components/pages/PlayVideo/PlayVideo';
import useYouTubeVideo from '../hooks/YouTubeAPI/YouTubeVideo/useYouTubeVideo';

const PlayVideoWrapper = () => {
  const { videoId } = useParams();
  const defaultVideo = {
    id: '0',
    title: '',
    description: '',
  };

  const [videos, relatedVideos, setVideoIds] = useYouTubeVideo(
    videoId,
    defaultVideo,
    true,
    10
  );
  useEffect(() => {
    setVideoIds(videoId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <>{videos.length && <PlayVideo video={videos[0]} relatedVideos={relatedVideos} />}</>
  );
};

export default PlayVideoWrapper;
