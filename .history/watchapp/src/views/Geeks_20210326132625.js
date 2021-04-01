import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import styled from 'styled-components';
import MiniCard from 'components/molecules/MiniCard/MiniCard';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 30px;
`;

const Geeks = () => (
  <UserTemplate pageType="geeks">
    <StyledGrid>
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
    </StyledGrid>
  </UserTemplate>
);

export default Geeks;
