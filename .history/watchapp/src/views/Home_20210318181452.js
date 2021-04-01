import React from 'react';
import Header from 'components/atoms/Header/Header'
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
  <Header>{title}</Header>
);

export default Home;
