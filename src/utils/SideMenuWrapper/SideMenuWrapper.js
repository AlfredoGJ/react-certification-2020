import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import SideMenu from '../../components/molecules/SideMenu/SideMenu';
import { GlobalContext } from '../../providers/GlobalContext/GlobalContextProvider';
import MenuItem from '../../components/atoms/MenuItem/MenuItem';
import Icon from '../../components/atoms/Icon/Icon';
import actions from '../../providers/GlobalContext/actions';
import Grid from '../../components/atoms/Grid/Grid';

const SideMenuWrapper = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const history = useHistory();
  const location = useLocation();

  function hide() {
    dispatch(actions.setSidebar(false));
  }

  return (
    <SideMenu open={state.sidemenu} onBlur={() => dispatch(actions.setSidebar(false))}>
      <MenuItem
        selected={location.pathname === '/'}
        onClick={() => {
          history.push('/');
          hide();
        }}
      >
        <Grid sm={2}>
          <Icon name="home" size={1} round />
        </Grid>
        {' Home'}
      </MenuItem>
      {state.user && (
        <MenuItem
          selected={location.pathname === '/profile/favorites'}
          onClick={() => {
            history.push('/profile/favorites');
            hide();
          }}
        >
          <Grid>
            <Icon name="star" size={1} />
          </Grid>
          {'  Favorites'}
        </MenuItem>
      )}
    </SideMenu>
  );
};

export default SideMenuWrapper;
