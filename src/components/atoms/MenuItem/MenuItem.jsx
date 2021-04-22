import React from 'react';
import { StyledMenuItem } from './MenuItem.styled';

const MenuItem = ({ onClick, children, selected }) => {
  return (
    <StyledMenuItem onClick={onClick} selected={selected}>
      {children}
    </StyledMenuItem>
  );
};

export default MenuItem;
