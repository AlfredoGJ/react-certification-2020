import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './config/themes';
import './global.css';
import AppBar from './components/organisms/AppBar/AppBar';
import Home from './components/pages/Home/Home';
import Grid from './components/atoms/Grid/Grid';

const App = () => {
  const theme = themes.default;
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Grid>
        <Home />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
