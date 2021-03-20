import React from 'react';
import ReactDOM from 'react-dom';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import IconButton from './IconButton';

describe('component: IconButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RenderWithTheme>
        <IconButton />
      </RenderWithTheme>,
      div
    );
  });
});
