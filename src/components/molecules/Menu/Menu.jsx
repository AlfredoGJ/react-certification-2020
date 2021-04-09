import React from 'react';
import MenuSurface from '../../atoms/MenuSurface/MenuSurface';

const Menu = (props) => {
  return <div>{props.open ? <MenuSurface> {props.children}</MenuSurface> : <div />}</div>;
};

export default Menu;
