import React from 'react';
import StyledIcon from './Icon.styled';

const Icon = ({ name, size, color }) => {
  return <StyledIcon className={`fa fa-${name}`} size={size} color={color} />;
};

Icon.propTypes = {};

export default Icon;
