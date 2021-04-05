import React from 'react';
import PropTypes from 'proptypes';
import StyledText from './Text.styled';

const Text = (props) => {
  let as = 'div';

  if (props.variant === 'h2') as = 'h2';

  if (props.variant === 'h3') as = 'h3';

  if (props.variant === 'h4') as = 'h4';

  if (props.variant === 'small') as = 'small';

  return (
    <StyledText as={as} {...props}>
      {props.children}
    </StyledText>
  );
};

Text.propTypes = { variant: PropTypes.oneOf('h2', 'h3', 'h4', 'body', 'small', 'body2') };

Text.defaultProps = {
  variant: 'body',
};

export default Text;
