import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from '../../../providers/GlobalContext/GlobalContextProvider';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import SideMenu from './SideMenu';

describe('Component: SideMenu', () => {
  it('Renders properly', () => {
    const item1 = 'ITEM1';
    const item2 = 'ITEM2';
    render(
      <GlobalContextProvider>
        <BrowserRouter basename="/">
          <RenderWithTheme>
            <SideMenu open>
              <MenuItem>{item1}</MenuItem>
              <MenuItem>{item2}</MenuItem>
            </SideMenu>
          </RenderWithTheme>
        </BrowserRouter>
      </GlobalContextProvider>
    );

    expect(screen.getByText(item1)).toBeInTheDocument();
    expect(screen.getByText(item2)).toBeInTheDocument();
  });

  it('Does not render when open =  "false"', () => {
    const item1 = 'ITEM1';
    const item2 = 'ITEM2';
    render(
      <GlobalContextProvider>
        <BrowserRouter basename="/">
          <RenderWithTheme>
            <SideMenu open={false}>
              <MenuItem>{item1}</MenuItem>
              <MenuItem>{item2}</MenuItem>
            </SideMenu>
          </RenderWithTheme>
        </BrowserRouter>
      </GlobalContextProvider>
    );

    expect(screen.queryByText(item1)).not.toBeInTheDocument();
    expect(screen.queryByText(item2)).not.toBeInTheDocument();
  });
});
