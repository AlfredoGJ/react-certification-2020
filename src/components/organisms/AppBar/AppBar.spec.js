import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalContextProvider } from '../../../providers/GlobalContext/GlobalContextProvider';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import AppBar from './AppBar';

describe('component: AppBar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <GlobalContextProvider>
        <RenderWithTheme>
          <AppBar />
        </RenderWithTheme>
      </GlobalContextProvider>,
      div
    );
  });
});
