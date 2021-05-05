import React from 'react';
import { render, screen } from '@testing-library/react';
import { GlobalContextProvider } from '../../../providers/GlobalContext/GlobalContextProvider';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import FavoriteDetails from './FavoriteDetails';
import mockVideos from '../../../mock/mockVideos';
import { toVideoListFromVideoDetailsList } from '../../../utils/YouTubeAPI';

describe('Page: Favorite Details', () => {
  const videos = toVideoListFromVideoDetailsList(mockVideos.items);
  const video = videos[0];
  video.viewCount = 10;

  it('Renders properly', () => {
    render(
      <GlobalContextProvider>
        <RenderWithTheme>
          <FavoriteDetails video={video} />
        </RenderWithTheme>
      </GlobalContextProvider>
    );

    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /duration/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /views/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Likes/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /dislikes/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /description/i })).toBeInTheDocument();
  });
});
