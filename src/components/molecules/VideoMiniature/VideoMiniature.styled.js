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

const StyledButtonWrapper = styled.div`
  color: ${(props) => props.theme.colors.accent};
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

const StyledFav = styled.div`
  &:hover {
    transform: scale(1.2);
    transition: all;
    padding: -2rem;
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export {
  StyledDuration,
  StyledImage,
  StyledMiniatureBase,
  StyledButtonWrapper,
  StyledFav,
};
