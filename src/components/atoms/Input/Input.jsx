import React from 'react';
import StyledInput from './Input.styled';

const Input = ({ placeholder, onChange, value }) => {
  return <StyledInput placeholder={placeholder} onChange={onChange} value={value} />;
};
Input.propTypes = {};

export default Input;
