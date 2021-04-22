import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from '../../../providers/GlobalContext/GlobalContextProvider';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import Favorites from './Favorites';
import mockVideos from '../../../mock/mockVideos';
import { toVideoListFromSearch } from '../../../utils/YouTubeAPI';

describe('Page: Favorites', () => {
  it('Renders correctly', () => {
    const favVideos = toVideoListFromSearch(mockVideos.items);
    const favoriteStr = favVideos
      .map((fav) => fav.id)
      .reduce((prev, current) => `${prev},${current}`);

    render(
      <BrowserRouter>
        <GlobalContextProvider>
          <RenderWithTheme>
            <Favorites favoritesStr={favoriteStr} />
          </RenderWithTheme>
        </GlobalContextProvider>
      </BrowserRouter>
    );

    // Renders the related videos
    expect(screen.getAllByTestId('fav-video').map((item) => item.id)).toEqual(
      favVideos.map((video) => video.id)
    );
  });
});
