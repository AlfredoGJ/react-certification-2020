import styled from 'styled-components';

const StyledMenuContainer = styled.div`
  position: absolute;
  display: inline-block;
`;
const StyledMenu = styled.div`
  border: 0.3px solid #e0e0e0;
  font-size: 0.8rem;
  font-weight: 300;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.colors.surface};
  position: absolute;
  top: ${(props) => props.top || 'none'}rem;
  right: ${(props) => props.right || 'none'}rem;
  left: ${(props) => props.left || 'none'}rem;
  bottom: ${(props) => props.bottom || 'none'}rem;
  float: none;
  display: flex;
  flex-direction: column;
  z-index: 1;
  min-width: 12rem;
  padding: 0.4rem 0rem;
`;

export { StyledMenu, StyledMenuContainer };
