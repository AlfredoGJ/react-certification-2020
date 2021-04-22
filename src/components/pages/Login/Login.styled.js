import styled from 'styled-components';
import Grid from '../../atoms/Grid/Grid';

const StyledLogin = styled(Grid)`
  min-height: 100vh;
  background-image: linear-gradient(
    45deg,
    ${(props) => props.theme.colors.accent} 50%,
    ${(props) => props.theme.colors.secondary}
  );
`;

export { StyledLogin };
