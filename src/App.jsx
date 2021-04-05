import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import themes from './config/themes';
import './global.css';
import AppBar from './components/organisms/AppBar/AppBar';
import Home from './components/pages/Home/Home';
import { YoutubeSearchProvider } from './providers/Youtube/SearchProvider';
import PlayVideoWrapper from './utils/PlayVideoWrapper';

const App = () => {
  const theme = themes.default;
  return (
    <ThemeProvider theme={theme}>
      <YoutubeSearchProvider>
        <AppBar />
        <BrowserRouter>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/watch/:videoId" render={() => <PlayVideoWrapper />} />
        </BrowserRouter>
      </YoutubeSearchProvider>
    </ThemeProvider>
  );
};

export default App;
