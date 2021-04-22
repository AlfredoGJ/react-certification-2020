import React, { useContext, useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import IconButton from '../../molecules/IconButton/IconButton';
import Input from '../../atoms/Input/Input';
import Grid from '../../atoms/Grid/Grid';
import { AppBarBase, StyledAvatar, StyledSearchIcon } from './AppBar.styled';
import { GlobalContext } from '../../../providers/GlobalContext/GlobalContextProvider';
import actions from '../../../providers/GlobalContext/actions';
import Menu from '../../molecules/Menu/Menu';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import themes from '../../../config/themes';
import { storage } from '../../../utils/storage';

const defaultUserPic = require('../../../assets/img/default-user.jpg');

const AppBar = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const [themesOpen, setThemesOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();

  console.log(location);
  function logOut() {
    dispatch(actions.setUser(null));
    storage.set('currentUser', null);
    history.push('/');
  }

  function logIn() {
    history.push('/login');
  }

  return (
    location.pathname !== '/login' &&
    location.pathname !== '/notFound' && (
      <AppBarBase>
        <Grid justify="space-between" xs={12}>
          <Grid xs={2} sm={2} md={2} lg={2} xl={2} justify="flex-start">
            <IconButton
              iconName="bars"
              color="textDark"
              size={1}
              rounded
              onClick={() => dispatch(actions.setSidebar(!state.sidemenu))}
            />
            <IconButton
              iconName="paint-brush"
              color="textDark"
              size={1}
              rounded
              onClick={() => setThemesOpen(!themesOpen)}
            />
            <Menu open={themesOpen}>
              <MenuItem
                onClick={() => {
                  setThemesOpen(false);
                  dispatch(actions.setTheme(themes.default));
                }}
              >
                Default
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setThemesOpen(false);
                  dispatch(actions.setTheme(themes.dark));
                }}
              >
                Dark
              </MenuItem>
            </Menu>
          </Grid>
          <Grid justify="space-evenly" direction="row" xs={8} sm={8} md={8} lg={8} xl={8}>
            <Grid xs={10} sm={10} md={10} lg={10} xl={10} padding={{ right: 0.2 }}>
              <Input
                placeholder="Search something..."
                value={state.searchText}
                onChange={(e) => dispatch(actions.setSearchText(e.target.value))}
              />
            </Grid>
            <Grid xs={2} sm={2} md={2} lg={2} xl={2}>
              <StyledSearchIcon
                color="textDark"
                size={1.2}
                iconName="search"
                rounded
                background="backgroundDark"
                onClick={() => dispatch(actions.setLastSearch())}
              />
            </Grid>
          </Grid>
          <Grid direction="row" justify="flex-end" xs={2} sm={2} md={2} lg={2} xl={2}>
            {/* <Grid  direction = "row-reverse"> */}

            {/* </Grid> */}
            {/* <Grid direction = "row-reverse" > */}
            <Grid padding={{ right: 3 }}>
              <Menu open={loginOpen}>
                <MenuItem
                  onClick={() => {
                    setLoginOpen(false);
                    if (state.user) logOut();
                    else logIn();
                  }}
                >
                  {state.user ? 'Log Out' : 'Log In'}
                </MenuItem>
              </Menu>
            </Grid>

            <StyledAvatar
              src={state.user ? state.user.avatarUrl : defaultUserPic}
              size={2}
              shape="circle"
              onClick={() => setLoginOpen(!loginOpen)}
            />

            {/* </Grid> */}
          </Grid>
        </Grid>
      </AppBarBase>
    )
  );
};

export default AppBar;
