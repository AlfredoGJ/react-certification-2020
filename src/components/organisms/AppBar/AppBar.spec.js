import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { GlobalContextProvider } from '../../../providers/GlobalContext/GlobalContextProvider';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import AppBar from './AppBar';
import themes from '../../../config/themes';

describe('component: AppBar', () => {
  describe('Renders properly', () => {
    it('Shows the login option', () => {
      render(
        <GlobalContextProvider>
          <BrowserRouter basename="/">
            <RenderWithTheme>
              <AppBar />
            </RenderWithTheme>
          </BrowserRouter>
        </GlobalContextProvider>
      );

      const queryBefore = screen
        .queryAllByTestId('menu-option')
        .map((value) => value.innerHTML);
      const accountButton = screen.getByRole('img');
      userEvent.click(accountButton);
      const queryAfter = screen
        .queryAllByTestId('menu-option')
        .map((value) => value.innerHTML);

      expect(queryBefore.length).toBe(0);
      expect(queryAfter).toEqual(['Log In']);
    });

    it('Shows the logout option', () => {
      render(
        <GlobalContextProvider
          context={{
            searchText: '',
            lastSearch: '',
            theme: themes.find((t) => t.name === 'default'),
            user: {
              id: '1234',
              name: 'Wizeline',
              avatarUrl:
                'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
            },
            sidemenu: false,
          }}
        >
          <RenderWithTheme>
            <BrowserRouter basename="/">
              <AppBar />
            </BrowserRouter>
          </RenderWithTheme>
        </GlobalContextProvider>
      );

      const queryBefore = screen
        .queryAllByTestId('menu-option')
        .map((value) => value.innerHTML);
      const accountButton = screen.getByRole('img');
      userEvent.click(accountButton);
      const queryAfter = screen
        .queryAllByTestId('menu-option')
        .map((value) => value.innerHTML);

      expect(queryBefore.length).toBe(0);
      expect(queryAfter).toEqual(['Log Out']);
    });

    it('Shows the themes options', () => {
      render(
        <GlobalContextProvider>
          <BrowserRouter basename="/">
            <RenderWithTheme>
              <AppBar />
            </RenderWithTheme>
          </BrowserRouter>
        </GlobalContextProvider>
      );
      const queryBefore = screen
        .queryAllByTestId('menu-option')
        .map((value) => value.innerHTML);
      const themesButton = screen.getByRole('button', { name: /themes/i });
      userEvent.click(themesButton);
      const queryAfter = screen
        .queryAllByTestId('menu-option')
        .map((value) => value.innerHTML);

      expect(queryBefore.length).toBe(0);
      expect(queryAfter).toEqual(themes.map((t) => t.name));
    });
  });
});
