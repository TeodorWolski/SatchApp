import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  height: 600px;
  width: 65%;
  min-width: 500px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.grey100};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 18%;
  right: 15%;
  margin-top: 10%;
`;

const StyledInput = styled(Input)`
  position: relative;
  background-color: white;
  border: 3px solid ${({ theme }) => theme.videos};
  bottom: 8%;
  width: 420px;
`;

const StyledHeading = styled(Heading)`
  position: relative;
  margin: 0;
  padding: 0;
  left: 40%;
  top: 10%;
`;

const Videos = () => (
  <UserTemplate pageType="videos">
    <StyledHeading big>Let watch &#39;s watch some videos!</StyledHeading>
    <StyledWrapper>
      <StyledInput placeholder="Put there link to your video!" />
      <ReactPlayer controls="true" url="https://www.youtube.com/watch?v=ABkF3MSxoQg" />
    </StyledWrapper>
  </UserTemplate>
);

export default Videos;
