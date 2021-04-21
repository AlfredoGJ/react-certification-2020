import React from 'react';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import Grid from '../../atoms/Grid/Grid';

const Login = () => {
  return (
    <Grid sm={12} padding={{ left: 3, right: 3, top: 6, bottom: 2 }} justify="center">
      <LoginForm />
    </Grid>
  );
};

export default Login;
