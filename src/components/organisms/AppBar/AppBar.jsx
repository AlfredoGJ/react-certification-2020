import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import IconButton from '../../molecules/IconButton/IconButton';
import Avatar from '../../atoms/Avatar/Avatar';
import Input from '../../atoms/Input/Input';
import Grid from '../../atoms/Grid/Grid';
import { AppBarBase, StyledSearchIcon } from './AppBar.styled';
import { GlobalContext } from '../../../providers/GlobalContext/GlobalContextProvider';
import actions from '../../../providers/GlobalContext/actions';
import Menu from '../../molecules/Menu/Menu';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import themes from '../../../config/themes';

const AppBar = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const [themesOpen, setThemesOpen] = useState(false);
  const location = useLocation();

  console.log(location);

  return (
    location.pathname !== '/login' && (
      <AppBarBase>
        <Grid justify="space-between" xs={12}>
          <Grid xs={2} sm={2} md={2} lg={2} xl={2} justify="flex-start">
            <IconButton iconName="bars" color="textDark" size={1} rounded />
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
            <Avatar src="https://picsum.photos/200/300" size={2} shape="circle" />
            {/* </Grid> */}
          </Grid>
        </Grid>
      </AppBarBase>
    )
  );
};

export default AppBar;
