import React from 'react';
import { render, screen } from '@testing-library/react';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import DetailedVideoCard from './DetailedVideoCard';

describe('component: DetailedVideoCard', () => {
  it('renders properly', () => {
    const videoTitle = 'Using React Test Library';
    const videoDescription =
      'In this video tutorial I will show you the basics of react testing library';

    render(
      <RenderWithTheme>
        <DetailedVideoCard description={videoDescription} videoTitle={videoTitle} />
      </RenderWithTheme>
    );

    expect(screen.getByRole('heading', { name: videoTitle })).toBeInTheDocument();
    expect(screen.getByText(videoDescription)).toBeInTheDocument();
  });
});
