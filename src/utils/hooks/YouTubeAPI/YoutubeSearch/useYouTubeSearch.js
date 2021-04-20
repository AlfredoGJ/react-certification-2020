import axios from 'axios';
import { useState } from 'react';
import { toVideoListFromSearch } from '../../../YouTubeAPI';

export default function useYouTubeSearch(initialSearchResult, maxResults = 32) {
  const apiBase = `${process.env.REACT_APP_YT_API_BASE}/search?`;
  const [searchResult, setSearchResult] = useState(initialSearchResult);

  const search = (searchText, videoId) => {
    const searchQuery = searchText ? { q: searchText } : {};
    const searchRelated = videoId ? { relatedToVideoId: videoId } : {};

    axios
      .get(apiBase, {
        params: {
          type: 'video',
          key: process.env.REACT_APP_YT_API_KEY,
          part: 'snippet, id',
          maxResults,
          ...searchQuery,
          ...searchRelated,
        },
      })
      .then((result) => {
        setSearchResult(toVideoListFromSearch(result.data.items));
      })
      .catch(() => {
        setSearchResult([]);
      });
  };

  const searchQuery = (query) => {
    search(query, null);
  };

  const searchRelated = (videoId) => {
    search(null, videoId);
  };

  return [searchResult, searchQuery, searchRelated];
}
