import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import styled from 'styled-components';
import MiniCard from 'components/molecules/MiniCard/MiniCard';
import Heading from 'components/atoms/Heading/Heading';
import { photoData } from 'assets/data';

const StyledGrid = styled.div`
  display: grid;
  position: absolute;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 50px;
  top: 20%;
  left: 37%;

  @media (min-width: 100px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 415px) {
    grid-template-columns: repeat(2, 1fr);
    left: 17%;
  }

  @media (min-width: 801px) {
    left: 27%;
    margin-top: 25px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1535px) {
    left: 35%;
  }
`;

const StyledHeading = styled(Heading)`
  position: relative;
  top: 55%;
  margin-left: 5%;

  @media (min-width: 100px) {
    margin-top: 15%;
    text-align: center;
    font-size: 2.5rem;
  }

  @media (min-width: 415px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    top: 50%;
  }

  @media (min-width: 801px) {
    right: 10%;
  }

  @media (min-width: 1530px) {
    margin-top: 5%;
    margin-left: 22%;
  }
`;

const Geeks = () => (
  <UserTemplate pageType="geeks">
    <StyledHeading big> I have built this app with these technologies:</StyledHeading>
    <StyledGrid>
      {photoData.map(({ photo, link }) => (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <MiniCard photo={photo} />
        </a>
      ))}
    </StyledGrid>
  </UserTemplate>
);

export default Geeks;
