import React from 'react';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import { StyledLogin } from './Login.styled';

const Login = () => {
  return (
    <StyledLogin
      sm={12}
      padding={{ left: 3, right: 3, top: 8, bottom: 2 }}
      justify="center"
    >
      <LoginForm />
    </StyledLogin>
  );
};

export default Login;
