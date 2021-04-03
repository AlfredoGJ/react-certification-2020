import axios from 'axios';
import { useState } from 'react';

export default function useYouTubeSearch(initialSearchResult) {
  const apiBase = `${process.env.REACT_APP_YT_API_BASE}/search?`;
  const [searchResult, setSearchResult] = useState(initialSearchResult);

  const search = (searchText) => {
    axios
      .get(apiBase, {
        params: {
          q: searchText,
          type: 'video',
          key: process.env.REACT_APP_YT_API_KEY,
          part: 'snippet',
        },
      })
      .then((result) => {
        setSearchResult(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [searchResult, search];
}
