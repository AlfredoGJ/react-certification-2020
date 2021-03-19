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
      <Grid justify="space-between" width={12}>
        <Grid width={3}>
          <IconButton iconName="bars" color="textDark" size={1} rounded />
        </Grid>
        <Grid justify="space-evenly" direction="row" width={6}>
          <Grid width={12} padding={{ right: 0.2 }}>
            <Input placeholder="Search something..." />
          </Grid>
          <Grid width={1}>
            <StyledSearchIcon
              color="textDark"
              size={1.2}
              iconName="search"
              rounded
              background="backgroundDark"
            />
          </Grid>
        </Grid>
        <Grid width={3} direction="row-reverse">
          <Avatar src="https://picsum.photos/200/300" size={2} shape="circle" />
        </Grid>
      </Grid>
    </AppBarBase>
  );
};

export default AppBar;
