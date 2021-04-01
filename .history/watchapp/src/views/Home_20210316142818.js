import React from 'react';
import UserTemplate from 'templates/UserTemplate';
import Card from 'components/molecules/Card/Card';
import styled from 'styled-components';

const About = [
  {
    title: 'Welcome to SatchApp',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim non reprehenderit impedit quod repellat possimus atque nobis inventore debitis, vero magni id accusantium iste, rem doloremque nemo porro rerum eligendi!',
  },
];

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <StyledWrapper>
    <UserTemplate pageType="home">
      {About.map((item) => (
        <Card pageType="home" title={item.title} content={item.content} />
      ))}
    </UserTemplate>
  </StyledWrapper>
);

export default Home;
