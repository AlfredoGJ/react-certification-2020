import styled from 'styled-components';

const StyledIconButton = styled.button`
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;
  ${(props) =>
    props.rounded && {
      width: `${props.size * 2}rem`,
      height: `${props.size * 2}rem`,
      borderRadius: '50%',
    }};

  background-color: transparent;

  /* ${(props) =>
    props.background
      ? `background-color: ${props.theme.colors[props.background]};`
      : 'background-color:transparent;'} */

  &:before {
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

    background: ${(props) => props.theme.colors[props.background]};

    display: block;
    content: ' ';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export { StyledIconButton };
