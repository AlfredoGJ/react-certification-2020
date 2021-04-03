import React, { useState, useContext } from 'react';
import IconButton from '../../molecules/IconButton/IconButton';
import Avatar from '../../atoms/Avatar/Avatar';
import Input from '../../atoms/Input/Input';
import Grid from '../../atoms/Grid/Grid';
import { AppBarBase, StyledSearchIcon } from './AppBar.styled';
import { YoutubeSearchContext } from '../../../providers/Youtube/SearchProvider';

const AppBar = () => {
  const [, search] = useContext(YoutubeSearchContext);
  const [searchText, setSearchText] = useState('');

  return (
    <AppBarBase>
      <Grid justify="space-between" xs={12}>
        <Grid xs={2} sm={2} md={2} lg={2} xl={2}>
          <IconButton iconName="bars" color="textDark" size={1} rounded />
        </Grid>
        <Grid justify="space-evenly" direction="row" xs={8} sm={8} md={8} lg={8} xl={8}>
          <Grid xs={10} sm={10} md={10} lg={10} xl={10} padding={{ right: 0.2 }}>
            <Input
              placeholder="Search something..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Grid>
          <Grid xs={2} sm={2} md={2} lg={2} xl={2}>
            <StyledSearchIcon
              color="textDark"
              size={1.2}
              iconName="search"
              rounded
              background="backgroundDark"
              onClick={() => search(searchText)}
            />
          </Grid>
        </Grid>
        <Grid direction="row-reverse" xs={2} sm={2} md={2} lg={2} xl={2}>
          <Avatar src="https://picsum.photos/200/300" size={2} shape="circle" />
        </Grid>
      </Grid>
    </AppBarBase>
  );
};

export default AppBar;
