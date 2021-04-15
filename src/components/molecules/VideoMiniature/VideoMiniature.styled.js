import styled from 'styled-components';

const StyledMiniatureBase = styled.div`
  width: 100%;
  position: relative;
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 1rem;
`;

const StyledDuration = styled.div`
  border-radius: 0.2rem;
  padding: 0rem 0.3rem;
  background-color: ${(props) => props.theme.colors.accent};
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  color: white;
`;

export { StyledDuration, StyledImage, StyledMiniatureBase };
