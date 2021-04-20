import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import { GlobalContextProvider } from '../../../providers/GlobalContext/GlobalContextProvider';

describe('component: Home', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <GlobalContextProvider>
        <RenderWithTheme>
          <Home />
        </RenderWithTheme>
        ,
      </GlobalContextProvider>,
      div
    );
  });
});
