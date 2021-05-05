import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from '../../providers/GlobalContext/GlobalContextProvider';
import RenderWithTheme from '../RenderWithTheme';
import PlayVideoWrapper from './PlayVideoWrapper';

describe('Component: PlayVideoWrapper', () => {
  it('Renders properly', () => {
    render(
      <BrowserRouter>
        <GlobalContextProvider>
          <RenderWithTheme>
            <PlayVideoWrapper />
          </RenderWithTheme>
        </GlobalContextProvider>
      </BrowserRouter>
    );
  });
});
