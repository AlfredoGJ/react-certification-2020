import styled from 'styled-components';

const StyledSideMenu = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 14rem;
  position: fixed;
  margin-top: 3.39rem;
  z-index: 300;
  box-shadow: -0.8rem 1.9rem 1.6rem 0rem ${(props) => props.theme.colors.text};
`;

export default StyledSideMenu;
