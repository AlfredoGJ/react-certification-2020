import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from '../../providers/GlobalContext/GlobalContextProvider';
import FavoriteDetailsWrapper from './FavoriteDetailsWrapper';
import RenderWithTheme from '../RenderWithTheme';

describe('Component: FavoriteDetailsWrapper', () => {
  it('Renders properly', () => {
    render(
      <BrowserRouter>
        <GlobalContextProvider>
          <RenderWithTheme>
            <FavoriteDetailsWrapper />
          </RenderWithTheme>
        </GlobalContextProvider>
      </BrowserRouter>
    );
  });
});
