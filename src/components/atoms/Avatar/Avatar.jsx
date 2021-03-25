import React from 'react';
import { AvatarBase, AvatarImg } from './Avatar.styled';

const Avatar = (props) => {
  return (
    <AvatarBase size={props.size}>
      <AvatarImg src={props.src} shape={props.shape} />
    </AvatarBase>
  );
};

Avatar.propTypes = {};

export default Avatar;
