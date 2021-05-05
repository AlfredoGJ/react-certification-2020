import React from 'react';
import { render, screen } from '@testing-library/react';
import RenderWithTheme from '../../../utils/RenderWithTheme';
import MenuItem from './MenuItem';

describe('component: MenuItem', () => {
  const itemText = 'Testing library is awesome !';

  it('Renders properly', () => {
    render(
      <RenderWithTheme>
        <MenuItem>{itemText}</MenuItem>
      </RenderWithTheme>
    );

    expect(screen.getByText(itemText)).toBeInTheDocument();
  });
});
