import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from '../../../providers/GlobalContext/GlobalContextProvider';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import AppBar from './AppBar';

describe('component: AppBar', () => {
  it('Renders properly', () => {
    render(
      <GlobalContextProvider>
        <BrowserRouter basename="/">
          <RenderWithTheme>
            <AppBar />
          </RenderWithTheme>
        </BrowserRouter>
      </GlobalContextProvider>
    );
  });
});
