import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import StyledIconButton from './IconButton.styled';

const IconButton = ({
  color,
  size,
  rounded,
  background,
  iconName,
  onClick,
  ariaLabel,
}) => {
  return (
    <StyledIconButton
      aria-label={ariaLabel}
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
