import React from 'react';
import ReactDOM from 'react-dom';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import ChannelWidget from './ChannelWidget';

describe('component: ChannelWidget', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RenderWithTheme>
        <ChannelWidget />
      </RenderWithTheme>,
      div
    );
  });
});
