import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import DetailedVideoCard from './DetailedVideoCard';
import mockVideos from '../../../mock/mockVideos';
import { toVideoFromSearch } from '../../../utils/YouTubeAPI';

describe('component: DetailedVideoCard', () => {
  it('renders properly', () => {
    const video = toVideoFromSearch(mockVideos.items[0]);

    render(
      <RenderWithTheme>
        <BrowserRouter basename="/">
          <DetailedVideoCard
            videoId={video.id}
            description={video.description}
            videoTitle={video.title}
          />
        </BrowserRouter>
      </RenderWithTheme>
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', `/watch/${video.id}`);
    expect(screen.getByRole('heading', { name: video.title })).toBeInTheDocument();
    expect(screen.getByText(video.description)).toBeInTheDocument();
  });
});
