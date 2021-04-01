import React, { useState } from 'react';
import UserTemplate from 'templates/UserTemplate';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  height: 600px;
  width: 65%;
  min-width: 550px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.grey100};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 21%;
  right: 15%;
  margin-top: 10%;

  @media (min-width: 415px) {
    left: 24%;
  }
`;

const StyledInput = styled(Input)`
  position: relative;
  background-color: white;
  border: 3px solid ${({ theme }) => theme.videos};
  bottom: 8%;
  width: 420px;
`;

const StyledHeading = styled(Heading)`
  position: fixed;
  margin: 0;
  padding: 0;
  left: 37%;
  top: 9%;

  @media (min-width: 415px) {
    top: 2%;
  }
`;

const Videos = () => {
  const [videoLink, setVideoLink] = useState({ videoLink: '' });
  const handleChange = (event) => {
    setVideoLink(event.target.value);
  };

  return (
    <UserTemplate pageType="videos">
      <StyledHeading big>Let watch &#39;s watch some videos!</StyledHeading>
      <StyledWrapper>
        <StyledInput onChange={handleChange} placeholder="Put there link to your video!" />
        <ReactPlayer width="550 px" controls="true" url={videoLink} />
      </StyledWrapper>
    </UserTemplate>
  );
};

export default Videos;
