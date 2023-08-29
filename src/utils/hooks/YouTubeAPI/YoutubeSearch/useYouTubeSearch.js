import axios from 'axios';
import { useState } from 'react';
import { toVideoListFromSearch } from '../../../YouTubeAPI';

export default function useYouTubeSearch(initialSearchResult, maxResults = 32) {
  const apiBase = `${process.env.REACT_APP_YT_API_BASE}/search?`;
  const channelsApiBase = `${process.env.REACT_APP_YT_API_BASE}/channels?`;
  const [searchResult, setSearchResult] = useState(initialSearchResult);

  const search = (searchText, videoId) => {
    const searchQuery = searchText ? { q: searchText } : {};
    const searchRelated = videoId ? { relatedToVideoId: videoId } : {};

    axios
      .get(apiBase, {
        params: {
          type: 'video',
          key: process.env.REACT_APP_YT_API_KEY,
          part: 'id,%20snippet',
          maxResults,
          ...searchQuery,
          ...searchRelated,
        },
      })
      .then((result) => {
        const videosResult = toVideoListFromSearch(result.data.items);
        const channelIds = videosResult.reduce(
          (prev, current) => `${prev},${current.channelId}`,
          ''
        );
        axios
          .get(channelsApiBase, {
            params: {
              key: process.env.REACT_APP_YT_API_KEY,
              id: channelIds,
              part: 'snippet',
            },
          })
          .then((channelsResult) => {
            const finalResult = videosResult.map((video) => {
              const channel = channelsResult.data.items.find(
                (c) => c.id === video.channelId
              );
              return {
                ...video,
                channelThumb: channel.snippet.thumbnails.default.url,
              };
            });

            setSearchResult(finalResult);
          });
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
