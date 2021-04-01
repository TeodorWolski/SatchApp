import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import styled from 'styled-components';
import MiniCard from 'components/molecules/MiniCard/MiniCard';

const StyledGrid = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 50px;
  top: 25%;
  left: 33%;
`;

const Data = [
  {
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    link: 'https://pl.reactjs.org/',
  },
  {
    photo: 'https://avatars.githubusercontent.com/u/13142323?s=400&v=4',
    link: 'https://redux.js.org/',
  },
  {
    photo: 'https://cdn-images-1.medium.com/max/1200/1*y1fCsOVCYCTi1B9Q_0BOYg.png',
    link: 'https://styled-components.com/',
  },
  {
    photo: 'https://cdn-images-1.medium.com/max/1200/1*y1fCsOVCYCTi1B9Q_0BOYg.png',
    link: 'https://styled-components.com/',
  },
  {
    photo: 'https://cdn-images-1.medium.com/max/1200/1*y1fCsOVCYCTi1B9Q_0BOYg.png',
    link: 'https://styled-components.com/',
  },
  {
    photo: 'https://cdn-images-1.medium.com/max/1200/1*y1fCsOVCYCTi1B9Q_0BOYg.png',
    link: 'https://styled-components.com/',
  },
];

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
