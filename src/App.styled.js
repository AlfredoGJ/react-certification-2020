import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
`;

export { StyledApp };
