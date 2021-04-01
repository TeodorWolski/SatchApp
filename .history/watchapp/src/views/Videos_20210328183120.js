import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 80%;
  width: 80%;
  border-radius: 25px;
  background-color: ${({ theme}) theme.grey100}
`;

const Videos = () => (
  <UserTemplate pageType="videos">
    <ReactPlayer controls="true" url="https://www.youtube.com/watch?v=ABkF3MSxoQg" />
  </UserTemplate>
);

export default Videos;
