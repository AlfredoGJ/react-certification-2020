import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.i`
  color: ${(props) => props.theme.colors[props.color]};
  font-size: ${(props) => props.size}rem;
`;

const Icon = ({ name, size, color }) => {
  return <StyledIcon className={`fa fa-${name}`} size={size} color={color} />;
};

Icon.propTypes = {};

export default Icon;
