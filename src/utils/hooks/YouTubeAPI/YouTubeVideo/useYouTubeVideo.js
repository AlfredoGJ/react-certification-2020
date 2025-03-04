import axios from 'axios';
import { useState, useEffect } from 'react';
import { toVideoListFromVideoDetailsList } from '../../../YouTubeAPI';
import useYouTubeSearch from '../YoutubeSearch/useYouTubeSearch';

export default function useYouTubeVideo(
  videoId,
  fallbackVideo,
  related = false,
  maxRelatedResults = 16,
  statistics = false,
  contentDetails = false
) {
  const apiBase = `${process.env.REACT_APP_YT_API_BASE}/videos?`;
  const [video, setVideo] = useState([]);
  const [relatedVideos, , searchRelated] = useYouTubeSearch([], maxRelatedResults);
  const [videoIds, setVideoIds] = useState(videoId);

  function search() {
    if (related) {
      searchRelated(videoIds);
    }

    axios
      .get(apiBase, {
        params: {
          key: process.env.REACT_APP_YT_API_KEY,
          id: videoIds,
          part: `snippet${statistics ? ',statistics' : ''}${
            contentDetails ? ',contentDetails' : ''
          }`,
        },
      })
      .then((result) => {
        if (result.data.items.length) {
          setVideo(toVideoListFromVideoDetailsList(result.data.items));
        }
      })
      .catch(() => {
        setVideo([fallbackVideo]);
      });
  }

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoIds]);

  return [video, relatedVideos, setVideoIds];
}
