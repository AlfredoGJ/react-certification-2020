import React from 'react';
import { render, screen } from '@testing-library/react';
import { GlobalContextProvider } from '../../../providers/GlobalContext/GlobalContextProvider';
import Login from './Login';
import RenderWithTheme from '../../../utils/RenderWithTheme';

describe('Page: Login page', () => {
  it('Renders correctly', () => {
    render(
      <GlobalContextProvider>
        <RenderWithTheme>
          <Login />
        </RenderWithTheme>
      </GlobalContextProvider>
    );
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });
});
