import React from 'react';
import { StyledMenuContainer, StyledMenu } from './MenuSurface.styled';

const MenuSurface = (props) => {
  return (
    <StyledMenuContainer>
      <StyledMenu>{props.children}</StyledMenu>
    </StyledMenuContainer>
  );
};

export default MenuSurface;
