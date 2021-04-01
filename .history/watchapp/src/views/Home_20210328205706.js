import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import SocialMediaButton from 'components/atoms/SocialMediaButton/SocialMediaButton';
import { SocialMediaData } from 'assets/data/socialMediaData';

const StyledWrapper = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 97vh;
  grid-template-rows: repeat(3, 1fr);
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 19px 5px rgba(0, 0, 0, 0.52);
  box-shadow: 5px 5px 19px 5px rgba(0, 0, 0, 0.52);
  background-color: white;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-height: 100vh;
  }
`;

const StyledHeading = styled(Heading)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: hsl(275, 100%, 49%);
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
  grid-row: 2;
  display: block;
  padding: 20px;
  text-align: center;
`;

const StyledDevParagraph = styled(Paragraph)`
  position: relative;
  top: 10%;
  margin-top: 30px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const InnerWrapper = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 75px;
  bottom: 6%;
  left: 37%;
`;

const Home = () => (
  <StyledWrapper>
    <UserTemplate pageType="home">
      <StyledHeading>Welcome to SatchApp!</StyledHeading>
      <StyledParagraph>
        SatchApp is made for people who want to save something and watch it later. Using this app is
        easy:
        <ol>
          <li> Pick what you want to save,</li>
          <li> Save it,</li>
          <li> Go to video section paste your link and watch it!</li>
        </ol>
        <StyledParagraph>
          Fourth section is for developers, I wrote there some technologies I have used.
        </StyledParagraph>
        <StyledDevParagraph>Creator: Teodor Wolski</StyledDevParagraph>
        <StyledDevParagraph>Reach me on these socials:</StyledDevParagraph>
      </StyledParagraph>
      <InnerWrapper>
        {SocialMediaData.map(({ link, icon }) => (
          <SocialMediaButton
            as="a"
            href={link}
            icon={icon}
            target="_blank"
            rel="noopener noreferrer"
          />
        ))}
      </InnerWrapper>
    </UserTemplate>
  </StyledWrapper>
);

export default Home;
