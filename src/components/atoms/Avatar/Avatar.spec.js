import React from 'react';
import ReactDOM from 'react-dom';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import Avatar from './Avatar';

describe('component: Avatar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RenderWithTheme>
        <Avatar />
      </RenderWithTheme>,
      div
    );
  });
});
