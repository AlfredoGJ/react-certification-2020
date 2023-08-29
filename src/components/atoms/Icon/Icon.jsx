import React from 'react';
import StyledIcon from './Icon.styled';

const Icon = (props) => {
  return (
    <StyledIcon className={`fa fa-${props.name}`} size={props.size} color={props.color} />
  );
};

Icon.propTypes = {};

export default Icon;
