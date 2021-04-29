import React from 'react';
import IconButton from '../IconButton/IconButton';
import {
  StyledDuration,
  StyledImage,
  StyledMiniatureBase,
  StyledButtonWrapper,
  StyledFav,
} from './VideoMiniature.styled';

const VideoMiniature = ({ imageSource, duration, favable, isFav, onFabClick }) => {
  return (
    <StyledMiniatureBase>
      <StyledImage alt="video-miniature" src={imageSource} />
      <StyledDuration>{duration}</StyledDuration>
      {favable && (
        <StyledButtonWrapper>
          {isFav ? (
            <StyledFav>
              <IconButton
                rounded
                iconName="star"
                color="accent"
                size={1.3}
                onClick={onFabClick}
                background
              />
            </StyledFav>
          ) : (
            <StyledFav>
              <IconButton
                rounded
                iconName="star-o"
                size={1.3}
                color="accent"
                onClick={onFabClick}
              />
            </StyledFav>
          )}
        </StyledButtonWrapper>
      )}
    </StyledMiniatureBase>
  );
};

export default VideoMiniature;
