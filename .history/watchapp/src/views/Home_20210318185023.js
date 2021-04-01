import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 19px 5px rgba(0, 0, 0, 0.52);
  box-shadow: 5px 5px 19px 5px rgba(0, 0, 0, 0.52);
  background-color: ${({ theme }) => theme.grey100};
`;

const StyledHeading = styled(Heading)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
  grid-row: 2;
  display: block;
  padding: 20px;
  text-align: center;
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
        Fort
      </StyledParagraph>
    </UserTemplate>
  </StyledWrapper>
);

export default Home;
