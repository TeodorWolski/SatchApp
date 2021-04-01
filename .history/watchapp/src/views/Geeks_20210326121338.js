import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
`;

const Geeks = () => (
  <UserTemplate pageType="geeks">
    <StyledGrid>
      <h1>stachurski</h1>
      <h1>stachurski</h1>
      <h1>stachurski</h1>
      <h1>stachurski</h1>
      <h1>stachurski</h1>
      <h1>stachurski</h1>
      <h1>stachurski</h1>
    </StyledGrid>
  </UserTemplate>
);

export default Geeks;
