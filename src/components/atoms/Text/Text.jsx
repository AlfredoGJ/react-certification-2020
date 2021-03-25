import React from 'react';
import PropTypes from 'proptypes';
import StyledText from './Text.styled'

const Text = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

Text.propTypes = { variant: PropTypes.oneOf('h2', 'h3', 'h4', 'body', 'tiny', 'body2') };

Text.defaultProps = {
  variant: 'body',
};

export default Text;
