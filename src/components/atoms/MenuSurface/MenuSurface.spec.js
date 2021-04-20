import React from 'react';
import { render, screen } from '@testing-library/react';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import MenuItem from '../MenuItem/MenuItem';
import MenuSurface from './MenuSurface';

describe('component: MenuSurface', () => {
  const firstItem = 'Hello';
  const secondItem = 'World';

  it('Renders correctly', () => {
    render(
      <RenderWithTheme>
        <MenuSurface>
          <MenuItem>{firstItem}</MenuItem>
          <MenuItem>{secondItem}</MenuItem>
        </MenuSurface>
      </RenderWithTheme>
    );

    expect(screen.getByText(firstItem)).toBeInTheDocument();
    expect(screen.getByText(secondItem)).toBeInTheDocument();
  });
});
