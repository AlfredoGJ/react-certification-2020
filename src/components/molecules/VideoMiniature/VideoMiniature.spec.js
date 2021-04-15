import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoMiniature from './VideoMiniature';
import RenderWithTheme from '../../../utils/RenderWithTheme';

const img = require('../../../assets/img/logo512.png');

describe('component: VideoMiniature', () => {
  it('renders properly', () => {
    const duration = '5:22';
    render(
      <RenderWithTheme>
        <VideoMiniature imgSource={img} duration={duration} />
      </RenderWithTheme>
    );

    expect(screen.getByRole('img', { name: 'video-miniature' })).toBeInTheDocument();
    expect(screen.getByText(duration)).toBeInTheDocument();
  });
});
