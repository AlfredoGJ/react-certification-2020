import styled from 'styled-components';

const StyledIcon = styled.i`
  color: ${(props) => props.theme.colors[props.color]};
  font-size: ${(props) => props.size}rem;
`;

export default StyledIcon;
