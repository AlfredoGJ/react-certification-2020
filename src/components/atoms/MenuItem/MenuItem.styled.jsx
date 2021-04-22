import styled from 'styled-components';

const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    color: white;
  }
  ${(props) =>
    props.selected && {
      color: [props.theme.colors.accent],
    }}
`;

export { StyledMenuItem };
