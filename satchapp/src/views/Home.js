import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';
import SocialMediaButton from 'components/atoms/SocialMediaButton/SocialMediaButton';
import { SocialMediaData } from 'assets/data/socialMediaData';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;

  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 19px 5px rgba(0, 0, 0, 0.52);
  box-shadow: 5px 5px 19px 5px rgba(0, 0, 0, 0.52);
  background-color: white;

  @media (min-width: 355px) {
    width: 340px;
    height: 89vh;
    right: 66%;
  }

  @media (min-width: 370px) {
    right: 60%;
  }

  @media (min-width: 410px) {
    height: 89vh;
    right: 52%;
    width: 390px;
  }

  @media (min-width: 755px) {
    right: 0;
    width: 100%;
    height: 100vh;
    top: 0;
  }
`;

const StyledHeading = styled(Heading)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: hsl(275, 100%, 49%);

  @media (max-width: 415px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
  display: block;
  padding: 0px;
  text-align: center;

  @media (max-width: 415px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledSocialMediaButton = styled(SocialMediaButton)`
  @media (max-width: 415px) {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    right: 30%;
    height: 45px;
    width: 45px;
  }
  @media (min-width: 755px) {
    margin-top: 30px;
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 75px;
  bottom: 6%;
  left: 37%;

  @media (max-width: 415px) {
    position: relative;
    left: 0;
    bottom: 0;
    margin-top: 20px;
  }

  @media (min-width: 1024px) {
    left: 37%;
  }

  @media (min-width: 1635px) {
    left: 40%;
  }
`;

const Home = () => (
  <UserTemplate pageType="home">
    <StyledWrapper>
      <StyledHeading>Welcome to SatchApp!</StyledHeading>
      <StyledParagraph>
        SatchApp is made for people who want to save something and watch it later. Using this app is
        easy:
      </StyledParagraph>
      <ol>
        <li>
          <StyledParagraph>Pick what you want to save,</StyledParagraph>
        </li>
        <li>
          <StyledParagraph> Save it,</StyledParagraph>
        </li>
        <li>
          <StyledParagraph> Go to video section paste your link and watch it!</StyledParagraph>
        </li>
      </ol>
      <StyledParagraph>
        Fourth section is for developers, I wrote there some technologies I have used.
      </StyledParagraph>
      <StyledParagraph>Creator: Teodor Wolski</StyledParagraph>
      <StyledParagraph>Reach me on these socials:</StyledParagraph>
      <InnerWrapper>
        {SocialMediaData.map(({ link, icon, id }) => (
          <StyledSocialMediaButton
            as="a"
            href={link}
            icon={icon}
            target="_blank"
            rel="noopener noreferrer"
            key={id}
          />
        ))}
      </InnerWrapper>
    </StyledWrapper>
  </UserTemplate>
);

export default Home;
