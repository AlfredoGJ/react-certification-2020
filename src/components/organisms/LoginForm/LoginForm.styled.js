import styled from 'styled-components';
import Grid from '../../atoms/Grid/Grid';

const StyledLoginFormContainer = styled(Grid)`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 0.5rem;
  padding: 1rem;
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
`;

export { StyledLoginForm, StyledLoginFormContainer, StyledLabel };
