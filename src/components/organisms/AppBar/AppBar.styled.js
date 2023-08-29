import styled from 'styled-components';
import IconButton from '../../molecules/IconButton/IconButton';
import Avatar from '../../atoms/Avatar/Avatar';
import Menu from '../../molecules/Menu/Menu';

const AppBarBase = styled.div`
  z-index: 300;
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

const StyledAvatar = styled(Avatar)`
  cursor: pointer;
`;
const UserMenu = styled(Menu)`
  position: absolute;
  top: 2rem;
  right: 0;
  bottom: 0;
  background-color: red;
`;

export { AppBarBase, StyledSearchIcon, StyledAvatar, UserMenu };
