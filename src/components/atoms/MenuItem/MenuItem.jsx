import React from 'react';
import { StyledMenuItem } from './MenuItem.styled';

const MenuItem = ({ onClick, children }) => {
  return <StyledMenuItem onClick={onClick}>{children}</StyledMenuItem>;
};

export default MenuItem;
