import styled from 'styled-components';

const AvatarBase = styled.div`
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;

  ${(props) =>
    props.shape === 'circle' && {
      borderRadius: '50%',
    }}

  ${(props) =>
    props.shape === 'rounded' && {
      borderRadius: '1.8rem',
    }}
`;

export { AvatarBase, AvatarImg };
