import React from 'react';
import PropTypes from 'prop-types';
import { StyledEmbedRoot, StyledIFrame } from './YouTubeEmbed.styled';

const YoutubeEmbed = ({ embedId }) => {
  return (
    <StyledEmbedRoot>
      <StyledIFrame
        width="100%"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </StyledEmbedRoot>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
