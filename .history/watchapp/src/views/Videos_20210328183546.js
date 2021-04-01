import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 500px;
  width: 80%;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.grey100};
  position: relative;
  bottom: 30%;
  left: 10px;
`;

const Videos = () => (
  <UserTemplate pageType="videos">
    <StyledWrapper>
      <ReactPlayer controls="true" url="https://www.youtube.com/watch?v=ABkF3MSxoQg" />
    </StyledWrapper>
  </UserTemplate>
);

export default Videos;
