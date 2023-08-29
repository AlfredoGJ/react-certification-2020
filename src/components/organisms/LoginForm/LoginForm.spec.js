import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import { GlobalContextProvider } from '../../../providers/GlobalContext/GlobalContextProvider';

describe('Component: LoginForm', () => {
  it('Renders correctly', () => {
    render(
      <GlobalContextProvider>
        <RenderWithTheme>
          <LoginForm />
        </RenderWithTheme>
      </GlobalContextProvider>
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });
});
