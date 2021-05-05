import React from 'react';
import { render, screen } from '@testing-library/react';
import { GlobalContextProvider } from '../../../providers/GlobalContext/GlobalContextProvider';
import NotFound from './NotFound';

import RenderWithTheme from '../../../utils/RenderWithTheme';

describe('Page: Not Found', () => {
  it('Renders correctly', () => {
    render(
      <GlobalContextProvider>
        <RenderWithTheme>
          <NotFound />
        </RenderWithTheme>
      </GlobalContextProvider>
    );
    expect(screen.getByRole('heading', { name: /404 - Not Found/i }));
    expect(screen.getByText(/404 - Not Found/i));
  });
});
