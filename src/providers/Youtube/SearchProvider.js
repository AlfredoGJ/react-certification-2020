import React, { createContext } from 'react';
import useYouTubeSearch from '../../utils/hooks/YouTubeAPI/useYouTubeSearch';
import mockVideos from '../../mock/mockVideos';
import { toVideoListFromSearch } from '../../utils/YouTubeAPI';

const YoutubeSearchContext = createContext([{}, () => {}]);

const YoutubeSearchProvider = (props) => {
  const youtubeSearch = useYouTubeSearch(toVideoListFromSearch(mockVideos.items));

  return (
    <YoutubeSearchContext.Provider value={youtubeSearch}>
      {props.children}
    </YoutubeSearchContext.Provider>
  );
};

export { YoutubeSearchContext, YoutubeSearchProvider };
