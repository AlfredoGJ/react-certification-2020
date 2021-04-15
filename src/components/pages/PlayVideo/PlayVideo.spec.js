import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayVideo from './PlayVideo';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import mockVideos from '../../../mock/mockVideos';
import { toVideoFromSearch, toVideoListFromSearch } from '../../../utils/YouTubeAPI';

describe('Component: PlayVideo', () => {
  it('renders correctly', () => {
    const videoToPlay = toVideoFromSearch(mockVideos.items[0]);
    const relatedVideos = toVideoListFromSearch(mockVideos.items.slice(1));

    render(
      <RenderWithTheme>
        <PlayVideo video={videoToPlay} relatedVideos={relatedVideos} />
      </RenderWithTheme>
    );

    // Renders the video title
    expect(screen.getByRole('heading', { name: videoToPlay.title }));

    // Renders the 'add to favorites' button
    expect(screen.getByRole('button', { name: /add to favorites/i }));

    // Renders the video description
    expect(screen.getByText(videoToPlay.description));

    // Renders the related videos
    expect(screen.getAllByTestId('related-video').map((item) => item.id)).toEqual(
      relatedVideos.map((video) => video.id)
    );
  });
});
