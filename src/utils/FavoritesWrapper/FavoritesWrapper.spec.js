import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from '../../providers/GlobalContext/GlobalContextProvider';
import RenderWithTheme from '../RenderWithTheme';
import FavoritesWrapper from './FavoritesWrapper';

describe('Component: FavoritesWrapper', () => {
  it('Renders properly', () => {
    render(
      <BrowserRouter>
        <GlobalContextProvider>
          <RenderWithTheme>
            <FavoritesWrapper />
          </RenderWithTheme>
        </GlobalContextProvider>
      </BrowserRouter>
    );
  });
});
