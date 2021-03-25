import styled from 'styled-components';

const StyledIconButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  ${(props) =>
    props.rounded && {
      width: `${props.size * 2}rem`,
      height: `${props.size * 2}rem`,
      borderRadius: '50%',
    }};
  ${(props) =>
    props.background
      ? `background-color: ${props.theme.colors[props.background]};`
      : 'background-color:transparent;'}
`;

export default StyledIconButton;
