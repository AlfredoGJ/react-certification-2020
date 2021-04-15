import React from 'react';
import { render, screen } from '@testing-library/react';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import ChannelWidget from './ChannelWidget';

const channelImage = require('../../../assets/img/logo512.png');

describe('component: ChannelWidget', () => {
  it('renders properly', () => {
    const channelName = 'Wizeline';
    render(
      <RenderWithTheme>
        <ChannelWidget imageSource={channelImage} channelName={channelName} />
      </RenderWithTheme>
    );

    expect(screen.getByText(channelName)).toBeInTheDocument();
  });
});
