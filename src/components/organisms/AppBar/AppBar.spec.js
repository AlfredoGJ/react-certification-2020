import React from 'react';
import ReactDOM from 'react-dom';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import AppBar from './AppBar';

describe('component: AppBar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RenderWithTheme>
        <AppBar />
      </RenderWithTheme>,
      div
    );
  });
});
