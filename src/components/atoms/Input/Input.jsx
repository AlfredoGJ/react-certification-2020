import React from 'react';
import StyledInput from './Input.styled';

const Input = ({ placeholder, onChange }) => {
  return <StyledInput placeholder={placeholder} onChange={onChange} />;
};
Input.propTypes = {};

export default Input;
