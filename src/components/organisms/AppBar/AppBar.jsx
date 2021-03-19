import React from 'react';
import styled from 'styled-components';
import IconButton from '../../molecules/IconButton/IconButton';
import Avatar from '../../atoms/Avatar/Avatar';
import Input from '../../atoms/Input/Input';
import Grid from '../../atoms/Grid/Grid';

const AppBarBase = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  display: block;
  padding: 0.5rem;
  position: fixed;
  width: 100%;
`;

const StyledSearchIcon = styled(IconButton)`
  /* margin-left: 2rem;
  border: 1px solid red; */
`;

const AppBar = () => {
  return (
    <AppBarBase>
      <Grid justify="space-between" xs={12}>
        <Grid xs={2} sm={2} md={2} lg={2} xl={2}>
          <IconButton iconName="bars" color="textDark" size={1} rounded />
        </Grid>
        <Grid justify="space-evenly" direction="row" xs={8} sm={8} md={8} lg={8} xl={8}>
          <Grid xs={10} sm={10} md={10} lg={10} xl={10} padding={{ right: 0.2 }}>
            <Input placeholder="Search something..." />
          </Grid>
          <Grid xs={2} sm={2} md={2} lg={2} xl={2}>
            <StyledSearchIcon
              color="textDark"
              size={1.2}
              iconName="search"
              rounded
              background="backgroundDark"
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
