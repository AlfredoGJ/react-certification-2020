import axios from 'axios';
import { useState, useEffect } from 'react';
import { toVideoFromSearch } from '../../YouTubeAPI';
import useYouTubeSearch from './useYouTubeSearch';

export default function useYouTubeVideo(videoId, fallbackVideo) {
  const apiBase = `${process.env.REACT_APP_YT_API_BASE}/videos?`;
  const [video, setVideo] = useState(fallbackVideo);
  const [relatedVideos, , searchRelated] = useYouTubeSearch([]);

  useEffect(() => {
    searchRelated(videoId);
    axios
      .get(apiBase, {
        params: {
          key: process.env.REACT_APP_YT_API_KEY,
          id: videoId,
          part: 'snippet',
        },
      })
      .then((result) => {
        if (result.data.items.length) {
          setVideo(toVideoFromSearch(result.data.items[0]));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [videoId]);

  return [video, relatedVideos];
}
