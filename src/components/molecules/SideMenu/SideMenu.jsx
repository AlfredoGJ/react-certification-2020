import React from 'react';
import { useLocation } from 'react-router';
import StyledSideMenu from './SideMenu.styled';

const SideMenu = (props) => {
  const location = useLocation();

  return (
    props.open &&
    location.pathname !== '/login' &&
    location.pathname !== '/notFound' && (
      <StyledSideMenu onBlur={props.onBlur} {...props}>
        {props.children}
      </StyledSideMenu>
    )
  );
};

export default SideMenu;
