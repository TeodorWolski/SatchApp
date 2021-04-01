import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import styled from 'styled-components';
import MiniCard from 'components/molecules/MiniCard/MiniCard';
import Heading from 'components/atoms/Heading/Heading';
import { photoData } from 'assets/data';

const StyledGrid = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 50px;
  top: 25%;
  left: 33%;

  @media (min-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1530px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 25px;
  }
`;

const StyledHeading = styled(Heading)`
  position: relative;
  top: 55%;
  margin-left: 15%;

  @media (min-width: 375px) {
    margin-right: 15%;
  }

  @media (min-width: 1530px) {
    margin-top: 5%;
    margin-left: 22%;
  }
`;

const Geeks = () => (
  <UserTemplate pageType="geeks">
    <StyledHeading big> I have buillt this app with these technologies:</StyledHeading>
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
