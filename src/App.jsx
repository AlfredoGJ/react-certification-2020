import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './global.css';
import AppBar from './components/organisms/AppBar/AppBar';
import Home from './components/pages/Home/Home';
import PlayVideoWrapper from './utils/PlayVideoWrapper';
import { GlobalContextProvider } from './providers/GlobalContext/GlobalContextProvider';
import ThemeProvider from './providers/ThemeProvider/ThemeProvider';
import Login from './components/pages/Login/Login';
import SideMenuWrapper from './utils/SideMenuWrapper';
import FavoritesWrapper from './utils/FavoritesWrapper';
import FavoriteDetailsWrapper from './utils/FavoriteDetailsWrapper';
import NotFound from './components/pages/NotFound/NotFound';
import { StyledApp } from './App.styled';

const App = () => {
  return (
    <GlobalContextProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AppBar />
          <SideMenuWrapper />
          <StyledApp>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/watch/:videoId" render={() => <PlayVideoWrapper />} />
              <Route path="/login" render={() => <Login />} />
              <Route
                exact
                path="/profile/favorites"
                render={() => <FavoritesWrapper />}
              />
              <Route
                exact
                path="/profile/favorites/:videoId"
                render={() => <FavoriteDetailsWrapper />}
              />
              <Route path="/notFound" component={NotFound} />
              <Route path="*" render={() => <Redirect to="/notFound" />} />
            </Switch>
          </StyledApp>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalContextProvider>
  );
};

export default App;
