import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

const StyledText = styled.text`
  ${(props) =>
    props.variant === 'body' && {
      fontSize: '1rem',
      color: props.theme.colors.text,
    }};

  ${(props) =>
    props.variant === 'body2' && {
      fontSize: '.8rem',
      color: props.theme.colors.textLight,
    }};
`;

const Text = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

Text.propTypes = { variant: PropTypes.oneOf('h2', 'h3', 'h4', 'body', 'tiny', 'body2') };

Text.defaultProps = {
  variant: 'body',
};

export default Text;
