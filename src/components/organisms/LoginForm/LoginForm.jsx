import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import loginApi from '../../../mock/login-api';
import Button from '../../atoms/Button/Button';
import Grid from '../../atoms/Grid/Grid';
import Input from '../../atoms/Input/Input';
import {
  StyledLoginForm,
  StyledLoginFormContainer,
  StyledLabel,
} from './LoginForm.styled';
import Text from '../../atoms/Text/Text';
import { GlobalContext } from '../../../providers/GlobalContext/GlobalContextProvider';
import actions from '../../../providers/GlobalContext/actions';

const LoginForm = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(null);
  const [, dispatch] = useContext(GlobalContext);
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();
    loginApi(user, pass)
      .then((res) => {
        dispatch(actions.setUser(res));
        history.push('/');
      })

      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <StyledLoginFormContainer sm={8} lg={8} xl={3} direction="column">
      <StyledLoginForm onSubmit={(e) => login(e)}>
        <Grid sm={12} padding={{ top: 1 }} direction="column">
          <StyledLabel htmlFor="email">Email </StyledLabel>
          <Input
            id="email"
            placeholder="Your email"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
              setError(null);
            }}
          />
        </Grid>
        <Grid sm={12} padding={{ top: 1, bottom: 1 }} direction="column">
          <StyledLabel htmlFor="password">Password </StyledLabel>
          <Input
            type="password"
            id="password"
            placeholder="Your password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
              setError(null);
            }}
          />
        </Grid>
        <Grid sm={12} padding={{ top: 2, bottom: 1 }}>
          <Button>Login</Button>
        </Grid>
        <Grid sm={12} justify="center">
          <Text variant="error">{error}</Text>
        </Grid>
      </StyledLoginForm>
    </StyledLoginFormContainer>
  );
};

export default LoginForm;
