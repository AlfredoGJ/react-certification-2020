import React from 'react';
import IconButton from '../IconButton/IconButton';
import {
  StyledDuration,
  StyledImage,
  StyledMiniatureBase,
  StyledButtonWrapper,
} from './VideoMiniature.styled';

const VideoMiniature = ({ imageSource, duration, favable, isFav, onFabClick }) => {
  return (
    <StyledMiniatureBase>
      <StyledImage alt="video-miniature" src={imageSource} />
      <StyledDuration>{duration}</StyledDuration>
      {favable && (
        <StyledButtonWrapper>
          {isFav ? (
            <IconButton iconName="star" color="accent" size={1.6} onClick={onFabClick} />
          ) : (
            <IconButton
              iconName="star-o"
              size={1.6}
              color="accent"
              onClick={onFabClick}
            />
          )}
        </StyledButtonWrapper>
      )}
    </StyledMiniatureBase>
  );
};

export default VideoMiniature;
