import React from 'react';
import StyledInput from './Input.styled';

const Input = ({ placeholder, onChange, value, name, id, type }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      id={id}
      type={type}
    />
  );
};
Input.propTypes = {};

export default Input;
