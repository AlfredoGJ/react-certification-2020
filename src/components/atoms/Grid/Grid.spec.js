import React from 'react';
import ReactDOM from 'react-dom';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import Grid from './Grid';

describe('component: Grid', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RenderWithTheme>
        <Grid />
      </RenderWithTheme>,
      div
    );
  });
});
