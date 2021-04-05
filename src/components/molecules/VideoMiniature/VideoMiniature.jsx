import React from 'react';
import {
  StyledDuration,
  StyledImage,
  StyledMiniatureBase,
} from './VideoMiniature.styled';

const VideoMiniature = ({ imageSource, duration }) => {
  return (
    <StyledMiniatureBase>
      <StyledImage alt="video-miniature" src={imageSource} />
      <StyledDuration>{duration}</StyledDuration>
    </StyledMiniatureBase>
  );
};

export default VideoMiniature;
