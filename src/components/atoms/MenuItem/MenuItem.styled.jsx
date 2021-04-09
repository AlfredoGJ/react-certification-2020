import styled from 'styled-components';

const StyledMenuItem = styled.div`
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    color: white;
  }
`;

export { StyledMenuItem };
