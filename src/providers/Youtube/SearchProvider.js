import React, { createContext } from 'react';
import useYouTubeSearch from '../../utils/hooks/YouTubeAPI/useYouTubeSearch';
import mockVideos from '../../mock/mockVideos';

const YoutubeSearchContext = createContext([{}, () => {}]);

const YoutubeSearchProvider = (props) => {
  const youtubeSearch = useYouTubeSearch(mockVideos);

  return (
    <YoutubeSearchContext.Provider value={youtubeSearch}>
      {props.children}
    </YoutubeSearchContext.Provider>
  );
};

export { YoutubeSearchContext, YoutubeSearchProvider };
