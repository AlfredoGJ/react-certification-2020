import React from 'react';
import { render, screen } from '@testing-library/react';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import Menu from './Menu';
import MenuItem from '../../atoms/MenuItem/MenuItem';

describe('component: Menu', () => {
  const itemText = 'React is awesome !';
  it(`Renders properly when open = 'true'`, () => {
    render(
      <RenderWithTheme>
        <Menu open>
          <MenuItem>{itemText}</MenuItem>
        </Menu>
      </RenderWithTheme>
    );

    expect(screen.getByText(itemText)).toBeInTheDocument();
  });

  it(`Does not render when open = 'false'`, () => {
    render(
      <RenderWithTheme>
        <Menu open={false}>
          <MenuItem>{itemText}</MenuItem>
        </Menu>
      </RenderWithTheme>
    );

    expect(screen.queryByText(itemText)).not.toBeInTheDocument();
  });
});
