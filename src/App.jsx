import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './global.css';
import AppBar from './components/organisms/AppBar/AppBar';
import Home from './components/pages/Home/Home';
import PlayVideoWrapper from './utils/PlayVideoWrapper';
import { GlobalContextProvider } from './providers/GlobalContext/GlobalContextProvider';
import ThemeProvider from './providers/ThemeProvider/ThemeProvider';

const App = () => {
  return (
    <GlobalContextProvider>
      <ThemeProvider>
        <AppBar />
        <BrowserRouter basename="/">
          <Route exact path="/" render={() => <Home />} />
          <Route path="/watch/:videoId" render={() => <PlayVideoWrapper />} />
        </BrowserRouter>
      </ThemeProvider>
    </GlobalContextProvider>
  );
};

export default App;
