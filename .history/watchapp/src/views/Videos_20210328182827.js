import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import ReactPlayer from 'react-player';

const Videos = () => (
  <UserTemplate pageType="videos">
    <ReactPlayer controls="true" url="https://www.youtube.com/watch?v=ABkF3MSxoQg" />
  </UserTemplate>
);

export default Videos;
