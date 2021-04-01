import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 600px;
  width: 65%;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.grey100};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 15%;
  right: 10%;
  margin-top: 9%;
`;

const Videos = () => (
  <UserTemplate pageType="videos">
    <StyledWrapper>
      <ReactPlayer controls="true" url="https://www.youtube.com/watch?v=ABkF3MSxoQg" />
    </StyledWrapper>
  </UserTemplate>
);

export default Videos;
