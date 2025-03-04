import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.colors.backgroundDark};
  padding: 0.6rem 1rem 0.6rem;
  border-radius: 8rem;
  color: ${(props) => props.theme.colors.text};
  font-family: inherit;
`;

export default StyledInput;
