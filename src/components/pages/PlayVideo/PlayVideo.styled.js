import styled from 'styled-components';
import Grid from '../../atoms/Grid/Grid';

const StyledPlayVideo = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
`;

const VideoList = styled(Grid)`
  overflow-y: scroll;
  height: 110vh;
  --ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export { StyledPlayVideo, VideoList };
