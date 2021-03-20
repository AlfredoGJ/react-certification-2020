import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import RenderWithTheme from '../../../utils/RenderWithTheme';

describe('component: Home', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RenderWithTheme>
        <Home />
      </RenderWithTheme>,
      div
    );
  });
});
