import styled from 'styled-components';

const StyledEmbedRoot = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  width: 100%;
`;
const StyledIFrame = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export { StyledEmbedRoot, StyledIFrame };
