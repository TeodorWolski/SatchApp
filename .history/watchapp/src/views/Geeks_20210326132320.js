import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import styled from 'styled-components';
import MiniCard from 'components/molecules/MiniCard/MiniCard';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const Geeks = () => (
  <UserTemplate pageType="geeks">
    <StyledGrid>
      <MiniCard />
    </StyledGrid>
  </UserTemplate>
);

export default Geeks;
