import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import styled from 'styled-components';

const StyledSmallCard = styled.div`
  border-radius: 25px;
  background-color: ${({ theme }) => theme.geeks};
`;

const Geeks = () => (
  <UserTemplate pageType="geeks">
    <h1>for geeks views</h1>
  </UserTemplate>
);

export default Geeks;
