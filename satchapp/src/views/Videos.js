import React, { useState } from 'react';
import UserTemplate from 'templates/UserTemplate';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  height: 600px;
  width: 65%;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.grey200};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 15%;
  margin-top: 10%;

  @media (min-width: 350px) {
    width: 350px;
    left: 5px;
    top: 15%;
    height: 500px;
  }

  @media (min-width: 370px) {
    top: 8%;
    left: 13px;
  }

  @media (min-width: 410px) {
    width: 400px;
    left: 7px;
  }

  @media (min-width: 750px) {
    width: 550px;
    top: 15%;
    margin-left: 180px;
  }

  @media (min-width: 810px) {
    top: 1%;
    left: 16%;
    width: 800px;
  }
`;

const StyledInput = styled(Input)`
  position: relative;
  background-color: white;
  border: 3px solid ${({ theme }) => theme.videos};
  bottom: 8%;
  width: 420px;

  @media (min-width: 350px) {
    width: 300px;
    bottom: 4%;

    @media (min-width: 810px) {
      width: 420px;
    }
  }
`;

const StyledHeading = styled(Heading)`
  position: absolute;
  margin: 0;
  padding: 0;
  left: 37%;
  top: 9%;

  @media (min-width: 360px) {
    top: 5%;
    left: 3%;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 370px) {
    top: 3%;
  }

  @media (min-width: 410px) {
    left: 3px;
    top: 5%;
  }

  @media (min-width: 750px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    top: 5%;
    left: 18%;
  }

  @media (min-width: 810px) {
    width: 800px;
    left: 26%;
  }
`;

const Videos = () => {
  const [videoLink, setVideoLink] = useState({ videoLink: '' });
  const handleChange = (event) => {
    setVideoLink(event.target.value);
  };

  return (
    <UserTemplate pageType="videos">
      <StyledHeading>Let watch &#39;s watch some videos!</StyledHeading>
      <StyledWrapper>
        <StyledInput onChange={handleChange} placeholder="Put there link to your video!" />
        <ReactPlayer position="relative" width="100%" controls url={videoLink} />
      </StyledWrapper>
    </UserTemplate>
  );
};

export default Videos;
