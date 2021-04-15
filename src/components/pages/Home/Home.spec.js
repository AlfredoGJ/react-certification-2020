import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import { YoutubeSearchProvider } from '../../../providers/Youtube/SearchProvider';

describe('component: Home', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <YoutubeSearchProvider value={[{}, () => {}]}>
        <RenderWithTheme>
          <Home />
        </RenderWithTheme>
        ,
      </YoutubeSearchProvider>,
      div
    );
  });
});
