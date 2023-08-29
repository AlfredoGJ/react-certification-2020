import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50rem;
  border: 1px solid ${(props) => props.theme.colors.accent};
  background-color: transparent;
  ${(props) =>
    props.variant === 'primary' && {
      color: props.theme.colors.accent,
    }}
  width:100%;
  &:hover {
    background-image: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.accent} 50%,
      ${(props) => props.theme.colors.secondary}
    );
    color: white;
  }
  &:active {
    transform: translateY(0.05rem);
    background-image: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.accent} 60%,
      ${(props) => props.theme.colors.secondary}
    );
  }
`;

export { StyledButton };
