import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon/Icon';

const StyledIconButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  ${(props) =>
    props.rounded && {
      width: `${props.size * 2}rem`,
      height: `${props.size * 2}rem`,
      borderRadius: '50%',
    }};
  ${(props) =>
    props.background
      ? `background-color: ${props.theme.colors[props.background]};`
      : 'background-color:transparent;'}
`;

const IconButton = ({ color, size, rounded, background, iconName, onClick }) => {
  return (
    <StyledIconButton
      onClick={onClick}
      rounded={rounded}
      background={background}
      size={size}
    >
      <Icon color={color} size={size} name={iconName} />
    </StyledIconButton>
  );
};

IconButton.propTypes = {};

export default IconButton;
